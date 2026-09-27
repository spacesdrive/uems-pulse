import type { CSSProperties } from 'react';
import { Check } from 'lucide-react';
import type { Action } from '@/data/types';
import { Button } from '@/components/Button';
import { Img } from '@/components/Img';
import { cn } from '@/lib/cn';

interface Plan {
  title: string;
  price: string;
  image?: string;
  features?: string[];
}

/** Pricing-card layout from the reference; the middle card gets the highlighted ring. */
export function PricingGrid({ items, action }: { items: Plan[]; action: Action }) {
  const featured = Math.floor(items.length / 2);
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items.map((plan, i) => (
        <li
          key={plan.title}
          data-reveal
          style={{ '--reveal-delay': `${i * 70}ms` } as CSSProperties}
          className={cn(
            'flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1',
            i === featured ? 'border-primary ring-4 ring-primary' : 'border-line',
          )}
        >
          {plan.image && <Img src={plan.image} alt="" sizes="(min-width: 1280px) 20vw, 50vw" className="aspect-[16/10] w-full object-cover" />}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-semibold">{plan.title}</h3>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              {plan.price}
              <span className="ml-1 text-sm font-normal text-muted">/ test</span>
            </p>
            {plan.features && (
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check aria-hidden className="size-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-5">
              <Button {...action} variant={i === featured ? 'primary' : 'outline'} className="w-full" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
