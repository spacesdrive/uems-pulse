import { describe, expect, it } from 'vitest';
import { blogPosts, categoryLabels, formatDate, getPost, loadPostBody, posts, postsInCategory, primaryCategory } from '@/data/posts';

describe('posts', () => {
  it('is sorted newest first', () => {
    const dates = posts.map((p) => p.date);
    expect(dates).toEqual([...dates].sort((a, b) => b.localeCompare(a)));
  });

  it('has unique slugs and a known label for every category', () => {
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length);
    for (const p of posts) for (const c of p.categories) expect(categoryLabels).toHaveProperty(c.slug);
  });

  it('looks posts up by slug', () => {
    const first = posts[0];
    expect(getPost(first.slug)).toBe(first);
    expect(getPost('does-not-exist')).toBeUndefined();
  });

  it('filters by category', () => {
    expect(blogPosts.length).toBeGreaterThan(0);
    expect(blogPosts.every((p) => p.categories.some((c) => c.slug === 'blog'))).toBe(true);
    expect(postsInCategory('no-such-category')).toEqual([]);
  });

  it('prefers a specific category over the umbrella news-events one', () => {
    const categories = [
      { slug: 'news-events', name: 'News & Events' },
      { slug: 'seminars', name: 'Seminars' },
    ];
    expect(primaryCategory({ ...posts[0], categories }).slug).toBe('seminars');
  });

  it('formats dates for an Indian audience', () => {
    expect(formatDate('2026-01-15T10:00:00')).toBe('15 January 2026');
    expect(formatDate('')).toBe('');
  });

  it('loads a body for every indexed post', async () => {
    for (const p of posts) {
      const blocks = await loadPostBody(p.slug);
      expect(blocks, p.slug).not.toBeNull();
      expect(blocks!.length, p.slug).toBeGreaterThan(0);
    }
    expect(await loadPostBody('does-not-exist')).toBeNull();
  });
});
