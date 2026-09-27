import { describe, expect, it } from 'vitest';
import { isExternal, opensNewTab, telHref } from '@/lib/links';

describe('links', () => {
  it.each([
    ['https://example.com', true],
    ['http://example.com', true],
    ['mailto:info@uemsventures.com', true],
    ['tel:+919833808612', true],
    ['/contact-us', false],
    ['#main', false],
  ])('isExternal(%s) is %s', (href, expected) => {
    expect(isExternal(href)).toBe(expected);
  });

  it('opens only web URLs in a new tab', () => {
    expect(opensNewTab('https://wa.me/1')).toBe(true);
    expect(opensNewTab('mailto:a@b.co')).toBe(false);
    expect(opensNewTab('tel:123')).toBe(false);
    expect(opensNewTab('/programs')).toBe(false);
  });

  it('strips formatting from phone numbers', () => {
    expect(telHref('+91 98338 08612')).toBe('tel:+919833808612');
    expect(telHref('(022) 1234-5678')).toBe('tel:02212345678');
  });
});
