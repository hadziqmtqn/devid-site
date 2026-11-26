import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/logo';
import type { Lang } from '@/lib/i18n';

const releases: Record<Lang, string> = { en: 'Releases', id: 'Rilis' };

export function baseOptions(lang: Lang): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      // The landing page is in English only.
      url: '/',
    },
    // The source lives in devid (AGPL-3.0); releases and issues in devid-binaries; these docs in devid-site.
    githubUrl: 'https://github.com/hadziqmtqn/devid',
    links: [{ text: releases[lang], url: 'https://github.com/hadziqmtqn/devid-binaries/releases', external: true }],
  };
}
