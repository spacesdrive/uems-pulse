import type { ReactNode } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import type { IconName } from '@/lib/icons';
import { cn } from '@/lib/cn';

interface Props {
  id?: string;
  badge?: string;
  badgeIcon?: IconName;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: 'white' | 'surface';
  align?: 'center' | 'left';
  width?: 'default' | 'narrow' | 'wide';
  className?: string;
  children: ReactNode;
}

const widths = { narrow: 'max-w-3xl', default: 'max-w-6xl', wide: 'max-w-7xl' };

/** Standard section wrapper: vertical rhythm, optional tint, and heading block. */
export function SectionShell({ id, badge, badgeIcon, title, intro, tone = 'white', align, width = 'default', className, children }: Props) {
  return (
    <section id={id} className={cn('section', tone === 'surface' && 'bg-surface', className)}>
      <div className={cn('mx-auto w-full px-4 sm:px-6', widths[width])}>
        <SectionHeading badge={badge} badgeIcon={badgeIcon} title={title} intro={intro} align={align} />
        {children}
      </div>
    </section>
  );
}
