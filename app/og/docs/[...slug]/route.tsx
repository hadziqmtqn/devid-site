import { docsImage, docsImageParams } from '@/lib/docs-routes';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  return docsImage('en', slug);
}

export function generateStaticParams() {
  return docsImageParams('en');
}
