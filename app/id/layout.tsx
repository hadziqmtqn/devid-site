import { RootLayout, rootMetadata } from '@/components/root-layout';
import '../global.css';

// The Indonesian guide (/id/docs).
export const metadata = rootMetadata('id');

export default function Layout({ children }: LayoutProps<'/id'>) {
  return <RootLayout lang="id">{children}</RootLayout>;
}
