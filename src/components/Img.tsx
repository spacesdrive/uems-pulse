import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';
import { imageSrc, imageSrcSet } from '@/lib/image';
import { cn } from '@/lib/cn';

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  /** Eager-load above-the-fold imagery. */
  priority?: boolean;
  sizes?: string;
}

/**
 * Responsive, lazy-loaded image served from the optimised local asset set.
 * Falls back to a branded surface if an asset is missing, so layouts never show broken images.
 */
export function Img({ src, alt, priority, sizes = '(min-width: 1024px) 50vw, 100vw', className, ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-primary-100 via-primary-50 to-gold-50 text-primary/40',
          className,
        )}
      >
        <ImageOff aria-hidden className="size-8" />
      </div>
    );
  }
  return (
    <img
      src={imageSrc(src)}
      srcSet={imageSrcSet(src)}
      sizes={imageSrcSet(src) ? sizes : undefined}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
