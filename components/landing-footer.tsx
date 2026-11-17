import Link from 'next/link';

// The site footer of the landing page and the roadmap.
export function LandingFooter() {
  return (
    <footer style={{ background: '#16151F', borderTop: '1px solid #2E2D3A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px 28px', alignItems: 'center', fontSize: '14px', color: '#A9A7BA' }}>
        <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontWeight: 600, color: '#F4F4FA', fontSize: '18px', letterSpacing: '-0.03em' }}>devid</span>
        <span>
          © 2026 Devid by <a href="https://bekenweb.com" style={{ color: '#C9C7D6' }}>Bekenweb</a> · open source under the{' '}
          <a href="https://github.com/hadziqmtqn/devid/blob/main/LICENSE" style={{ color: '#C9C7D6' }}>AGPL-3.0</a>, provided as is
        </span>
        <div className="dv-footlinks" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', marginLeft: 'auto' }}>
          <Link href="/docs" style={{ color: '#C9C7D6' }}>Docs</Link>
          <Link href="/roadmap" style={{ color: '#C9C7D6' }}>Roadmap</Link>
          <a href="https://github.com/hadziqmtqn/devid" style={{ color: '#C9C7D6' }}>Source</a>
          <a href="https://github.com/hadziqmtqn/devid-binaries/releases" style={{ color: '#C9C7D6' }}>Releases</a>
          <a href="https://github.com/hadziqmtqn/devid/issues" style={{ color: '#C9C7D6' }}>Issues</a>
        </div>
      </div>
    </footer>
  );
}
