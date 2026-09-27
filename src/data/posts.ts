import index from './generated/posts-index.json';

export type ContentBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'paragraph'; html: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; rows: string[][] }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string };

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  cover: string;
  excerpt: string;
  categories: { slug: string; name: string }[];
}

export const categoryLabels: Record<string, string> = {
  blog: 'Blog',
  'news-flash': 'News Flash',
  events: 'Events',
  'news-events': 'News & Events',
  seminars: 'Seminars',
  'trending-courses': 'Trending Courses',
};

export const posts: PostMeta[] = (index as PostMeta[]).slice().sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postsInCategory = (category: string) =>
  posts.filter((p) => p.categories.some((c) => c.slug === category));

export const blogPosts = postsInCategory('blog');

/** Each post body is its own chunk, fetched only when that post is opened. */
const bodies = import.meta.glob<{ blocks: ContentBlock[] }>('./generated/posts/*.json', { import: 'default' });

export async function loadPostBody(slug: string): Promise<ContentBlock[] | null> {
  const load = bodies[`./generated/posts/${slug}.json`];
  return load ? (await load()).blocks : null;
}

export function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export const primaryCategory = (p: PostMeta) =>
  p.categories.find((c) => c.slug !== 'news-events') ?? p.categories[0];
