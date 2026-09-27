import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={cn('inline-flex gap-0.5 text-gold', className)} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden className={cn('size-4', i < count ? 'fill-current' : 'opacity-30')} />
      ))}
    </span>
  );
}
