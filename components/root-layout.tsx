import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { Provider } from '@/components/provider';
import { type Lang, uiTranslations } from '@/lib/i18n';
import { siteUrl } from '@/lib/shared';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-jetbrains-mono' });

const descriptions: Record<Lang, string> = {
  en: 'Local PHP and Node.js development for Intel and Apple silicon Macs, with no Homebrew, Docker or VM.',
  id: 'Pengembangan PHP dan Node.js lokal untuk Mac Intel dan Apple silicon, tanpa Homebrew, Docker, atau VM.',
};

export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: { default: 'Devid', template: '%s | Devid' },
    description: descriptions[lang],
    openGraph: { siteName: 'Devid', type: 'website' },
    twitter: { card: 'summary_large_image' },
  };
}

// The <html> of both root layouts, app/(en)/layout.tsx and app/id/layout.tsx. There are two so that
// each language's pages say their own `lang`: a static export cannot read the URL in one layout.
export function RootLayout({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider i18n={i18nProvider(uiTranslations, lang)}>{children}</Provider>
      </body>
    </html>
  );
}
