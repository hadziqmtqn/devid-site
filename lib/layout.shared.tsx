import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
    },
    // Releases and issues live in devid-binaries; these docs live in devid-site.
    githubUrl: 'https://github.com/hadziqmtqn/devid-binaries',
    links: [{ text: 'Releases', url: 'https://github.com/hadziqmtqn/devid-binaries/releases', external: true }],
  };
}
