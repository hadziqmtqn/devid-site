import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
    },
    // The source lives in devid (AGPL-3.0); releases and issues in devid-binaries; these docs in devid-site.
    githubUrl: 'https://github.com/hadziqmtqn/devid',
    links: [{ text: 'Releases', url: 'https://github.com/hadziqmtqn/devid-binaries/releases', external: true }],
  };
}
