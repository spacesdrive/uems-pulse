import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { CardItem } from '@/data/types';
import { Img } from '@/components/Img';
import { SmartLink } from '@/components/SmartLink';
import { cn } from '@/lib/cn';

/** Image-led cards with a caption overlay (courses, destinations, services). */
export function CardGrid({ items, aspect = 'portrait' }: { items: CardItem[]; aspect?: 'portrait' | 'landscape' }) {
  return (
    <ul className={cn('grid gap-5 sm:grid-cols-2', aspect === 'portrait' ? 'lg:grid-cols-4' : 'lg:grid-cols-3')}>
      {items.map((item, i) => {
        const body = (
          <>
            <Img
              src={item.image}
              alt=""
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className={cn(
                'w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
                aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-[16/11]',
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              {item.meta && <p className="mb-1 text-xs font-medium tracking-wide text-gold uppercase">{item.meta}</p>}
              <h3 className="flex items-end justify-between gap-3 text-lg leading-snug font-semibold">
                {item.title}
                {item.href && (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-white group-hover:text-primary">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                )}
              </h3>
              {item.text && <p className="mt-1.5 text-sm leading-6 text-white">{item.text}</p>}
            </div>
          </>
        );
        const cls = 'group relative block overflow-hidden rounded-2xl border border-line bg-primary-50 shadow-sm';
        return (
          <li key={item.title} data-reveal style={{ '--reveal-delay': `${(i % 4) * 70}ms` } as CSSProperties}>
            {item.href ? (
              <SmartLink href={item.href} className={cls} aria-label={item.title}>
                {body}
              </SmartLink>
            ) : (
              <div className={cls}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
