import { docsImage, docsImageParams } from '@/lib/docs-routes';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/id/og/docs/[...slug]'>) {
  const { slug } = await params;
  return docsImage('id', slug);
}

export function generateStaticParams() {
  return docsImageParams('id');
}
