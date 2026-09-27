/**
 * Maps a canonical remote image URL (as stored in content data) to the optimised local
 * WebP variants produced by scripts/fetch-assets.mjs. Keep imageKey() in sync with the script.
 */
export const IMAGE_WIDTHS = [640, 1280] as const;

export function imageKey(url: string): string {
  if (url.includes('images.unsplash.com')) {
    const id = url.match(/photo-([\w-]+)/)?.[1] ?? 'photo';
    return `unsplash-${id}`;
  }
  if (url.includes('media.licdn.com')) return 'linkedin-logo';
  const rel = url.split('/uploads/')[1] ?? url;
  return rel
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

const isRemote = (src: string) => /^https?:\/\//.test(src);

export function imageSrc(src: string, width: (typeof IMAGE_WIDTHS)[number] = 1280): string {
  if (!isRemote(src)) return src;
  return `/images/${imageKey(src)}-${width}.webp`;
}

export function imageSrcSet(src: string): string | undefined {
  // Local assets shipped as "<name>-1280.webp" also have a 640w sibling.
  if (!isRemote(src)) {
    return src.endsWith('-1280.webp') ? `${src.replace('-1280.webp', '-640.webp')} 640w, ${src} 1280w` : undefined;
  }
  return IMAGE_WIDTHS.map((w) => `/images/${imageKey(src)}-${w}.webp ${w}w`).join(', ');
}
