import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/id/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree('id')} {...baseOptions('id')}>
      {children}
    </DocsLayout>
  );
}
