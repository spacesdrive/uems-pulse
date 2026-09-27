import { redirect, useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { loadContentPage } from '@/data/pages';
import { getPost, loadPostBody } from '@/data/posts';
import { redirects } from '@/data/site';
import { ContentPage } from './ContentPage';
import { PostPage } from './PostPage';
import { LegalPage, loadLongformPage } from './LegalPage';

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = (params.slug ?? '').toLowerCase();
  if (redirects[slug]) throw redirect(redirects[slug]);

  const page = await loadContentPage(slug);
  if (page) return { type: 'content' as const, page };

  const legal = await loadLongformPage(slug);
  if (legal) return { type: 'legal' as const, page: legal };

  const meta = getPost(slug);
  if (meta) {
    const blocks = (await loadPostBody(slug)) ?? [];
    return { type: 'post' as const, meta, blocks };
  }

  throw new Response('Not Found', { status: 404 });
}

/** Resolves top-level slugs to a content page, a legal page or a blog/news post (matching the original URL scheme). */
export function Component() {
  const data = useLoaderData<typeof loader>();
  if (data.type === 'content') return <ContentPage page={data.page} />;
  if (data.type === 'legal') return <LegalPage page={data.page} />;
  return <PostPage meta={data.meta} blocks={data.blocks} />;
}
