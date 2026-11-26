import { docsLlms } from '@/lib/source';

export const revalidate = false;

// The English guide only: the Indonesian pages say the same.
export async function GET() {
  return new Response(await docsLlms.index('en'));
}
