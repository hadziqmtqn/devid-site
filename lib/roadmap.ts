// The roadmap: /roadmap shows all of it, the landing page the latest release and what comes next.
// When a release ships, add it at the top of `releases` and update `latest`. `code` in backticks
// shows as code.

export type Plan = { title: string; note: string };
export type Release = { version: string; date: string; items: string[] };

export const next: Plan[] = [
  { title: 'macOS 15 up to the latest macOS', note: 'On Intel, tested as far as GitHub’s macOS runners allow.' },
  { title: 'A shorter install command', note: 'On Devid’s own domain.' },
];

export const later: Plan[] = [
  { title: 'Linux (Debian-based), then Windows', note: 'One platform at a time. Windows is the largest effort: its own PHP builds, no php-fpm.' },
  { title: 'Developer tools', note: 'A dump viewer.' },
];

/** The newest release, as the landing page sums it up. */
export const latest: Plan & { version: string } = {
  version: '0.16',
  title: 'Terminal commands',
  note: 'Devid’s PHP versions, nginx, Caddy and Mailpit by name in any shell, with Add to PATH in the desktop app.',
};

/** Newest first. The first `RECENT` show; the rest fold under "Show earlier releases". */
export const releases: Release[] = [
  {
    version: '0.16',
    date: '20 November 2026',
    items: [
      'Terminal commands: `php8.4`, `nginx -t`, `mailpit` and the rest from any shell, editor or script',
      'Add to PATH in the desktop app’s Settings, or `devid path on`',
      'Share with a cloudflared in `~/.local/bin`, without Homebrew',
    ],
  },
  {
    version: '0.15',
    date: '17 November 2026',
    items: ['Mail: an inbox for the mail your apps send, in the desktop app', 'A notification for new mail, with the sender and the subject'],
  },
  {
    version: '0.14',
    date: '16 November 2026',
    items: [
      'Apple silicon: Devid, PHP, the extensions and the web servers built for arm64',
      'Each release smoke-tested with the real PHP and nginx on both kinds of Mac',
      'Ports 80 and 443 checked live; `devid helper install` repairs them',
    ],
  },
  {
    version: '0.13',
    date: '14 November 2026',
    items: ['Logs by source, with levels and search', 'The Sites table and a quick menu in the desktop app', 'Update progress for Devid, PHP and the web servers'],
  },
  {
    version: '0.12',
    date: '9–12 November 2026',
    items: [
      'Share a site through a Cloudflare quick tunnel',
      'The desktop app updates Devid in the background',
      'A proxy site gets a free dev server port, passed to its commands as `PORT`',
    ],
  },
  {
    version: '0.10–0.11',
    date: '8 November 2026',
    items: ['Dev servers and other commands per site, started and stopped from Devid', 'A site’s details in the desktop app'],
  },
  {
    version: '0.8–0.9',
    date: '8 November 2026',
    items: ['App types detected per folder: Laravel, WordPress, Vite, Next.js, Node.js and more', 'A local port per site, for your own tunnel'],
  },
  {
    version: '0.5–0.7',
    date: '5–6 November 2026',
    items: ['Devid.app: a menu-bar icon and its window', 'Login settings and automatic update checks'],
  },
  {
    version: '0.3–0.4',
    date: '4–5 November 2026',
    items: ['PHP extensions from Devid’s catalog, prebuilt, several at once'],
  },
  {
    version: '0.1–0.2',
    date: '2–3 November 2026',
    items: ['*.test sites: park, link and a PHP version per site, over local HTTPS', 'PHP 8.3, 8.4 and 8.5; nginx, Caddy or Apache', 'The CLI and the TUI'],
  },
];

export const RECENT = 4;
