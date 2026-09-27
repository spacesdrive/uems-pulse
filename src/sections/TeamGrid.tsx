import type { CSSProperties } from 'react';
import { Mail, Phone } from 'lucide-react';
import type { Person } from '@/data/types';
import { Img } from '@/components/Img';
import { telHref } from '@/lib/links';
import { cn } from '@/lib/cn';

const initials = (name: string) =>
  name
    .replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

export function TeamGrid({ people, variant = 'portrait' }: { people: Person[]; variant?: 'portrait' | 'compact' }) {
  return (
    <ul className={cn('grid gap-5', variant === 'portrait' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' : 'sm:grid-cols-2 lg:grid-cols-3')}>
      {people.map((p, i) => (
        <li
          key={p.name}
          data-reveal
          style={{ '--reveal-delay': `${(i % 6) * 60}ms` } as CSSProperties}
          className={cn('group card card-hover text-center', variant === 'portrait' ? 'p-4' : 'flex items-center gap-4 p-5 text-left')}
        >
          <div
            className={cn(
              'shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-gold-50 ring-4 ring-primary-50',
              variant === 'portrait' ? 'mx-auto aspect-square w-full max-w-36' : 'size-20',
            )}
          >
            {p.image ? (
              <Img src={p.image} alt={p.name} sizes="160px" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <span aria-hidden className="flex size-full items-center justify-center text-2xl font-semibold text-primary">
                {initials(p.name)}
              </span>
            )}
          </div>
          <div className={variant === 'portrait' ? 'mt-4' : ''}>
            <h3 className="font-semibold">{p.name}</h3>
            {p.role && <p className="mt-0.5 text-sm text-muted">{p.role}</p>}
            {(p.phone || p.email) && (
              <div className="mt-2 flex flex-col gap-1 text-sm">
                {p.phone && (
                  <a href={telHref(p.phone)} className="inline-flex items-center gap-1.5 text-primary hover:underline">
                    <Phone aria-hidden className="size-3.5" /> {p.phone}
                  </a>
                )}
                {p.email && (
                  <a href={`mailto:${p.email}`} className="inline-flex items-center gap-1.5 break-all text-primary hover:underline">
                    <Mail aria-hidden className="size-3.5 shrink-0" /> {p.email}
                  </a>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
