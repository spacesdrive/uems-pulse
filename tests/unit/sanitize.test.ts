import { describe, expect, it } from 'vitest';
import { escapeHtml, isSafeHref } from '../../scripts/lib/sanitize.mjs';

describe('isSafeHref', () => {
  it.each([
    '/study-in-usa',
    '#faq',
    'https://example.com/a?b=1',
    'http://example.com',
    'HTTPS://EXAMPLE.COM',
    'mailto:info@uemsventures.com',
    'tel:+919833808612',
  ])('allows %s', (href) => expect(isSafeHref(href)).toBe(true));

  it.each([
    '',
    '   ',
    'javascript:alert(1)',
    'JavaScript:alert(1)',
    ' javascript:alert(1)',
    'data:text/html;base64,PHNjcmlwdD4=',
    'vbscript:msgbox(1)',
    '//evil.example.com',
    'java\tscript:alert(1)',
    'https://ok.example/\u0000',
    'page.html',
  ])('rejects %j', (href) => expect(isSafeHref(href)).toBe(false));
});

describe('escapeHtml', () => {
  it('escapes markup-significant characters', () => {
    expect(escapeHtml(`<a href="x" title='y'>&</a>`)).toBe('&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;&amp;&lt;/a&gt;');
  });
});
