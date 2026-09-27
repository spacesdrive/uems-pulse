import { useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { categoryLabels, postsInCategory } from '@/data/posts';
import { PostCard } from '@/components/PostCard';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/sections/PageHero';
import { CtaBand } from '@/sections/CtaBand';

export function loader({ params }: LoaderFunctionArgs) {
  const slug = params.category ?? '';
  const items = postsInCategory(slug);
  if (!items.length) throw new Response('Not Found', { status: 404 });
  return { slug, title: categoryLabels[slug] ?? slug, items };
}

export function Component() {
  const { title, items } = useLoaderData<typeof loader>();
  return (
    <>
      <Seo title={title} description={`${title} from UEMS Ventures.`} />
      <PageHero
        badge="Category"
        title={title}
        intro={`${items.length} ${items.length === 1 ? 'article' : 'articles'}`}
        actions={[
          { label: 'News & Events', href: '/news-and-events', variant: 'white' },
          { label: 'Blogs', href: '/blogs', variant: 'ghost', icon: 'book' },
        ]}
      />
      <section className="section">
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
