import { RootLayout, rootMetadata } from '@/components/root-layout';
import '../global.css';

// The landing page, the roadmap and the English guide. The Indonesian guide has its own root
// layout in app/id.
export const metadata = rootMetadata('en');

export default function Layout({ children }: LayoutProps<'/'>) {
  return <RootLayout lang="en">{children}</RootLayout>;
}
