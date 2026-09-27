import { ArrowRight } from 'lucide-react';
import { postsInCategory } from '@/data/posts';
import { PostCard } from '@/components/PostCard';
import { Seo } from '@/components/Seo';
import { SmartLink } from '@/components/SmartLink';
import { PageHero } from '@/sections/PageHero';
import { SectionShell } from '@/sections/SectionShell';
import { CtaBand } from '@/sections/CtaBand';

const groups = [
  { slug: 'news-flash', title: 'News Flash', intro: 'Latest updates on institutions, visas and admissions.', badgeIcon: 'sparkles' as const },
  { slug: 'events', title: 'Events', intro: 'Seminars, webinars and school fests conducted by UEMS Ventures.', badgeIcon: 'calendar' as const },
  { slug: 'trending-courses', title: 'Trending Courses / University / Institute / Country', intro: 'Programs and pathways worth knowing about.', badgeIcon: 'trend' as const },
];

export function Component() {
  return (
    <>
      <Seo title="News & Events" description="News flash, events, seminars and trending courses from UEMS Ventures." />
      <PageHero
        badge="News & Events"
        title="News & Events"
        intro="Seminars, webinars, visa news and trending courses — see what UEMS Ventures has been up to."
        actions={[{ label: 'Read our Blogs', href: '/blogs', variant: 'white' }]}
      />
      {groups.map((g, gi) => {
        const items = postsInCategory(g.slug);
        return (
          <SectionShell key={g.slug} badge={g.title.split(' /')[0]} badgeIcon={g.badgeIcon} title={g.title} intro={g.intro} tone={gi % 2 ? 'surface' : 'white'} width="wide">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.slice(0, 6).map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <SmartLink href={`/category/${g.slug}`} className="btn btn-outline">
                Read More <ArrowRight aria-hidden className="btn-arrow size-4" />
              </SmartLink>
            </div>
          </SectionShell>
        );
      })}
      <CtaBand />
    </>
  );
}
