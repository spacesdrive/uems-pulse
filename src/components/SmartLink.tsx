import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router';
import { isExternal, opensNewTab } from '@/lib/links';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Renders a router <Link> for internal paths and a plain anchor for everything else. */
export const SmartLink = forwardRef<HTMLAnchorElement, Props>(function SmartLink({ href, children, ...rest }, ref) {
  if (isExternal(href) || href.startsWith('#')) {
    const newTab = opensNewTab(href);
    return (
      <a
        ref={ref}
        href={href}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link ref={ref} to={href} viewTransition {...rest}>
      {children}
    </Link>
  );
});
