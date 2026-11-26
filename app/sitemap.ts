import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/shared';
import { docsAlternates, hasOwnContent } from '@/lib/docs';

export const revalidate = false;

// The landing page, the roadmap and every docs page in each language, with hreflang links between
// a page and its translation. An Indonesian URL that shows an untranslated English page is left out.
export default function sitemap(): MetadataRoute.Sitemap {
  const docs = source
    .getPages()
    .filter(hasOwnContent)
    .map((page) => {
      const languages = docsAlternates(page.slugs, siteUrl);
      return { url: `${siteUrl}${page.url}`, ...(languages && { alternates: { languages } }) };
    });

  return [{ url: siteUrl }, { url: `${siteUrl}/roadmap` }, ...docs];
}
