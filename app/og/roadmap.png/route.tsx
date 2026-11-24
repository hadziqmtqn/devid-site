import { renderOG } from '@/lib/og';

export const revalidate = false;

// The roadmap's social image, as a .png file so static hosting sends the right type.
export function GET() {
  return renderOG({
    badge: 'roadmap',
    title: 'What Devid does today, and what comes next.',
    accent: 'what comes next',
    description: 'Every release, newest first, and the plans after it: macOS 15 and newer, then Windows.',
  });
}
