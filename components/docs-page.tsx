import type { ComponentProps } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card } from 'fumadocs-ui/components/card';
import { getMDXComponents } from '@/components/mdx';
import { ErdPromo } from '@/components/erd-promo';
import { source } from '@/lib/source';
import { i18n, localizeHref, type Lang } from '@/lib/i18n';
import { docsAlternates, hasOwnContent, translationState, type TranslationState } from '@/lib/docs';
import { appName, getPageImageUrl, getPageMarkdownUrl, gitConfig } from '@/lib/shared';
import { ogSize } from '@/lib/og';

// A docs page in either language: app/(en)/docs and app/id/docs render this.
export async function DocsPageView({ lang, slug }: { lang: Lang; slug?: string[] }) {
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;
  const Link =(props: ComponentProps<'a'>) => <defaultMdxComponents.a {...props} href={localizeHref(props.href, lang)} />;
  const LocalCard = (props: ComponentProps<typeof Card>) => <Card {...props} href={localizeHref(props.href, lang)} />;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} tableOfContent={{ footer: <ErdPromo placement="docs" /> }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <TranslationNotice state={await translationState(page)} />
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page, Link),
            Card: LocalCard,
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

// Written in Indonesian, the only translation so far.
function TranslationNotice({ state }: { state: TranslationState }) {
  if (state.kind === 'fallback') {
    return <Callout type="info">Halaman ini belum diterjemahkan, jadi isinya masih dalam bahasa Inggris.</Callout>;
  }
  if (state.kind === 'outdated') {
    return (
      <Callout type="warn">
        Versi bahasa Inggris halaman ini sudah diperbarui sejak terjemahan ini ditulis, jadi sebagian isinya mungkin
        tertinggal. <a href={state.sourceUrl}>Baca versi bahasa Inggris</a>.
      </Callout>
    );
  }
  return null;
}

export function docsStaticParams(lang: Lang) {
  return source.getPages(lang).map((page) => ({ slug: page.slugs }));
}

export function docsMetadata(lang: Lang, slug?: string[]): Metadata {
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  // A page not translated yet points search engines at the English page it shows.
  const canonical = hasOwnContent(page) ? page.url : (source.getPage(page.slugs, i18n.defaultLanguage)?.url ?? page.url);

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: { canonical, languages: docsAlternates(page.slugs) },
    // A page's openGraph replaces the layout's, so it repeats the site's own fields.
    openGraph: {
      url: page.url,
      siteName: appName,
      type: 'article',
      images: { url: getPageImageUrl(page).url, ...ogSize, alt: page.data.title },
    },
  };
}
