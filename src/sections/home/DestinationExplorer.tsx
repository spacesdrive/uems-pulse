import { useRef, useState, type KeyboardEvent } from 'react';
import { CircleCheck, GraduationCap, Wallet } from 'lucide-react';
import { destinations } from '@/data/home';
import { Button } from '@/components/Button';
import { Img } from '@/components/Img';
import { SectionShell } from '../SectionShell';
import { cn } from '@/lib/cn';

/** Tabbed destination switcher modelled on the reference's circular-icon solution tabs. */
export function DestinationExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const d = destinations[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = destinations.length - 1;
    const next = e.key === 'ArrowRight' ? (active === last ? 0 : active + 1) : e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1) : e.key === 'Home' ? 0 : e.key === 'End' ? last : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <SectionShell
      id="destinations"
      badge="Study Destinations"
      badgeIcon="compass"
      title="Explore Your Global Education Opportunities"
      intro="Choose from the world's most sought-after study destinations with expert guidance, visa assistance, and university admissions support."
      width="wide"
    >
      <div data-reveal className="no-scrollbar -mx-4 overflow-x-auto px-4 pb-2">
        <div role="tablist" aria-label="Study destinations" className="mx-auto flex w-max gap-3 sm:gap-5">
          {destinations.map((dest, i) => {
            const selected = i === active;
            return (
              <button
                key={dest.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`dest-tab-${dest.id}`}
                aria-selected={selected}
                aria-controls="dest-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className="group flex w-20 cursor-pointer flex-col items-center gap-2.5 sm:w-24"
              >
                <span
                  className={cn(
                    'flex size-14 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 sm:size-16',
                    selected
                      ? 'scale-105 bg-primary text-white shadow-[0_12px_28px_-10px_rgba(26,90,240,0.8)]'
                      : 'border border-line bg-white text-ink shadow-sm group-hover:border-primary/40 group-hover:text-primary',
                  )}
                >
                  {dest.code}
                </span>
                <span className={cn('text-center text-xs leading-tight sm:text-sm', selected ? 'font-medium text-primary' : 'text-muted')}>{dest.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-muted" aria-live="polite">
        {d.desc}
      </p>

      <div data-reveal="scale" className="panel mt-6">
        <div
          id="dest-panel"
          role="tabpanel"
          aria-labelledby={`dest-tab-${d.id}`}
          key={d.id}
          className="grid animate-page-in gap-4 rounded-3xl bg-white p-3 shadow-sm md:grid-cols-[1.15fr_1fr] md:p-4"
        >
          <div className="relative overflow-hidden rounded-2xl bg-primary-50">
            <Img src={d.img} alt={`Study in ${d.name}`} sizes="(min-width: 768px) 600px, 100vw" className="aspect-[16/11] size-full object-cover md:aspect-auto md:min-h-[380px]" />
            <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-navy backdrop-blur">
              {d.code} · {d.name}
            </span>
          </div>
          <div className="flex flex-col p-3 md:p-5">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{d.name}</h3>
            <ul className="mt-5 space-y-3">
              {d.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface p-4">
                <dt className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase">
                  <GraduationCap aria-hidden className="size-4 text-primary" /> Popular Courses
                </dt>
                <dd className="mt-1.5 font-medium">{d.courses}</dd>
              </div>
              <div className="rounded-2xl bg-surface p-4">
                <dt className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase">
                  <Wallet aria-hidden className="size-4 text-primary" /> Tuition Range
                </dt>
                <dd className="mt-1.5 font-medium">{d.tuition}</dd>
              </div>
            </dl>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
              <Button label={d.ctaText} href={d.link} size="lg" />
              <span className="text-sm text-muted">More destinations available through consultation</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
