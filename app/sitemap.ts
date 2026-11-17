import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/shared';

export const revalidate = false;

// The landing page, the roadmap and every docs page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, { url: `${siteUrl}/roadmap` }, ...source.getPages().map((page) => ({ url: `${siteUrl}${page.url}` }))];
}
