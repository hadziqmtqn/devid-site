/** The padlock-and-prompt mark with the "devid" wordmark, for the docs navigation. */
export function Logo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg width="28" height="28" viewBox="0 0 100 100" aria-hidden="true">
        <rect width="100" height="100" rx="22" fill="#2A2936"></rect>
        <path d="M37 46 V37 A13 13 0 0 1 63 37 V46" fill="none" style={{ stroke: 'var(--dv-accent)' }} strokeWidth="8" strokeLinecap="round"></path>
        <rect x="25" y="44" width="50" height="36" rx="9" fill="#F4F4FA"></rect>
        <path d="M37 55 L45 62 L37 69" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M51 69 H62" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round"></path>
      </svg>
      <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.04em' }}>devid</span>
    </span>
  );
}
