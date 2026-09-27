import { CircleCheck } from 'lucide-react';
import type { Action, ImageRef } from '@/data/types';
import type { IconName } from '@/lib/icons';
import { ButtonRow } from '@/components/Button';
import { Img } from '@/components/Img';
import { icons } from '@/lib/icons';
import { cn } from '@/lib/cn';

interface Props {
  id?: string;
  badge?: string;
  badgeIcon?: IconName;
  title?: string;
  intro?: string;
  body?: string[];
  list?: string[];
  listTitle?: string;
  image: ImageRef;
  reverse?: boolean;
  actions?: Action[];
  tone?: 'white' | 'surface';
}

/** Editorial two-column block: framed image beside heading, copy, checklist and actions. */
export function SplitSection({ id, badge, badgeIcon = 'sparkles', title, intro, body, list, listTitle, image, reverse, actions, tone }: Props) {
  const BadgeIcon = icons[badgeIcon];
  return (
    <section id={id} className={cn('section', tone === 'surface' && 'bg-surface')}>
      <div className="container-x grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div data-reveal="scale" className={cn('group panel', reverse && 'md:order-2')}>
          <div className="overflow-hidden rounded-3xl">
            <Img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
        <div>
          {badge && (
            <span data-reveal className="pill mb-4">
              <BadgeIcon aria-hidden className="size-4 text-primary" />
              {badge}
            </span>
          )}
          {title && (
            <h2 data-reveal className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
          )}
          {intro && (
            <p data-reveal className="mt-4 text-lg leading-8 text-muted">
              {intro}
            </p>
          )}
          {body?.map((p, i) => (
            <p key={i} data-reveal className="mt-4 leading-7 text-muted">
              {p}
            </p>
          ))}
          {listTitle && (
            <h3 data-reveal className="mt-6 font-semibold">
              {listTitle}
            </h3>
          )}
          {list && (
            <ul className="mt-5 space-y-3">
              {list.map((item, i) => (
                <li key={item} data-reveal style={{ '--reveal-delay': `${i * 50}ms` } as React.CSSProperties} className="flex gap-3">
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div data-reveal>
            <ButtonRow actions={actions} className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
