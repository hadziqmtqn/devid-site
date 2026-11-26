import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// One index for both languages, built at build time; the search dialog filters it by the page's
// language (components/search.tsx). The default `multilingual` tokenizer of ZBSearch, Fumadocs'
// search engine, splits English and Indonesian words alike.
export const { staticGET: GET } = createFromSource(source);
