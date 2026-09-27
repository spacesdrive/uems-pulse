import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/** Infinite horizontal loop with faded edges; the duplicate copy is hidden from assistive tech. */
export function Marquee({ children, duration = 40, reverse, className }: Props) {
  const style = {
    '--marquee-duration': `${duration}s`,
    animationDirection: reverse ? 'reverse' : undefined,
  } as CSSProperties;
  return (
    <div className={cn('fade-edges flex overflow-hidden', className)}>
      <div className="pause-on-hover flex w-max animate-marquee gap-4 pr-4" style={style}>
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4" aria-hidden inert>
          {children}
        </div>
      </div>
    </div>
  );
}
