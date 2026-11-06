import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// Social preview images (Open Graph and X), 1200×630, rendered at build time in Devid's style.
export const ogSize = { width: 1200, height: 630 };

const font = (file: string) => readFile(join(process.cwd(), 'assets/fonts', file));

export async function renderOG({ badge, title, accent, description }: {
  /** A small label next to the wordmark, such as "docs". */
  badge?: string;
  title: string;
  /** Part of the title shown in green (the first occurrence). */
  accent?: string;
  description: string;
}) {
  const [before, after] = accent && title.includes(accent) ? title.split(accent, 2) : [title, undefined];
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#16151F', color: '#F4F4FA', fontFamily: 'Inter' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '64px 72px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <svg width="64" height="64" viewBox="0 0 100 100">
              <rect width="100" height="100" rx="22" fill="#2A2936" />
              <path d="M37 46 V37 A13 13 0 0 1 63 37 V46" fill="none" stroke="#34C77B" strokeWidth="8" strokeLinecap="round" />
              <rect x="25" y="44" width="50" height="36" rx="9" fill="#F4F4FA" />
              <path d="M37 55 L45 62 L37 69" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M51 69 H62" fill="none" stroke="#16151F" strokeWidth="5.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '44px', letterSpacing: '-0.04em' }}>devid</span>
            {badge ? (
              <span style={{ marginLeft: '6px', padding: '4px 16px', border: '2px solid #3A3948', borderRadius: '999px', color: '#34C77B', fontSize: '24px', fontWeight: 500 }}>{badge}</span>
            ) : null}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '22px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', fontFamily: 'Space Grotesk', fontSize: title.length > 40 ? '68px' : '76px', lineHeight: 1.08, letterSpacing: '-0.03em', maxWidth: '1020px' }}>
              {after === undefined ? (
                title
              ) : (
                <span style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {before}
                  <span style={{ color: '#34C77B' }}>{accent}</span>
                  {after}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', fontSize: '32px', lineHeight: 1.4, color: '#C9C7D6', maxWidth: '1056px' }}>{description}</div>
          </div>
          <div style={{ display: 'flex', fontSize: '26px', fontWeight: 500, color: '#A9A7BA' }}>devid.bekenweb.com</div>
        </div>
        <div style={{ height: '10px', background: '#34C77B' }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Inter', data: await font('Inter-Regular.ttf'), weight: 400 },
        { name: 'Inter', data: await font('Inter-Medium.ttf'), weight: 500 },
        { name: 'Space Grotesk', data: await font('SpaceGrotesk-SemiBold.ttf'), weight: 600 },
      ],
    },
  );
}
