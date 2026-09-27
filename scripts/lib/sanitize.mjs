/** HTML-safety helpers shared by the content extractor (and covered by unit tests). */

/**
 * Allowlists link targets: app-relative paths, in-page anchors and http(s)/mailto/tel.
 * Anything else (javascript:, data:, vbscript:, obfuscated variants) is dropped.
 */
export function isSafeHref(href) {
  const h = href.trim();
  if (!h) return false;
  if (/^[/#]/.test(h) && !h.startsWith('//')) return true;
  return /^(https?:|mailto:|tel:)/i.test(h) && !/[\s\u0000-\u001f]/.test(h);
}

export function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
