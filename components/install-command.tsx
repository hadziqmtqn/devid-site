'use client';
import { Fragment, useEffect, useRef, useState } from 'react';

type Copied = 'idle' | 'ok' | 'fail';

/**
 * The command as shown: a line may break at a space or after a `/` of the URL, never inside a word
 * such as `--needed` or `devid-binaries`. Selecting and copying it by hand gives the command unchanged.
 */
function Wrapped({ command }: { command: string }) {
  return command.split(' ').map((word, i) => (
    <Fragment key={i}>
      {i > 0 && ' '}
      {(word.match(/[^/]*\/+|[^/]+/g) ?? [word]).map((part, j) => (
        <Fragment key={j}>
          {j > 0 && <wbr />}
          <span className="dv-cmd-part">{part}</span>
        </Fragment>
      ))}
    </Fragment>
  ));
}

/** One install command in a terminal-style box, with a Copy button. Its styles are the dv-cmd classes in app/global.css. */
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
    <div className="dv-cmd">
      <pre className="dv-cmd-text">
        <span className="dv-cmd-prompt" aria-hidden="true">❯</span>
        <code>
          <Wrapped command={command} />
        </code>
      </pre>
      <button type="button" onClick={copy} aria-label={copyLabel} className="dv-cmd-copy">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15V6a2 2 0 0 1 2-2h9"></path></svg>
        <span aria-live="polite">{copied === 'ok' ? 'Copied' : copied === 'fail' ? 'Copy failed' : 'Copy'}</span>
      </button>
    </div>
  );
}
