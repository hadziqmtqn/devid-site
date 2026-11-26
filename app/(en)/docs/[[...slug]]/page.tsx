import { DocsPageView, docsMetadata, docsStaticParams } from '@/components/docs-page';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const { slug } = await props.params;
  return <DocsPageView lang="en" slug={slug} />;
}

export function generateStaticParams() {
  return docsStaticParams('en');
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>) {
  const { slug } = await props.params;
  return docsMetadata('en', slug);
}
