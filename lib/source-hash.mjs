import { createHash } from 'node:crypto';

/**
 * The hash of an English docs page's file, as a translation records it in its `translationOf`
 * frontmatter. Shared by the docs pages (lib/docs.ts) and scripts/translations.mjs.
 *
 * @param {string} text the English .mdx file, read as UTF-8
 * @returns {string} the first 12 hex digits of its SHA-256
 */
export function sourceHash(text) {
  return createHash('sha256').update(text).digest('hex').slice(0, 12);
}
