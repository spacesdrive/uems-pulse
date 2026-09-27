import { Mail, MapPin, Phone } from 'lucide-react';
import { Facebook, Instagram, Linkedin, XTwitter } from '@/components/BrandIcons';
import { Logo } from '@/components/Logo';
import { SmartLink } from '@/components/SmartLink';
import { footerNav, site } from '@/data/site';
import { telHref } from '@/lib/links';

const socials = [
  { label: 'Facebook', href: site.socials.facebook, Icon: Facebook },
  { label: 'Instagram', href: site.socials.instagram, Icon: Instagram },
  { label: 'LinkedIn', href: site.socials.linkedin, Icon: Linkedin },
  { label: 'X (Twitter)', href: site.socials.twitter, Icon: XTwitter },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-wide grid gap-12 py-14 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <SmartLink href="/" aria-label="UEMS Ventures home" className="inline-block rounded-full">
            <Logo />
          </SmartLink>
          <p className="mt-5 max-w-sm leading-7 text-muted">{site.description}</p>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon aria-hidden className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-base font-semibold">{group.title}</h2>
            <ul className="mt-5 space-y-3">
              {group.links.map((l) => (
                <li key={l.href}>
                  <SmartLink href={l.href} className="link-underline text-muted transition-colors hover:text-ink">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-base font-semibold">Address</h2>
          <address className="mt-5 space-y-4 not-italic text-muted">
            <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-ink">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              <span>
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-ink">
              <Mail aria-hidden className="size-4 shrink-0 text-primary" />
              {site.email}
            </a>
            <p className="flex gap-3">
              <Phone aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              <span>
                {site.phones.map((p, i) => (
                  <span key={p}>
                    <a href={telHref(p)} className="hover:text-ink">
                      {p}
                    </a>
                    {i < site.phones.length - 1 && ' / '}
                  </span>
                ))}
              </span>
            </p>
          </address>
        </div>
      </div>
      <div className="container-wide">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-sm text-muted md:flex-row">
          <p>Copyright 2020 {site.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
