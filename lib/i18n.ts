import { defineI18n } from 'fumadocs-core/i18n';
import { uiTranslations as fumadocsUiKeys } from 'fumadocs-ui/i18n';

// The guide is in English and Indonesian. English keeps its URLs (/docs/...) and Indonesian is
// under /id (/id/docs/...). The site is a static export, so there is no i18n middleware to rewrite
// URLs: each language has real routes, app/(en) and app/id. An Indonesian page that is not
// translated yet shows the English file (`fallbackLanguage` defaults to the default language).
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'id'],
  hideLocale: 'default-locale',
  // A translation sits next to its English page: install.mdx and install.id.mdx, meta.id.json.
  parser: 'dot',
});

export type Lang = (typeof i18n.languages)[number];

// The guide's links are written as /docs/... in every language; on a page in another language
// they lead to that language's page (/id/docs/...).

/** Points a link to an English docs page at the same page in `lang`. */
export function localizeHref(href: string | undefined, lang: string | undefined) {
  if (!href || !lang || lang === i18n.defaultLanguage) return href;
  return /^\/docs(?=$|[/#?])/.test(href) ? `/${lang}${href}` : href;
}

/** The same for every link in a page's Markdown (Copy Markdown, /id/llms.mdx/...). */
export function localizeMarkdownLinks(markdown: string, lang: string | undefined) {
  if (!lang || lang === i18n.defaultLanguage) return markdown;
  return markdown.replace(/(\]\(|href=")\/docs(?=[/#?)"])/g, `$1/${lang}/docs`);
}

// Fumadocs' own labels (search, table of contents, pagination...) and the language names in the
// language switch.
export const uiTranslations = i18n
  .translations()
  .extend(fumadocsUiKeys())
  .add({
    en: { displayName: 'English' },
    id: {
      displayName: 'Bahasa Indonesia',
      'Ask AI(AI chat button)': 'Tanya AI',
      'Back to Home(404 not found page)': 'Kembali ke beranda',
      'Choose a language(language switcher)': 'Pilih bahasa',
      'Choose a language(language switcher)(aria-label)': 'Pilih bahasa',
      'Close Banner(banner)(aria-label)': 'Tutup banner',
      'Close Search(search dialog)(aria-label)': 'Tutup pencarian',
      'Close Sidebar(aria-label)': 'Tutup sidebar',
      'Close Sidebar(sidebar)(aria-label)': 'Tutup sidebar',
      'Close(image zoom)(aria-label)': 'Tutup',
      'Collapse Sidebar(sidebar)(aria-label)': 'Ciutkan sidebar',
      'Copied Anchor Link(heading anchor)(aria-label)': 'Tautan bagian tersalin',
      'Copied Link(accordion)(aria-label)': 'Tautan tersalin',
      'Copied Markdown(page actions)': 'Markdown tersalin',
      'Copied Text(code block)(aria-label)': 'Teks tersalin',
      'Copy Anchor Link(heading anchor)(aria-label)': 'Salin tautan bagian',
      'Copy Link(accordion)(aria-label)': 'Salin tautan',
      'Copy Markdown(page actions)': 'Salin Markdown',
      'Copy Text(code block)(aria-label)': 'Salin teks',
      'Dark(theme switcher)(aria-label)': 'Gelap',
      'Default(type table)': 'Bawaan',
      'Edit on GitHub(edit page)': 'Sunting di GitHub',
      'Hide Sidebar(sidebar)': 'Sembunyikan sidebar',
      'Image Viewer(image zoom)(aria-label)': 'Penampil gambar',
      'Language(language switcher)': 'Bahasa',
      'Last updated on(page footer)': 'Terakhir diperbarui',
      'Layout Tab(layout tab trigger)': 'Tab tata letak',
      'Light(theme switcher)(aria-label)': 'Terang',
      'Next Image(image zoom)(aria-label)': 'Gambar berikutnya',
      'Next Page(pagination)': 'Berikutnya',
      'No Headings(table of contents)': 'Tidak ada judul',
      'No results found(search dialog)': 'Tidak ada hasil',
      'On this page(table of contents)': 'Di halaman ini',
      'Open Search(search trigger)(aria-label)': 'Buka pencarian',
      'Open Sidebar(aria-label)': 'Buka sidebar',
      'Open Sidebar(sidebar)(aria-label)': 'Buka sidebar',
      'Open in ChatGPT(page actions)': 'Buka di ChatGPT',
      'Open in Claude(page actions)': 'Buka di Claude',
      'Open in Cursor(page actions)': 'Buka di Cursor',
      'Open in GitHub(page actions)': 'Buka di GitHub',
      'Open in Scira AI(page actions)': 'Buka di Scira AI',
      'Open(page actions)': 'Buka',
      'Options(aria-label)': 'Opsi',
      'Page Not Found(404 not found page)': 'Halaman tidak ditemukan',
      'Parameters(type table)': 'Parameter',
      'Previous Image(image zoom)(aria-label)': 'Gambar sebelumnya',
      'Previous Page(pagination)': 'Sebelumnya',
      'Prop(type table)': 'Prop',
      'Read {url}, I want to ask questions about it.(page actions)': 'Baca {url}, saya ingin bertanya tentang isinya.',
      'Returns(type table)': 'Hasil',
      'Search failed(search dialog)': 'Pencarian gagal',
      'Search failed, showing results for {query}(search dialog)': 'Pencarian gagal, menampilkan hasil untuk {query}',
      'Search(search dialog)': 'Cari',
      'Search(search trigger)': 'Cari',
      'Show Sidebar(sidebar)': 'Tampilkan sidebar',
      'Skip to Content(skip link)': 'Langsung ke isi',
      'System(theme switcher)(aria-label)': 'Sistem',
      'Table of Contents(inline table of contents)': 'Daftar isi',
      'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 not found page)':
        'Halaman yang Anda cari mungkin sudah dihapus, berganti nama, atau untuk sementara tidak tersedia.',
      'Theme(site menu)': 'Tema',
      'Toggle Menu(home layout header)(aria-label)': 'Buka atau tutup menu',
      'Toggle Theme(theme switcher)(aria-label)': 'Ganti tema',
      'Type(type table)': 'Tipe',
      'View as Markdown(page actions)': 'Lihat sebagai Markdown',
    },
  });
