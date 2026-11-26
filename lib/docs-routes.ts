import { notFound } from 'next/navigation';
import { docsLlms, source } from './source';
import { getPageImageUrl, getPageMarkdownUrl } from './shared';
import { renderOG } from './og';
import type { Lang } from './i18n';

// What the route handlers of a docs page serve, in English (app/llms.mdx, app/og) and Indonesian
// (app/id/llms.mdx, app/id/og): its Markdown for Copy Markdown, and its social image.

export async function docsMarkdown(lang: Lang, slug: string[] | undefined) {
  // remove the appended "content.md"
  const page = source.getPage(slug?.slice(0, -1), lang);
  if (!page) notFound();

  return new Response(await docsLlms.page(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function docsMarkdownParams(lang: Lang) {
  return source.getPages(lang).map((page) => ({
    slug: getPageMarkdownUrl(page).segments,
  }));
}

const badges: Record<Lang, string> = { en: 'docs', id: 'panduan' };

export function docsImage(lang: Lang, slug: string[]) {
  const page = source.getPage(slug.slice(0, -1), lang);
  if (!page) notFound();

  return renderOG({ badge: badges[lang], title: page.data.title, description: page.data.description ?? '' });
}

export function docsImageParams(lang: Lang) {
  return source.getPages(lang).map((page) => ({
    slug: getPageImageUrl(page).segments,
  }));
}
