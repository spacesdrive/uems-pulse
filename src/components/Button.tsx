import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Action } from '@/data/types';
import { icons } from '@/lib/icons';
import { cn } from '@/lib/cn';
import { opensNewTab } from '@/lib/links';
import { SmartLink } from './SmartLink';

const variants = {
  primary: 'btn-primary',
  white: 'btn-white',
  outline: 'btn-outline',
  ghost: 'btn-ghost-light',
} as const;

interface Props extends Action {
  size?: 'md' | 'lg';
  className?: string;
  /** Show the trailing arrow (default true for primary). */
  arrow?: boolean;
}

export function Button({ label, href, variant = 'primary', icon, size = 'md', className, arrow }: Props) {
  const Icon = icon ? icons[icon] : null;
  const showArrow = arrow ?? (variant === 'primary' && !Icon);
  const Arrow = opensNewTab(href) ? ArrowUpRight : ArrowRight;
  return (
    <SmartLink href={href} className={cn('btn', variants[variant], size === 'lg' && 'btn-lg', className)}>
      {Icon && <Icon aria-hidden className="size-4" />}
      {label}
      {showArrow && <Arrow aria-hidden className="btn-arrow size-4" />}
    </SmartLink>
  );
}

export function ButtonRow({ actions, className }: { actions?: Action[]; className?: string }) {
  if (!actions?.length) return null;
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {actions.map((a) => (
        <Button key={a.label + a.href} {...a} size="lg" />
      ))}
    </div>
  );
}
