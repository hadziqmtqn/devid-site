import { docsMarkdown, docsMarkdownParams } from '@/lib/docs-routes';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/docs/[[...slug]]'>) {
  const { slug } = await params;
  return docsMarkdown('en', slug);
}

export function generateStaticParams() {
  return docsMarkdownParams('en');
}
