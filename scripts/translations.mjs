// Keeps the Indonesian guide in step with the English one.
//
// Each translation (content/docs/<page>.id.mdx) records the hash of the English file it follows in
// its frontmatter, as `translationOf` (lib/source-hash.mjs). When the English page changes and the
// translation does not, the Indonesian page shows a notice (lib/docs.ts) until the translation is
// brought up to date and stamped again.
//
//   npm run translations:check               lists missing and outdated translations, exits 1 if any
//   npm run translations:stamp -- <page>...  records the English page's current hash in <page>.id.mdx
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { sourceHash } from '../lib/source-hash.mjs';

const lang = 'id';
const dir = join(import.meta.dirname, '..', 'content', 'docs');
const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/;
const field = /^translationOf:.*$/m;

async function read(file) {
  try {
    return await readFile(join(dir, file), 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
}

/** The English pages, as paths without `.mdx` (`install`, or `folder/page` in a subfolder). */
async function englishPages() {
  const files = await readdir(dir, { recursive: true });
  return files
    .filter((file) => file.endsWith('.mdx') && !file.endsWith(`.${lang}.mdx`))
    .map((file) => file.slice(0, -'.mdx'.length))
    .sort();
}

function recordedHash(translation) {
  const fields = frontmatter.exec(translation)?.[1] ?? '';
  return fields.match(/^translationOf:\s*['"]?([0-9a-f]+)['"]?\s*$/m)?.[1];
}

async function check() {
  let problems = 0;
  for (const page of await englishPages()) {
    const translation = await read(`${page}.${lang}.mdx`);
    if (translation === undefined) {
      console.log(`missing   ${page}.${lang}.mdx`);
      problems++;
      continue;
    }
    const hash = sourceHash(await read(`${page}.mdx`));
    if (recordedHash(translation) !== hash) {
      console.log(`outdated  ${page}.${lang}.mdx: ${page}.mdx changed since its translation`);
      problems++;
    }
  }
  console.log(problems === 0 ? 'Every page has an up-to-date translation.' : `${problems} translation(s) to write or update.`);
  if (problems > 0) process.exitCode = 1;
}

async function stamp(args) {
  if (args.length === 0) {
    console.error('Name the pages whose translation is up to date: npm run translations:stamp -- install linux');
    process.exitCode = 1;
    return;
  }
  for (const arg of args) {
    const page = arg.replace(/^content\/docs\//, '').replace(new RegExp(`(\\.${lang})?\\.mdx$`), '');
    const english = await read(`${page}.mdx`);
    const translation = await read(`${page}.${lang}.mdx`);
    const match = translation === undefined ? null : frontmatter.exec(translation);
    if (english === undefined || !match) {
      console.error(`${page}: needs ${page}.mdx and ${page}.${lang}.mdx with frontmatter`);
      process.exitCode = 1;
      continue;
    }
    // Quoted, so that YAML never reads a hash of digits as a number.
    const line = `translationOf: '${sourceHash(english)}'`;
    const fields = field.test(match[1]) ? match[1].replace(field, () => line) : `${match[1]}\n${line}`;
    const start = translation.indexOf(match[1]);
    await writeFile(join(dir, `${page}.${lang}.mdx`), translation.slice(0, start) + fields + translation.slice(start + match[1].length));
    console.log(`stamped   ${page}.${lang}.mdx`);
  }
}

const [command, ...args] = process.argv.slice(2);
if (command === 'check') await check();
else if (command === 'stamp') await stamp(args);
else {
  console.error('Usage: node scripts/translations.mjs check | stamp <page>...');
  process.exitCode = 1;
}
