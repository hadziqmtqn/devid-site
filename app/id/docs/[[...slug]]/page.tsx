import { DocsPageView, docsMetadata, docsStaticParams } from '@/components/docs-page';

export default async function Page(props: PageProps<'/id/docs/[[...slug]]'>) {
  const { slug } = await props.params;
  return <DocsPageView lang="id" slug={slug} />;
}

export function generateStaticParams() {
  return docsStaticParams('id');
}

export async function generateMetadata(props: PageProps<'/id/docs/[[...slug]]'>) {
  const { slug } = await props.params;
  return docsMetadata('id', slug);
}
