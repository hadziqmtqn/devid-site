'use client';
import Link from 'next/link';
import { useState } from 'react';

// The landing page's navbar. At 760px and below (global.css) the links move into a menu that opens over the hero.
const LINKS = [
  { href: '#why', label: 'Why Devid' },
  { href: '#features', label: 'Features' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#requirements', label: 'Requirements' },
  { href: '/docs', label: 'Docs' },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div style={{ position: 'relative', zIndex: 20 }}>
      <nav aria-label="Main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 32px' }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#F4F4FA' }}>
          <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#2A2936"></rect><path d="M37 46 V37 A13 13 0 0 1 63 37 V46" fill="none" style={{ stroke: 'var(--dv-accent)' }} strokeWidth="8" strokeLinecap="round"></path><rect x="25" y="44" width="50" height="36" rx="9" fill="#F4F4FA"></rect><path d="M37 55 L45 62 L37 69" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M51 69 H62" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round"></path></svg>
          <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '26px', fontWeight: 600, letterSpacing: '-0.04em' }}>devid</span>
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', marginLeft: 'auto', alignItems: 'center', fontSize: '15px' }}>
          <div className="dv-navlinks" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', alignItems: 'center' }}>
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: '#C9C7D6', textDecoration: 'none', padding: '10px 0' }}>{label}</Link>
            ))}
          </div>
          <a href="#install" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 20px', borderRadius: '10px', background: 'var(--dv-accent)', color: '#16151F', fontWeight: 600, textDecoration: 'none' }}>Install</a>
          <button type="button" className="dv-menubtn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="dv-mobile-menu" style={{ alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', padding: 0, border: '1px solid #3A3948', borderRadius: '10px', background: 'transparent', color: '#F4F4FA', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}></path>
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="dv-mobile-menu" className="dv-mobilemenu" style={{ position: 'absolute', top: '100%', left: 0, right: 0, flexDirection: 'column', padding: '4px 24px 16px', background: '#16151F', borderTop: '1px solid #2E2D3A', borderBottom: '1px solid #2E2D3A', boxShadow: '0 24px 48px rgba(0,0,0,0.45)', fontSize: '17px' }}>
          {LINKS.map(({ href, label }, i) => (
            <Link key={href} href={href} onClick={close} style={{ display: 'flex', alignItems: 'center', minHeight: '48px', color: '#F4F4FA', textDecoration: 'none', borderBottom: i < LINKS.length - 1 ? '1px solid #2E2D3A' : undefined }}>{label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
