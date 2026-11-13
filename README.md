# devid-site

The website for [Devid](https://github.com/hadziqmtqn/devid) at https://devid.bekenweb.com: the landing page and the user docs.

- **Stack:** Next.js with [Fumadocs](https://fumadocs.dev), exported as a static site (`output: 'export'`, search built at build time). Hosted on Vercel.
- **Landing page:** `app/(home)/page.tsx`, ported from the "Devid Landing Page" design canvas. The copy button is `components/install-command.tsx`.
- **Docs:** `content/docs/*.mdx`; the sidebar order is `content/docs/meta.json`. This is the one user guide for Devid: a change users can see updates these pages, merged when the Devid release ships.
- **Theme:** Devid's palette in `app/global.css` (light and dark), fonts in `app/layout.tsx`.
- **Icons:** `app/favicon.ico` (16, 32, 48 px), `app/icon.png` and `app/apple-icon.png`, rendered from the app icon's geometry in devid's `crates/gui/icons/render.swift`, full-bleed and with its simpler 16 and 32 px drawings.
- **Social images** (Open Graph and X, 1200×630): `lib/og.tsx` renders them at build time, `/og/home.png` for the landing page and `/og/docs/<page>/image.png` for each docs page. Its fonts (Inter, Space Grotesk; SIL OFL 1.1) are in `assets/fonts/`.

```sh
npm install
npm run dev          # http://localhost:4321 (3xxx ports are kept free for other local services)
npm run build        # static site in out/
npm run lint
npm run types:check
```
