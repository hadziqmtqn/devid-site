'use client';
import { useEffect, useRef, useState } from 'react';

type Copied = 'idle' | 'ok' | 'fail';

/** One install command in a terminal-style box, with a Copy button. */
export function InstallCommand({ command, copyLabel }: { command: string; copyLabel: string }) {
  const [copied, setCopied] = useState<Copied>('idle');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    const done = (state: Copied) => {
      setCopied(state);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied('idle'), 2000);
    };
    if (!navigator.clipboard) return done('fail');
    navigator.clipboard.writeText(command).then(() => done('ok'), () => done('fail'));
  };

  return (
    <div style={{ boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: '8px', background: '#0E0D15', border: '1px solid #2E2D3A', borderRadius: '12px', padding: '6px 6px 6px 0' }}>
      <pre style={{ margin: 0, flex: '1 1 auto', minWidth: 0, padding: '12px 20px', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 'clamp(13px, 1.05cqi, 15px)', lineHeight: 1.7, color: '#E4E3EE', whiteSpace: 'pre', overflowX: 'auto' }}>
        <span style={{ color: 'var(--dv-accent)' }}>❯</span> {command}
      </pre>
      <button type="button" onClick={copy} aria-label={copyLabel} style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px', padding: '0 16px', border: '1px solid #3A3948', borderRadius: '9px', background: '#1E1D29', color: '#F4F4FA', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15V6a2 2 0 0 1 2-2h9"></path></svg>
        <span aria-live="polite">{copied === 'ok' ? 'Copied' : copied === 'fail' ? 'Copy failed' : 'Copy'}</span>
      </button>
    </div>
  );
}
