import type { CSSProperties } from 'react';
import { ArrowRight, CircleCheck } from 'lucide-react';
import type { FeatureItem } from '@/data/types';
import { SmartLink } from '@/components/SmartLink';
import { icons } from '@/lib/icons';
import { cn } from '@/lib/cn';

const cols = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/** Card grid with the reference's blue icon circles; numbered variant for sequences. */
export function FeatureGrid({
  items,
  columns = 3,
  style = 'icon',
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  style?: 'icon' | 'numbered';
}) {
  return (
    <ul className={cn('grid gap-5', cols[columns])}>
      {items.map((item, i) => {
        const Icon = icons[item.icon ?? 'check'];
        const inner = (
          <>
            {style === 'numbered' ? (
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-lg font-semibold text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
            ) : (
              <span className="icon-circle transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon aria-hidden className="size-5" />
              </span>
            )}
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            {item.text && <p className="mt-2 leading-7 text-muted">{item.text}</p>}
            {item.list && (
              <ul className="mt-4 space-y-2">
                {item.list.map((l) => (
                  <li key={l} className="flex gap-2 text-[15px]">
                    <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                    {l}
                  </li>
                ))}
              </ul>
            )}
            {item.href && (
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more <ArrowRight aria-hidden className="btn-arrow size-4 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </>
        );
        return (
          <li key={item.title} data-reveal style={{ '--reveal-delay': `${(i % 4) * 70}ms` } as CSSProperties}>
            {item.href ? (
              <SmartLink href={item.href} className="group card card-hover flex h-full flex-col p-6 md:p-7">
                {inner}
              </SmartLink>
            ) : (
              <div className="group card card-hover flex h-full flex-col p-6 md:p-7">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
