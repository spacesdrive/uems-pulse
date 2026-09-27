import { blogPosts } from '@/data/posts';
import { PostCard } from '@/components/PostCard';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/sections/PageHero';
import { CtaBand } from '@/sections/CtaBand';

export function Component() {
  return (
    <>
      <Seo
        title="Blogs – Study Abroad & Migration Insights"
        description="Navigate your journey overseas with the latest visa updates, university guides, and immigration tips from UEMS Ventures."
      />
      <PageHero
        badge="Blogs"
        title="Study Abroad & Migration Insights"
        highlight="Insights"
        intro="Navigate your journey overseas with the latest visa updates, university guides, and immigration tips."
        actions={[
          { label: 'News & Events', href: '/news-and-events', variant: 'white' },
          { label: 'Book Free Counselling', href: '/contact-us', variant: 'ghost', icon: 'calendarCheck' },
        ]}
      />
      <section className="section">
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
