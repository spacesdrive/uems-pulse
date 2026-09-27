import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Img } from '@/components/Img';

const SRC = 'https://uemsventures.com/wp-content/uploads/2020/10/study-in-australia.jpg';

describe('Img', () => {
  it('serves the local responsive WebP set and lazy-loads by default', () => {
    render(<Img src={SRC} alt="Sydney campus" />);
    const img = screen.getByRole('img', { name: 'Sydney campus' });
    expect(img).toHaveAttribute('src', '/images/2020-10-study-in-australia-1280.webp');
    expect(img.getAttribute('srcset')).toContain('640w');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('loads eagerly with high priority for above-the-fold images', () => {
    render(<Img src={SRC} alt="Hero" priority />);
    const img = screen.getByRole('img', { name: 'Hero' });
    expect(img).toHaveAttribute('loading', 'eager');
    expect(img).toHaveAttribute('fetchpriority', 'high');
  });

  it('swaps in an accessible branded placeholder when the asset fails', () => {
    render(<Img src={SRC} alt="Sydney campus" className="h-40" />);
    fireEvent.error(screen.getByRole('img', { name: 'Sydney campus' }));
    const fallback = screen.getByRole('img', { name: 'Sydney campus' });
    expect(fallback.tagName).toBe('DIV');
    expect(fallback).toHaveClass('h-40');
  });
});
