# devid-site

The website for [Devid](https://github.com/hadziqmtqn/devid) at https://devid.bekenweb.com: the landing page and the user docs.

- **Stack:** Next.js with [Fumadocs](https://fumadocs.dev), exported as a static site (`output: 'export'`, search built at build time). Hosted on Vercel.
- **Landing page:** `app/(en)/(home)/page.tsx`, ported from the "Devid Landing Page" design canvas. The install section's tabs and commands are `components/install-tabs.tsx`; the command box with its Copy button is `components/install-command.tsx`.
- **Docs:** `content/docs/*.mdx`; the sidebar order is `content/docs/meta.json`. This is the one user guide for Devid: a change users can see updates these pages, merged when the Devid release ships. The guide is in English and Indonesian: see [Bahasa Indonesia](#bahasa-indonesia).
- **Theme:** Devid's palette in `app/global.css` (light and dark), fonts in `components/root-layout.tsx`.
- **Icons:** `app/favicon.ico` (16, 32, 48 px), `app/icon.png` and `app/apple-icon.png`, rendered from the app icon's geometry in devid's `crates/gui/icons/render.swift`, full-bleed and with its simpler 16 and 32 px drawings.
- **Social images** (Open Graph and X, 1200×630): `lib/og.tsx` renders them at build time, `/og/home.png` for the landing page and `/og/docs/<page>/image.png` (`/id/og/docs/...` in Indonesian) for each docs page. Its fonts (Inter, Space Grotesk; SIL OFL 1.1) are in `assets/fonts/`.

```sh
npm install
npm run dev                  # http://localhost:4321 (3xxx ports are kept free for other local services)
npm run build                # static site in out/
npm run lint
npm run types:check
npm run translations:check   # Indonesian pages that are missing or behind the English ones
```

## Bahasa Indonesia

The guide is in English and Indonesian, with Fumadocs' i18n (`lib/i18n.ts`). English keeps `/docs/...`; Indonesian is at `/id/docs/...`, and the sidebar has a language switch. The landing page, the roadmap and `llms.txt` / `llms-full.txt` are English only.

- **Files:** a translation sits next to its page: `install.mdx` and `install.id.mdx`, `meta.json` and `meta.id.json` (the sidebar's section titles). A page without an `.id.mdx` shows its English text at `/id/docs/...` with a note that it is not translated yet, and its canonical URL is the English page.
- **Routes:** a static export has no i18n middleware, so each language has its own routes and root layout (for `<html lang>`): `app/(en)` (landing page, roadmap, English guide) and `app/id` (Indonesian guide, its Markdown and its social images). The 404 page then has no root layout of its own: `app/global-not-found.tsx` (`experimental.globalNotFound` in `next.config.mjs`).
- **Search:** one index for both languages (`app/api/search/route.ts`), filtered by the page's language.
- **Links and headings:** links between pages stay `/docs/...` in both languages; on Indonesian pages they lead to `/id/docs/...`. An Indonesian heading keeps its English heading's ID with `[#id]`, as in `## Browser [#browsers]`, so a `#anchor` is the same in both languages.

**Every guide change is made in both languages, in the same PR.** Each translation records in its frontmatter (`translationOf`) the hash of the English file it follows. After updating a page and its translation, stamp the translation:

```sh
npm run translations:stamp -- install linux   # after updating install.id.mdx and linux.id.mdx
npm run translations:check                    # lists missing and outdated translations
```

When an English page changes and its translation is not stamped again, the Indonesian page says that the English version is newer and links to it. The build does not fail.

### Writing Indonesian

- Address the reader as "Anda".
- Commands, options, paths, file names, variables, log lines and program output stay as they are. In code blocks, only `#` comments are translated, except the `# added by devid` marker.
- Labels that the desktop app and the TUI show stay in English, as written there: **Add to PATH**, Settings › Terminal, Start, **Open in Terminal**.
- Keep these terms the same on every page:

| English | Indonesian |
|---|---|
| site | situs |
| app, the desktop app | aplikasi, aplikasi desktop |
| serve | menyajikan |
| park, link | park, link: folder yang di-park, situs yang di-link |
| isolate | mengunci situs ke satu versi PHP (`devid isolate`) |
| a site's commands | perintah |
| default | default |
| bundled (extensions) | bawaan |
| download, install, update | mengunduh, menginstal, memperbarui (pembaruan) |
| certificate, certificate authority | sertifikat, certificate authority (CA) |
| extension, account | ekstensi, akun |
| idle | tidak dipakai |
| troubleshooting, uninstall (page titles) | Pemecahan masalah, Uninstal |
| dev server, proxy, port, tunnel, web server, web root, daemon, log, password, database, inbox, hot reload, request, browser, terminal, command line | unchanged |
