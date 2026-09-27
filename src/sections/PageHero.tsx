import type { PageHero as PageHeroData } from '@/data/types';
import { ButtonRow } from '@/components/Button';
import { Img } from '@/components/Img';
import { cn } from '@/lib/cn';

function Title({ title, highlight }: { title: string; highlight?: string }) {
  if (!highlight || !title.includes(highlight)) return <>{title}</>;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="relative whitespace-nowrap">
        <span className="relative z-10">{highlight}</span>
        <span aria-hidden className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.22em] rounded-full bg-gold/70" />
      </span>
      {after}
    </>
  );
}

/** Gradient page hero; an optional framed image straddles the hero's bottom edge. */
export function PageHero({ badge, title, highlight, intro, actions, image, chips }: PageHeroData) {
  const paragraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];
  return (
    <section className="relative">
      <div className="hero-gradient relative overflow-hidden px-4 pt-32 text-white sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className={cn('relative mx-auto max-w-4xl text-center', image ? 'pb-10 md:pb-14' : 'pb-20 md:pb-24')}>
          {badge && (
            <div data-reveal className="mb-5 flex justify-center">
              <span className="pill-light">
                <span className="size-1.5 rounded-full bg-gold" />
                {badge}
              </span>
            </div>
          )}
          <h1
            data-reveal
            style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
            className="text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            <Title title={title} highlight={highlight} />
          </h1>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              style={{ '--reveal-delay': `${120 + i * 40}ms` } as React.CSSProperties}
              className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white md:text-lg md:leading-8"
            >
              {p}
            </p>
          ))}
          {chips && (
            <ul data-reveal className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((c) => (
                <li key={c} className="pill-light text-[13px]">
                  {c}
                </li>
              ))}
            </ul>
          )}
          <div data-reveal style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
            <ButtonRow actions={actions} className="mt-8 justify-center" />
          </div>
        </div>
        {image && (
          <div className="relative mx-auto max-w-5xl">
            <div aria-hidden className="absolute inset-x-[-50vw] -bottom-px h-[38%] bg-white" />
            <div data-reveal="scale" className="relative rounded-[28px] bg-white/70 p-2 shadow-[0_30px_80px_-30px_rgba(6,42,71,0.45)] ring-1 ring-white/60 backdrop-blur sm:p-3">
              <Img
                src={image.src}
                alt={image.alt}
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="aspect-[4/3] w-full rounded-[20px] object-cover sm:aspect-[16/8]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
