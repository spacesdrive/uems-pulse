import { useState, type CSSProperties } from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/types';
import { Img } from '@/components/Img';
import { Stars } from '@/components/Stars';

const LIMIT = 260;

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const long = t.quote.length > LIMIT;
  const text = long && !expanded ? `${t.quote.slice(0, LIMIT).replace(/\s+\S*$/, '')}…` : t.quote;
  return (
    <figure
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as CSSProperties}
      className="card card-hover mb-5 break-inside-avoid p-6"
    >
      <div className="flex items-center gap-4">
        <div className="size-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary">
          {t.image ? (
            <Img src={t.image} alt="" sizes="48px" className="size-full object-cover" />
          ) : (
            <span aria-hidden className="flex size-full items-center justify-center text-lg font-semibold text-white">
              {t.name[0]}
            </span>
          )}
        </div>
        <figcaption>
          <p className="font-semibold">{t.name}</p>
          {t.meta && <p className="text-sm text-muted">{t.meta}</p>}
        </figcaption>
        <Quote aria-hidden className="ml-auto size-6 shrink-0 text-primary/20" />
      </div>
      <blockquote className="mt-4 leading-7 text-ink/80">{text}</blockquote>
      <div className="mt-4 flex items-center justify-between">
        <Stars />
        {long && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="cursor-pointer text-sm font-medium text-primary hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </figure>
  );
}

/** Masonry testimonial wall; long lists start collapsed to `initial` cards. */
export function Testimonials({ items, initial = 6 }: { items: Testimonial[]; initial?: number }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, initial);
  return (
    <>
      <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
        {visible.map((t, i) => (
          <TestimonialCard key={t.name + i} t={t} index={i} />
        ))}
      </div>
      {items.length > initial && (
        <div className="mt-6 text-center">
          <button type="button" onClick={() => setShowAll((s) => !s)} aria-expanded={showAll} className="btn btn-outline">
            {showAll ? 'Show fewer stories' : `Show all ${items.length} stories`}
          </button>
        </div>
      )}
    </>
  );
}
