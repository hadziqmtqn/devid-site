/**
 * "Also by Bekenweb": a card for ERD Builder Pro. The text follows erdbuilderpro.com's hero, in English.
 * `docs` sits under the docs pages' table of contents and follows the light/dark theme;
 * `landing` sits in the landing page's dark install section.
 */
const url = (placement: 'docs' | 'landing') =>
  `https://erdbuilderpro.com/?utm_source=devid&utm_medium=banner&utm_campaign=also-by-bekenweb&utm_content=${placement}`;

export function ErdPromo({ placement }: { placement: 'docs' | 'landing' }) {
  if (placement === 'docs') {
    return (
      <a
        href={url('docs')}
        target="_blank"
        rel="noopener"
        className="mt-6 flex flex-col gap-2 rounded-xl border bg-fd-card p-4 text-sm text-fd-card-foreground no-underline transition-colors hover:border-fd-primary/50 hover:bg-fd-accent"
      >
        <span className="text-xs font-medium text-fd-muted-foreground">Also by Bekenweb</span>
        <span className="flex items-center gap-2.5 font-semibold">
          {/* eslint-disable-next-line @next/next/no-img-element -- a static SVG; the site is exported without an image optimizer */}
          <img src="/erd-builder-pro.svg" alt="" width={28} height={28} className="rounded-md" />
          ERD Builder Pro
        </span>
        <span className="text-fd-muted-foreground">Design the database, explain the decisions, generate the SQL.</span>
        <span className="font-medium text-fd-primary">Try it in the browser →</span>
      </a>
    );
  }
  return (
    <a
      href={url('landing')}
      target="_blank"
      rel="noopener"
      style={{ marginTop: '28px', width: '100%', maxWidth: '920px', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 20px', padding: '18px 20px', border: '1px solid #2E2D3A', borderRadius: '14px', background: '#1E1D29', color: '#F4F4FA', textAlign: 'left', textDecoration: 'none' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- a static SVG; the site is exported without an image optimizer */}
      <img src="/erd-builder-pro.svg" alt="" width={48} height={48} style={{ borderRadius: '11px', flex: '0 0 auto', boxShadow: '0 0 0 1px #3A3948' }} />
      <span style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '13px', color: '#A9A7BA' }}>Also by Bekenweb</span>
        <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '18px', fontWeight: 600 }}>ERD Builder Pro</span>
        <span style={{ fontSize: '15px', color: '#C9C7D6' }}>Design the database, explain the decisions, generate the SQL. Export to PostgreSQL, MySQL, SQLite, MSSQL or Prisma.</span>
      </span>
      <span style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 18px', border: '1px solid #4A4858', borderRadius: '10px', fontSize: '15px', fontWeight: 500 }}>Try it in the browser →</span>
    </a>
  );
}
