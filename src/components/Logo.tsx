import { cn } from '@/lib/cn';

/** UEMS globe mark with a two-tone wordmark, mirroring the reference's logo lockup. */
export function Logo({ className, tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-line">
        <img src="/images/brand-mark.webp" alt="" width={30} height={32} className="h-8 w-auto" />
      </span>
      <span className={cn('text-lg font-semibold tracking-tight', tone === 'light' ? 'text-white' : 'text-navy')}>
        UEMS <span className={tone === 'light' ? 'text-gold' : 'text-gold-700'}>Ventures</span>
      </span>
    </span>
  );
}
