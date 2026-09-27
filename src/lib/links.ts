export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/** Opens in a new tab only for web URLs, never for mailto/tel. */
export const opensNewTab = (href: string) => /^https?:/.test(href);

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

/** Hands a URL (e.g. a pre-filled mailto:) to the browser. Isolated so tests can observe it. */
export function openExternal(href: string) {
  window.location.assign(href);
}
