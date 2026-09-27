import { useEffect } from 'react';

/**
 * One shared IntersectionObserver for every [data-reveal] element in the app.
 * A MutationObserver picks up elements rendered after navigation, so components
 * only need the attribute — no per-component hooks or re-renders.
 */
export function useRevealObserver(rootSelector = '#app-root') {
  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;
    if (!('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('js');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-shown', '');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );

    const scan = (node: Element) => {
      if (node.matches('[data-reveal]:not([data-shown])')) io.observe(node);
      node.querySelectorAll('[data-reveal]:not([data-shown])').forEach((el) => io.observe(el));
    };

    scan(root);
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) m.addedNodes.forEach((n) => n instanceof Element && scan(n));
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [rootSelector]);
}
