import { ArrowLeft, CalendarDays } from 'lucide-react';
import { formatDate, posts, type ContentBlock, type PostMeta } from '@/data/posts';
import { Img } from '@/components/Img';
import { PostCard } from '@/components/PostCard';
import { RichBlocks } from '@/components/RichBlocks';
import { Seo } from '@/components/Seo';
import { SmartLink } from '@/components/SmartLink';
import { CtaBand } from '@/sections/CtaBand';
import { SectionShell } from '@/sections/SectionShell';

export function PostPage({ meta, blocks }: { meta: PostMeta; blocks: ContentBlock[] }) {
  const isBlog = meta.categories.some((c) => c.slug === 'blog');
  const back = isBlog ? { href: '/blogs', label: 'All blogs' } : { href: '/news-and-events', label: 'News & Events' };
  const related = posts
    .filter((p) => p.slug !== meta.slug && p.categories.some((c) => meta.categories.some((m) => m.slug === c.slug)))
    .slice(0, 3);

  return (
    <>
      <Seo title={meta.title} description={meta.excerpt || undefined} />
      <section className="hero-gradient relative overflow-hidden px-4 pt-32 text-white sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl pb-10 text-center">
          <SmartLink href={back.href} className="pill-light mb-6 transition-colors hover:bg-white/25">
            <ArrowLeft aria-hidden className="size-4" /> {back.label}
          </SmartLink>
          <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">{meta.title}</h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
            {meta.categories.map((c) => (
              <SmartLink key={c.slug} href={`/category/${c.slug}`} className="pill-light hover:bg-white/25">
                {c.name}
              </SmartLink>
            ))}
            {meta.date && (
              <time dateTime={meta.date} className="inline-flex items-center gap-1.5 text-white">
                <CalendarDays aria-hidden className="size-4" /> {formatDate(meta.date)}
              </time>
            )}
          </div>
        </div>
        {meta.cover && (
          <div className="relative mx-auto max-w-4xl">
            <div aria-hidden className="absolute inset-x-[-50vw] -bottom-px h-[40%] bg-white" />
            <div className="relative rounded-[28px] bg-white/70 p-2 shadow-[0_30px_80px_-30px_rgba(6,42,71,0.45)] ring-1 ring-white/60 backdrop-blur sm:p-3">
              <Img src={meta.cover} alt={meta.title} priority sizes="(min-width: 1024px) 900px, 100vw" className="max-h-[520px] w-full rounded-[20px] object-cover" />
            </div>
          </div>
        )}
      </section>

      <article className="section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <RichBlocks blocks={blocks} />
        </div>
      </article>

      {related.length > 0 && (
        <SectionShell tone="surface" badge="Keep reading" badgeIcon="book" title={isBlog ? 'More Study Abroad & Migration Insights' : 'More News & Events'} width="wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </SectionShell>
      )}
      <CtaBand />
    </>
  );
}
