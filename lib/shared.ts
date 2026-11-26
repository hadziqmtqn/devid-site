import { createGetUrl } from 'fumadocs-core/source';
import { i18n } from './i18n';

export const appName = 'Devid';
export const siteUrl = 'https://devid.bekenweb.com';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// The repository that holds these docs (for "Edit on GitHub").
export const gitConfig = {
  user: 'hadziqmtqn',
  repo: 'devid-site',
  branch: 'main',
};

// Like the pages: no prefix for English, /id for Indonesian (/id/llms.mdx/docs/..., /id/og/docs/...).
const getContentUrl = createGetUrl(docsContentRoute, i18n);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute, i18n);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
