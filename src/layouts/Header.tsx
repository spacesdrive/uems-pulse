import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { CalendarCheck, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { SmartLink } from '@/components/SmartLink';
import { mainNav, site, type NavItem } from '@/data/site';
import { telHref } from '@/lib/links';
import { cn } from '@/lib/cn';

function isActive(item: NavItem, pathname: string) {
  if (item.href === '/') return pathname === '/';
  return pathname.startsWith(item.href) || Boolean(item.children?.some((c) => pathname.startsWith(c.href)));
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const children = item.children ?? [];
  const wide = children.length > 4;

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          wrapRef.current?.querySelector('button')?.focus();
        }
      }}
    >
      <div className="flex items-center">
        <NavLink
          to={item.href}
          viewTransition
          className={cn(
            'rounded-full py-2 pr-1 pl-3 text-[15px] transition-colors hover:text-primary',
            isActive(item, pathname) ? 'font-medium text-primary' : 'text-ink',
          )}
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${item.label} menu`}
          onClick={() => setOpen((o) => !o)}
          className="cursor-pointer rounded-full p-1.5 text-ink/70 transition-colors hover:text-primary"
        >
          <ChevronDown aria-hidden className={cn('size-4 transition-transform duration-200', open && 'rotate-180')} />
        </button>
      </div>
      <div
        className={cn(
          'absolute top-full left-1/2 z-50 pt-3 transition-all duration-200 ease-out',
          open ? 'visible -translate-x-1/2 translate-y-0 opacity-100' : 'invisible -translate-x-1/2 -translate-y-1 opacity-0',
        )}
      >
        <ul
          className={cn(
            'card grid gap-1 p-2 shadow-[0_24px_60px_-24px_rgba(16,40,110,0.35)]',
            wide ? 'w-[34rem] grid-cols-2' : 'w-72',
          )}
        >
          {children.map((c) => (
            <li key={c.href}>
              <NavLink
                to={c.href}
                viewTransition
                className={({ isActive: active }) =>
                  cn('block rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-50', active && 'bg-primary-50')
                }
              >
                <span className="block text-sm font-medium text-ink">{c.label}</span>
                {c.description && <span className="mt-0.5 block text-xs text-muted">{c.description}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-x-3 top-[5.25rem] bottom-3 z-40 overflow-y-auto rounded-3xl border border-line bg-white p-4 shadow-2xl transition-all duration-300 ease-out xl:hidden',
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0',
      )}
      inert={!open}
    >
      <nav aria-label="Mobile">
        <ul className="divide-y divide-line">
          {mainNav.map((item) => (
            <li key={item.href} className="py-1">
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.href}
                  viewTransition
                  className={cn('flex-1 rounded-xl px-3 py-3 text-base', isActive(item, pathname) ? 'font-medium text-primary' : 'text-ink')}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <button
                    type="button"
                    aria-expanded={expanded === item.href}
                    aria-label={`Show ${item.label} pages`}
                    onClick={() => setExpanded((e) => (e === item.href ? null : item.href))}
                    className="cursor-pointer rounded-full p-3 text-ink/70"
                  >
                    <ChevronDown aria-hidden className={cn('size-5 transition-transform', expanded === item.href && 'rotate-180')} />
                  </button>
                )}
              </div>
              {item.children && (
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: expanded === item.href ? '1fr' : '0fr' }}
                >
                  <ul className="overflow-hidden" inert={expanded !== item.href}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <NavLink to={c.href} viewTransition className="block rounded-xl py-2.5 pr-3 pl-6 text-[15px] text-muted hover:text-primary">
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-4 grid gap-3">
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg w-full">
          <CalendarCheck aria-hidden className="size-4" /> Book Appointment
        </a>
        <SmartLink href="/career-clarity-tests" className="btn btn-outline btn-lg w-full">
          Get Career Clarity
        </SmartLink>
        <div className="mt-2 grid gap-2 rounded-2xl bg-surface p-4 text-sm">
          <a href={telHref(site.phones[0])} className="inline-flex items-center gap-2 text-ink">
            <Phone aria-hidden className="size-4 text-primary" /> {site.phones[0]}
          </a>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-ink">
            <Mail aria-hidden className="size-4 text-primary" /> {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div
        className={cn(
          'mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-full bg-white/95 py-2 pr-2 pl-3 backdrop-blur-md transition-shadow duration-300 sm:pl-4',
          scrolled ? 'shadow-[0_10px_30px_-12px_rgba(16,40,110,0.25)] ring-1 ring-line' : 'shadow-sm',
        )}
      >
        <SmartLink href="/" aria-label="UEMS Ventures home" className="shrink-0 rounded-full">
          <Logo />
        </SmartLink>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} pathname={pathname} />
              ) : (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    viewTransition
                    end={item.href === '/'}
                    className={({ isActive: active }) =>
                      cn('rounded-full px-3 py-2 text-[15px] transition-colors hover:text-primary', active ? 'font-medium text-primary' : 'text-ink')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden sm:inline-flex">
            <CalendarCheck aria-hidden className="size-4" />
            Book Appointment
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-surface xl:hidden"
          >
            {menuOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  );
}
