import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    // The site has two root layouts, app/(en) and app/id (one per language), so a 404 has no layout
    // of its own to render in: app/global-not-found.tsx is the whole 404 page instead.
    globalNotFound: true,
  },
};

// Next's telemetry flush (next/dist/telemetry/detached-flush.js) loads this config too. There,
// fumadocs-mdx would start a file watcher that keeps the process alive after `next dev` stops, so
// every stop left one behind; with Devid's on-demand dev servers that is every sleep.
const flushing = process.argv.some((arg) => arg.endsWith('detached-flush.js'));

export default flushing ? config : createMDX()(config);
