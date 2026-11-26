import type { Metadata } from 'next';
import { DefaultNotFound } from 'fumadocs-ui/layouts/home/not-found';
import { RootLayout, rootMetadata } from '@/components/root-layout';
import './global.css';

// The 404 page (out/404.html), for every URL that matches no page, in English. See
// `experimental.globalNotFound` in next.config.mjs.
export const metadata: Metadata = { ...rootMetadata('en'), title: 'Page not found | Devid' };

export default function GlobalNotFound() {
  return (
    <RootLayout lang="en">
      <DefaultNotFound />
    </RootLayout>
  );
}
