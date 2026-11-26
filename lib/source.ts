import { llms, loader } from 'fumadocs-core/source';
import { docsRoute } from './shared';
import { i18n, localizeMarkdownLinks } from './i18n';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({
      // A translation (`<page>.id.mdx`) records the hash of the English file it follows
      // (lib/source-hash.mjs, written by `npm run translations:stamp`).
      translationOf: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  i18n,
  plugins: [],
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${localizeMarkdownLinks(await page.data.getText('processed'), page.locale)}`,
});
