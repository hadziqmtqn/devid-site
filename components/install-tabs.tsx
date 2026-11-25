'use client';
import { useId, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode } from 'react';
import { InstallCommand } from '@/components/install-command';

// The landing page's install section: one tab per system, each with its command. Styles: the dv-install classes in app/global.css.
const CLI_COMMAND = 'curl -fsSL https://github.com/hadziqmtqn/devid-binaries/releases/download/devid-latest/install.sh | sh';
const GUI_COMMAND = `${CLI_COMMAND} -s -- --gui`;
const UBUNTU_COMMAND = `sudo apt install curl libnss3-tools && ${CLI_COMMAND}`;
const ARCH_COMMAND = `sudo pacman -S --needed curl nss nftables && ${CLI_COMMAND}`;

type Platform = 'macos' | 'ubuntu' | 'arch';

const TABS: { id: Platform; label: string }[] = [
  { id: 'macos', label: 'macOS' },
  { id: 'ubuntu', label: 'Ubuntu' },
  { id: 'arch', label: 'Arch / CachyOS' },
];

const MAC = {
  app: { label: 'With the desktop app', command: GUI_COMMAND, copyLabel: 'Copy the install command with the desktop app' },
  cli: { label: 'CLI and TUI only', command: CLI_COMMAND, copyLabel: 'Copy the install command without the app' },
} as const;
type MacChoice = keyof typeof MAC;

// A Linux browser starts on the Ubuntu tab, since browsers do not name the distribution. Everything else, phones
// included, starts on macOS, as does the static HTML until the page hydrates.
const noSubscribe = () => () => {};
function detectPlatform(): Platform | null {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  if (/Android|CrOS/i.test(nav.userAgent)) return null;
  return /linux/i.test(nav.userAgentData?.platform || nav.platform) ? 'ubuntu' : null;
}

function Panel({ base, platform, active, children }: { base: string; platform: Platform; active: Platform; children: ReactNode }) {
  return (
    <div role="tabpanel" id={`${base}-panel-${platform}`} aria-labelledby={`${base}-tab-${platform}`} tabIndex={0} className="dv-tabpanel" data-active={platform === active}>
      {children}
    </div>
  );
}

export function InstallTabs() {
  const id = useId();
  const detected = useSyncExternalStore(noSubscribe, detectPlatform, () => null);
  const [chosen, setChosen] = useState<Platform | null>(null);
  const [mac, setMac] = useState<MacChoice>('app');
  const active = chosen ?? detected ?? 'macos';

  // The ARIA tabs pattern: arrow keys, Home and End move to a tab and select it; Tab goes on to the panel.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const i = tabs.indexOf(e.target as HTMLButtonElement);
    let next: number;
    switch (e.key) {
      case 'ArrowRight': next = (i + 1) % tabs.length; break;
      case 'ArrowLeft': next = (i - 1 + tabs.length) % tabs.length; break;
      case 'Home': next = 0; break;
      case 'End': next = tabs.length - 1; break;
      default: return;
    }
    e.preventDefault();
    setChosen(TABS[next].id);
    tabs[next].focus();
  };

  return (
    <div className="dv-install">
      <div role="tablist" aria-label="Operating system" className="dv-tablist" onKeyDown={onKeyDown}>
        {TABS.map((t) => (
          <button key={t.id} type="button" role="tab" id={`${id}-tab-${t.id}`} aria-controls={`${id}-panel-${t.id}`} aria-selected={t.id === active} tabIndex={t.id === active ? 0 : -1} className="dv-tab" onClick={() => setChosen(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="dv-tabpanels">
        <Panel base={id} platform="macos" active={active}>
          <div role="radiogroup" aria-label="What to install" className="dv-choice">
            {(Object.keys(MAC) as MacChoice[]).map((c) => (
              <label key={c} className="dv-choice-opt">
                <input type="radio" name={`${id}-mac`} value={c} checked={mac === c} onChange={() => setMac(c)} className="sr-only" />
                <span>{MAC[c].label}</span>
              </label>
            ))}
          </div>
          <InstallCommand key={mac} command={MAC[mac].command} copyLabel={MAC[mac].copyLabel} />
        </Panel>
        <Panel base={id} platform="ubuntu" active={active}>
          <p className="dv-install-note">CLI and TUI only, on Ubuntu 24.04 and 26.04.</p>
          <InstallCommand command={UBUNTU_COMMAND} copyLabel="Copy the install command for Ubuntu" />
        </Panel>
        <Panel base={id} platform="arch" active={active}>
          <p className="dv-install-note">CLI and TUI only, on Arch Linux and the distributions built on it.</p>
          <InstallCommand command={ARCH_COMMAND} copyLabel="Copy the install command for Arch Linux and CachyOS" />
        </Panel>
      </div>
    </div>
  );
}
