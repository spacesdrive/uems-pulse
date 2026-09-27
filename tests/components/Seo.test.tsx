import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Seo } from '@/components/Seo';
import { site } from '@/data/site';

describe('Seo', () => {
  it('suffixes the brand and falls back to the site description', () => {
    render(<Seo title="Study in USA" />);
    expect(document.title).toBe(`Study in USA | ${site.name}`);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute('content', site.seoDescription);
    expect(document.head.querySelector('meta[property="og:title"]')).toHaveAttribute('content', `Study in USA | ${site.name}`);
  });

  it('does not double-brand titles that already mention UEMS', () => {
    render(<Seo title="About UEMS Ventures" description="Who we are" />);
    expect(document.title).toBe('About UEMS Ventures');
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Who we are');
  });
});
