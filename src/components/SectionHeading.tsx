import type { ReactNode } from 'react';
import { icons, type IconName } from '@/lib/icons';
import { cn } from '@/lib/cn';

interface Props {
  badge?: string;
  badgeIcon?: IconName;
  title?: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
  as?: 'h1' | 'h2';
}

/** Pill badge + large heading + supporting copy, the reference's standard section opener. */
export function SectionHeading({ badge, badgeIcon = 'sparkles', title, intro, align = 'center', className, as: H = 'h2' }: Props) {
  if (!badge && !title && !intro) return null;
  const Icon = icons[badgeIcon];
  return (
    <div
      data-reveal
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      {badge && (
        <div className={cn('mb-4 flex', align === 'center' && 'justify-center')}>
          <span className="pill">
            <Icon aria-hidden className="size-4 text-primary" />
            {badge}
          </span>
        </div>
      )}
      {title && <H className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">{title}</H>}
      {intro && <p className="mt-4 text-base leading-7 text-muted md:text-lg">{intro}</p>}
    </div>
  );
}
