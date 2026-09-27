import type { CSSProperties } from 'react';
import type { FeatureItem } from '@/data/types';
import { icons } from '@/lib/icons';

/** Numbered process timeline: vertical on phones, connected row on desktop. */
export function Steps({ items }: { items: FeatureItem[] }) {
  const layout =
    items.length > 4 ? 'md:grid-cols-2 lg:grid-cols-4' : items.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  return (
    <ol className={`relative grid gap-4 ${layout}`}>
      {items.map((item, i) => {
        const Icon = item.icon ? icons[item.icon] : null;
        return (
          <li
            key={item.title}
            data-reveal
            style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}
            className="group card card-hover relative flex gap-4 p-5 md:flex-col md:p-6"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgba(26,90,240,0.7)]">
              {Icon ? <Icon aria-hidden className="size-5" /> : i + 1}
            </span>
            <div>
              <p className="text-xs font-medium tracking-wide text-primary uppercase">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              {item.text && <p className="mt-2 leading-7 text-muted">{item.text}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
