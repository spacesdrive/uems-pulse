import { describe, expect, it } from 'vitest';
import { imageKey, imageSrc, imageSrcSet } from '@/lib/image';

const WP = 'https://uemsventures.com/wp-content/uploads/2020/10/Study-In-Australia.JPG';

describe('imageKey', () => {
  it('derives a lowercase slug from a WordPress upload path', () => {
    expect(imageKey(WP)).toBe('2020-10-study-in-australia');
  });

  it('keys Unsplash photos by their photo id', () => {
    expect(imageKey('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600')).toBe(
      'unsplash-1523050854058-8df90110c9f1',
    );
  });

  it('maps LinkedIn media to the shared logo asset', () => {
    expect(imageKey('https://media.licdn.com/dms/image/abc')).toBe('linkedin-logo');
  });
});

describe('imageSrc / imageSrcSet', () => {
  it('rewrites remote URLs to local optimised WebP files', () => {
    expect(imageSrc(WP)).toBe('/images/2020-10-study-in-australia-1280.webp');
    expect(imageSrc(WP, 640)).toBe('/images/2020-10-study-in-australia-640.webp');
    expect(imageSrcSet(WP)).toBe(
      '/images/2020-10-study-in-australia-640.webp 640w, /images/2020-10-study-in-australia-1280.webp 1280w',
    );
  });

  it('leaves local paths alone and adds a srcset only for -1280 assets', () => {
    expect(imageSrc('/images/brand-logo.webp')).toBe('/images/brand-logo.webp');
    expect(imageSrcSet('/images/brand-logo.webp')).toBeUndefined();
    expect(imageSrcSet('/images/hero-1280.webp')).toBe('/images/hero-640.webp 640w, /images/hero-1280.webp 1280w');
  });
});
