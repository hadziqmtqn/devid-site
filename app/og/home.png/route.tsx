import { renderOG } from '@/lib/og';

export const revalidate = false;

// The landing page's social image, as a .png file so static hosting sends the right type.
export function GET() {
  return renderOG({
    title: 'Every project gets its own https:// address.',
    accent: 'https://',
    description: 'Local PHP development for Intel Macs. No Homebrew, Docker or VM.',
  });
}
