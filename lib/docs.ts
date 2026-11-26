import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { source } from './source';
import { i18n } from './i18n';
import { sourceHash } from './source-hash.mjs';

export type SourcePage = NonNullable<ReturnType<typeof source.getPage>>;

/**
 * A page in another language is translated when it has its own file (`install.id.mdx`). A page
 * without one is the English file, shown in that language's sidebar and URL (Fumadocs' fallback).
 */
export function isTranslated(page: SourcePage) {
  return page.locale !== i18n.defaultLanguage && page.path.endsWith(`.${page.locale}.mdx`);
}

/** A page whose content is its own: an English page, or a translation. Not a fallback. */
export function hasOwnContent(page: SourcePage) {
  return page.locale === i18n.defaultLanguage || isTranslated(page);
}

export type TranslationState =
  | { kind: 'source' }
  | { kind: 'current' }
  /** The English page changed after the translation recorded its hash. */
  | { kind: 'outdated'; sourceUrl: string }
  | { kind: 'fallback'; sourceUrl: string };

export async function translationState(page: SourcePage): Promise<TranslationState> {
  if (page.locale === i18n.defaultLanguage) return { kind: 'source' };
  const english = source.getPage(page.slugs, i18n.defaultLanguage);
  if (!english) return { kind: 'current' };
  if (!isTranslated(page)) return { kind: 'fallback', sourceUrl: english.url };

  const text = await readFile(join(process.cwd(), 'content/docs', english.path), 'utf8');
  return page.data.translationOf === sourceHash(text) ? { kind: 'current' } : { kind: 'outdated', sourceUrl: english.url };
}

/**
 * The hreflang links of a docs page: every language with its own content, and x-default for
 * English. None when the page has no translation. `origin` makes the URLs absolute (sitemap).
 */
export function docsAlternates(slugs: string[], origin = ''): Record<string, string> | undefined {
  const languages: Record<string, string> = {};
  for (const lang of i18n.languages) {
    const page = source.getPage(slugs, lang);
    if (page && hasOwnContent(page)) languages[lang] = `${origin}${page.url}`;
  }
  if (Object.keys(languages).length < 2) return undefined;
  return { ...languages, 'x-default': languages[i18n.defaultLanguage] };
}
