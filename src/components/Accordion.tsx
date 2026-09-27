import { useId, useState, type CSSProperties } from 'react';
import { Plus } from 'lucide-react';
import type { FaqItem } from '@/data/types';
import { cn } from '@/lib/cn';

/** FAQ accordion with the reference's blue circular toggle. One item open at a time. */
export function Accordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div
            key={item.q}
            data-reveal
            style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}
            className={cn('card overflow-hidden transition-colors', isOpen && 'border-primary/25')}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium md:px-6"
              >
                {item.q}
                <span
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                >
                  <Plus aria-hidden className="size-5" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="px-5 pb-5 leading-7 text-muted md:px-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
