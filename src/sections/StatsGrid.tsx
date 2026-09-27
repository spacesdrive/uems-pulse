import type { CSSProperties } from 'react';
import type { StatItem } from '@/data/types';
import { CountUp } from '@/components/CountUp';
import { cn } from '@/lib/cn';

/** Metric blocks with animated counters. */
export function StatsGrid({ items, tone = 'light' }: { items: StatItem[]; tone?: 'light' | 'dark' }) {
  return (
    <dl className={cn('grid gap-4', items.length >= 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3')}>
      {items.map((s, i) => (
        <div
          key={s.label}
          data-reveal
          style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}
          className={cn(
            'flex flex-col rounded-2xl p-5 md:p-7',
            tone === 'dark' ? 'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur' : 'card card-hover',
          )}
        >
          <dt className={cn('order-2 mt-2 text-sm font-medium md:text-base', tone === 'dark' ? 'text-white' : 'text-muted')}>
            {s.label}
          </dt>
          <dd className="order-1 text-3xl font-semibold tracking-tight md:text-5xl">
            <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
          </dd>
          {s.note && (
            <dd className={cn('order-3 mt-3 inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-medium', tone === 'dark' ? 'bg-white/15' : 'bg-primary-50 text-primary')}>
              {s.note}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
