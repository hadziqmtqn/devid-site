import type { Metadata } from 'next';
import { LandingNav } from '@/components/landing-nav';
import { LandingFooter } from '@/components/landing-footer';
import { RECENT, later, next, releases, type Plan, type Release } from '@/lib/roadmap';
import { appName } from '@/lib/shared';
import { ogSize } from '@/lib/og';

// Ported from the "Roadmap" boards on the "Devid Landing Page" design canvas.
const DESCRIPTION =
  'What Devid does today, release by release, and what comes next: macOS 15 and newer, a shorter install command, then Windows.';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: DESCRIPTION,
  alternates: { canonical: '/roadmap' },
  openGraph: {
    url: '/roadmap',
    siteName: appName,
    type: 'website',
    images: { url: '/og/roadmap.png', ...ogSize, alt: 'Devid roadmap' },
  },
};

const MONO = 'var(--font-jetbrains-mono), monospace';
const HEADING = 'var(--font-space-grotesk), sans-serif';
const RULE = '1px solid #E4E2EC';

/** Text with `code` in backticks shown as code. */
function Text({ text }: { text: string }) {
  return text.split('`').map((part, i) => (i % 2 ? <code key={i} style={{ fontFamily: MONO, fontSize: '15px' }}>{part}</code> : part));
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D7A4C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: '0 0 auto', marginTop: '4px' }}>
      <path d="M5 12l5 5L19 7"></path>
    </svg>
  );
}

function Plans({ label, items, dark }: { label: string; items: Plan[]; dark?: boolean }) {
  return (
    <div style={{ borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', gap: '16px', ...(dark ? { background: '#16151F', color: '#F4F4FA' } : { background: '#FFFFFF', border: RULE }) }}>
      <h2 style={{ margin: 0, alignSelf: 'flex-start', fontSize: '13px', lineHeight: 1.6, fontWeight: 600, borderRadius: '999px', padding: '4px 12px', ...(dark ? { color: '#16151F', background: 'var(--dv-accent)' } : { color: '#3F3D52', background: '#EEEDF4' }) }}>{label}</h2>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {items.map((p) => (
          <li key={p.title} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontWeight: 600 }}>{p.title}</span>
            <span style={{ color: dark ? '#C9C7D6' : '#5A5870', fontSize: '15px' }}>{p.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReleaseRow({ release, latest }: { release: Release; latest?: boolean }) {
  return (
    <article className="rm-rel" style={{ display: 'grid', gridTemplateColumns: '220px minmax(0, 1fr)', columnGap: '40px', padding: '24px 0', borderTop: RULE }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
          <h3 style={{ margin: 0, fontFamily: MONO, fontSize: '22px', lineHeight: 1.3, fontWeight: 700 }}>{release.version}</h3>
          {latest && <span style={{ fontSize: '13px', fontWeight: 600, color: '#1D6B44', background: '#E3F6EC', borderRadius: '999px', padding: '2px 10px' }}>Latest</span>}
        </div>
        <span style={{ fontSize: '15px', color: '#5A5870' }}>{release.date}</span>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {release.items.map((item) => (
          <li key={item} style={{ display: 'flex', gap: '10px' }}>
            <Check />
            <span><Text text={item} /></span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function RoadmapPage() {
  const shown = releases.slice(0, RECENT);
  const earlier = releases.slice(RECENT);
  const span = earlier.length ? `${earlier[earlier.length - 1].version.split('–')[0]} to ${earlier[0].version.split('–').pop()}` : '';
  return (
    <div style={{ containerType: 'inline-size', containerName: 'dv', background: '#FBFAFD', color: '#15142B', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: 'clamp(16px, 1.2cqi, 17px)', lineHeight: 1.6 }}>
      <header style={{ background: '#16151F', color: '#F4F4FA' }}>
        <LandingNav current="/roadmap" />
      </header>

      <main>
        <section aria-labelledby="rm-title" style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(40px, 5cqi, 72px) 24px clamp(32px, 3.3cqi, 48px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 id="rm-title" style={{ margin: 0, fontFamily: HEADING, fontSize: 'clamp(40px, 4.2cqi, 60px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.03em', textWrap: 'balance' }}>Roadmap</h1>
          <p style={{ margin: 0, maxWidth: '680px', color: '#5A5870', fontSize: 'clamp(17px, 1.35cqi, 19px)' }}>
            What Devid does today, release by release, and what comes next. There are no dates: new macOS versions are added as GitHub’s macOS runners make testing possible.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 24px', fontSize: '15px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#3F3D52' }}>
              <span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'var(--dv-accent)' }}></span>
              <span>Latest release <span style={{ fontFamily: MONO, fontWeight: 700 }}>{releases[0].version}</span>, {releases[0].date}</span>
            </span>
            <a href="https://github.com/hadziqmtqn/devid-binaries/releases" style={{ color: '#1D6B44', fontWeight: 500, padding: '10px 0' }}>Release notes on GitHub ↗</a>
          </div>
        </section>

        <section aria-label="Coming up" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px clamp(48px, 5cqi, 72px)' }}>
          <div className="rm-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
            <Plans label="Next" items={next} dark />
            <Plans label="Later" items={later} />
          </div>
        </section>

        <section aria-labelledby="rm-shipped" style={{ background: '#FFFFFF', borderTop: RULE, borderBottom: RULE }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(48px, 5cqi, 72px) 24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px 24px', paddingBottom: '16px' }}>
              <h2 id="rm-shipped" style={{ margin: 0, fontFamily: HEADING, fontSize: 'clamp(30px, 3.1cqi, 44px)', lineHeight: 1.12, fontWeight: 600, letterSpacing: '-0.02em' }}>Shipped</h2>
              <span style={{ fontSize: '15px', color: '#5A5870' }}>Newest first</span>
            </div>
            {shown.map((r, i) => <ReleaseRow key={r.version} release={r} latest={i === 0} />)}
            {earlier.length > 0 && (
              <details className="rm-more" style={{ borderTop: RULE, paddingTop: '16px' }}>
                <summary style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 18px', border: '1px solid #D9D6E3', borderRadius: '10px', background: '#FBFAFD', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                  <span className="rm-show">Show earlier releases, {span}</span>
                  <span className="rm-hide">Hide earlier releases</span>
                </summary>
                <div style={{ marginTop: '16px' }}>
                  {earlier.map((r) => <ReleaseRow key={r.version} release={r} />)}
                </div>
              </details>
            )}
          </div>
        </section>

        <section aria-labelledby="rm-ask" style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(40px, 4.4cqi, 64px) 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 40px' }}>
          <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h2 id="rm-ask" style={{ margin: 0, fontFamily: HEADING, fontSize: '26px', lineHeight: 1.2, fontWeight: 600 }}>Missing something?</h2>
            <p style={{ margin: 0, color: '#5A5870' }}>
              Ask for it in the issues, with what you are trying to do. Out of scope: databases (use a tool such as DBngin) and Docker- or VM-based setups.
            </p>
          </div>
          <a href="https://github.com/hadziqmtqn/devid/issues/new/choose" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '48px', padding: '0 22px', borderRadius: '12px', background: '#16151F', color: '#F4F4FA', fontWeight: 600, textDecoration: 'none' }}>
            Ask for a feature ↗
          </a>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
