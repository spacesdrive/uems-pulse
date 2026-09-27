import type { ContentPageData } from '../types';

/** Every content page is its own chunk; only the visited page's data is downloaded. */
const modules = import.meta.glob<ContentPageData>(['./*.ts', '!./index.ts', '!./_shared.ts'], { import: 'default' });

export const contentPageSlugs = Object.keys(modules).map((p) => p.slice(2, -3));

export async function loadContentPage(slug: string): Promise<ContentPageData | null> {
  const load = modules[`./${slug}.ts`];
  return load ? load() : null;
}
