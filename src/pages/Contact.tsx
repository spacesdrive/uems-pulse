import type { CSSProperties } from 'react';
import { CalendarCheck, Mail, MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import { Facebook, Linkedin } from '@/components/BrandIcons';
import { site, whatsappHref } from '@/data/site';
import { ContactForm } from '@/components/ContactForm';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/sections/PageHero';
import { telHref } from '@/lib/links';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

const channels = [
  {
    Icon: Phone,
    title: 'Call us',
    lines: site.phones.map((p) => ({ label: p, href: telHref(p) })),
  },
  {
    Icon: Mail,
    title: 'Email us',
    lines: [{ label: site.email, href: `mailto:${site.email}` }],
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    lines: [{ label: 'Chat with an expert', href: whatsappHref('Hi UEMS Ventures, I have a query.') }],
  },
  {
    Icon: CalendarCheck,
    title: 'Book an appointment',
    lines: [{ label: 'Schedule a counselling slot', href: site.bookingUrl }],
  },
];

export function Component() {
  return (
    <>
      <Seo title="Contact Us" description="Contact UEMS Ventures, 416 Marathon Max, LBS Marg, Mulund West, Mumbai. Call +91 9833808612 or email info@uemsventures.com." />
      <PageHero
        badge="Contact Us"
        title="Contact Us"
        intro="Please complete the details below and click submit. Our expert team will get in touch with you within 24 hours to answer all your queries."
      />

      <section className="section">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
          <div className="space-y-4">
            <ul className="grid gap-4 sm:grid-cols-2">
              {channels.map(({ Icon, title, lines }, i) => (
                <li key={title} data-reveal style={delay(i * 70)} className="card card-hover p-5">
                  <span className="icon-circle size-11">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h2 className="mt-4 font-semibold">{title}</h2>
                  <ul className="mt-1 space-y-0.5">
                    {lines.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          {...(/^https?:/.test(l.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="break-all text-muted transition-colors hover:text-primary"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div data-reveal className="card overflow-hidden">
              <div className="flex items-start gap-4 p-5">
                <span className="icon-circle size-11 bg-gold text-navy-900">
                  <MapPin aria-hidden className="size-5" />
                </span>
                <div>
                  <h2 className="font-semibold">Visit our office</h2>
                  <address className="mt-1 text-muted not-italic">{site.address.lines.join(', ')}</address>
                </div>
              </div>
              <iframe
                title="UEMS Ventures office location on Google Maps"
                src="https://www.google.com/maps?q=Marathon+Max+LBS+Marg+Mulund+West+Mumbai+400080&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 grayscale-[30%]"
              />
            </div>
          </div>
          <div data-reveal="scale">
            <ContactForm title="Fill the Form" />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-wide">
          <div data-reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Follow us</h2>
            <p className="mt-3 text-muted">Stay updated with events, visa news and student stories.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <a data-reveal href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-4 p-5">
              <span className="icon-circle bg-[#1877f2]">
                <Facebook aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">Facebook</span>
                <span className="text-sm text-muted">Unique Education &amp; Migration Services Mumbai</span>
              </span>
            </a>
            <a data-reveal style={delay(80)} href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-4 p-5">
              <span className="icon-circle bg-[#0a66c2]">
                <Linkedin aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">LinkedIn</span>
                <span className="text-sm text-muted">Unique Education and Migration Services</span>
              </span>
            </a>
            <a data-reveal style={delay(160)} href={site.reviews.url} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-4 p-5">
              <span className="icon-circle bg-gold text-navy-900">
                <Star aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">Google Reviews</span>
                <span className="text-sm text-muted">
                  {site.reviews.rating}★ · {site.reviews.count} reviews
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
