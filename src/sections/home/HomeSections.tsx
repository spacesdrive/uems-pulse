import type { CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, Quote, Star } from 'lucide-react';
import { Facebook, Linkedin } from '@/components/BrandIcons';
import { affiliations, founder, linkedinStats, strengthenProfile, teamPhotos, trustMetrics, whyChoose } from '@/data/home';
import { blogPosts } from '@/data/posts';
import { site } from '@/data/site';
import { googleReviews } from '@/data/testimonials';
import { Button } from '@/components/Button';
import { Img } from '@/components/Img';
import { PostCard } from '@/components/PostCard';
import { SectionHeading } from '@/components/SectionHeading';
import { SmartLink } from '@/components/SmartLink';
import { Stars } from '@/components/Stars';
import { telHref } from '@/lib/links';
import { LogoWall } from '../LogoWall';
import { SectionShell } from '../SectionShell';
import { StatsGrid } from '../StatsGrid';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
          <SectionHeading badge={whyChoose.badge} badgeIcon="trophy" title={whyChoose.title} intro={whyChoose.intro} align="left" className="mb-0 md:mb-0" />
          <div data-reveal className="flex flex-wrap items-center gap-4 lg:justify-end">
            {whyChoose.highlights.map((h) => (
              <div key={h.label} className="card px-5 py-4">
                <p className="text-xs font-medium tracking-wide text-muted uppercase">{h.note}</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  {h.value} <span className="text-base font-medium text-muted">{h.label}</span>
                </p>
              </div>
            ))}
            <Button label="Discover More" href="/about-us" variant="outline" />
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {whyChoose.services.map((s, i) => (
            <li key={s.title} data-reveal style={delay(i * 90)}>
              <SmartLink href={s.href} className="group card card-hover flex h-full flex-col overflow-hidden">
                <div className="overflow-hidden bg-primary-50">
                  <Img src={s.image} alt="" sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-muted">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-medium text-primary">
                    {s.cta}
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrustMetrics() {
  return (
    <section className="px-3 sm:px-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-navy-900 px-5 py-16 text-white sm:px-10 md:py-20">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[480px] rounded-full bg-primary/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 size-[420px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="pill-light">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Live Metrics
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Built on Trust</h2>
            <p className="mt-4 text-white/75">Verified cases, global partners, years of experience and a success rate our students can count on.</p>
          </div>
          <StatsGrid items={trustMetrics} tone="dark" />
        </div>
      </div>
    </section>
  );
}

export function StrengthenProfile() {
  return (
    <SectionShell badge="Other Services" badgeIcon="rocket" title="Strengthen Your Profile" intro="Expert support to clarify your path and hit your target scores.">
      <div className="grid gap-5 md:grid-cols-2">
        {strengthenProfile.map((s, i) => (
          <SmartLink key={s.title} href={s.href} data-reveal style={delay(i * 90)} className="group card card-hover grid overflow-hidden sm:grid-cols-[0.9fr_1fr]">
            <div className="overflow-hidden bg-primary-50">
              <Img src={s.image} alt="" sizes="(min-width: 768px) 300px, 100vw" className="aspect-[16/10] size-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-auto" />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{s.text}</p>
              <span className="btn btn-primary mt-6 w-fit">
                {s.cta} <ArrowRight aria-hidden className="btn-arrow size-4" />
              </span>
            </div>
          </SmartLink>
        ))}
      </div>
    </SectionShell>
  );
}

export function FounderMessage() {
  return (
    <section className="section bg-surface">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-reveal="scale" className="relative">
          <div className="panel">
            <Img src={founder.image} alt={`${founder.name} – Founder, UEMS Ventures`} sizes="(min-width: 1024px) 460px, 100vw" className="aspect-[4/5] w-full rounded-3xl object-cover object-top" />
          </div>
          <div className="absolute -right-2 bottom-8 grid grid-cols-2 gap-2 sm:-right-6">
            {founder.stats.map((s) => (
              <div key={s.label} className="card px-4 py-3 text-center shadow-lg">
                <p className="text-2xl font-semibold text-primary">{s.value}</p>
                <p className="text-xs font-medium tracking-wide text-muted uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span data-reveal className="pill">
            <Quote aria-hidden className="size-4 text-primary" /> Founder&apos;s Message
          </span>
          <h2 data-reveal className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{founder.heading}</h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-ink/80">
            {founder.message.map((p, i) => (
              <p key={i} data-reveal style={delay(i * 60)}>
                {p}
              </p>
            ))}
          </div>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
            <div>
              <p className="text-lg font-semibold">{founder.name}</p>
              <p className="text-sm text-muted">{founder.role}</p>
            </div>
            <a
              href={site.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline ml-auto"
              aria-label={`${founder.name} on LinkedIn`}
            >
              <Linkedin aria-hidden className="size-4 text-[#0a66c2]" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LatestBlogs() {
  return (
    <SectionShell
      badge="Blogs"
      badgeIcon="book"
      title="Study Abroad & Migration Insights"
      intro="Navigate your journey overseas with the latest visa updates, university guides, and immigration tips."
      width="wide"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((p, i) => (
          <PostCard key={p.slug} post={p} index={i} />
        ))}
      </div>
      <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
        <Button label="View all blogs" href="/blogs" />
        <Button label="News & Events" href="/news-and-events" variant="outline" arrow />
      </div>
    </SectionShell>
  );
}

export function GoogleReviews() {
  return (
    <div data-reveal className="card mb-8 p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-semibold tracking-tight">{site.reviews.rating}</span>
          <div>
            <Stars />
            <p className="mt-1 text-sm text-muted">
              {site.reviews.count} Google reviews · Mulund West, Mumbai
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={site.reviews.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Star aria-hidden className="size-4" /> Write a review
          </a>
          <a href={site.reviews.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View all {site.reviews.count} reviews on Google
          </a>
        </div>
      </div>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {googleReviews.map((r) => (
          <li key={r.name} className="rounded-2xl bg-surface p-4">
            <div className="flex items-center gap-2">
              <span aria-hidden className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {r.name[0]}
              </span>
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted">{r.meta}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/80">{r.quote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TeamAndContact() {
  return (
    <SectionShell badge="Our Team" badgeIcon="users" title="The people behind your journey" intro="Our Mumbai office welcomes you for face-to-face counselling." width="wide">
      <div className="grid items-start gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="grid grid-cols-2 gap-4">
          {teamPhotos.map((p, i) => (
            <div key={p.src} data-reveal="scale" style={delay(i * 80)} className={i === 0 ? 'col-span-2 overflow-hidden rounded-3xl' : 'overflow-hidden rounded-3xl'}>
              <Img src={p.src} alt={p.alt} sizes="(min-width: 768px) 40vw, 50vw" className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'}`} />
            </div>
          ))}
        </div>
        <div data-reveal className="card flex flex-col gap-6 p-6 md:p-8">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase">
              <MapPin aria-hidden className="size-4 text-primary" /> Address
            </p>
            <address className="mt-2 text-lg leading-7 not-italic">
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase">
              <Phone aria-hidden className="size-4 text-primary" /> Contact
            </p>
            <ul className="mt-2 space-y-1 text-lg">
              {site.phones.map((p) => (
                <li key={p}>
                  <a href={telHref(p)} className="hover:text-primary">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail aria-hidden className="size-4" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto flex flex-wrap gap-3">
            <Button label="Get in touch" href="/contact-us" />
            <Button label="Directions" href={site.address.mapUrl} variant="outline" icon="pin" />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 data-reveal className="mb-6 text-center text-sm font-medium tracking-[0.18em] text-muted uppercase">
          Our Affiliations
        </h3>
        <LogoWall images={affiliations} />
      </div>
    </SectionShell>
  );
}

export function FollowUs() {
  return (
    <SectionShell badge="Follow Us" badgeIcon="chat" title="We want to hear from you!" width="wide" tone="surface">
      <div className="grid gap-5 md:grid-cols-3">
        <a data-reveal href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="group card card-hover flex flex-col p-6">
          <span className="icon-circle bg-[#1877f2]">
            <Facebook aria-hidden className="size-5" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">Facebook</h3>
          <p className="mt-1 text-muted">Unique Education &amp; Migration Services Mumbai — latest posts, events and student stories.</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-medium text-primary">
            Open Facebook page <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
        <a data-reveal style={delay(80)} href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group card card-hover flex flex-col p-6">
          <span className="icon-circle bg-[#0a66c2]">
            <Linkedin aria-hidden className="size-5" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">LinkedIn · UEMS Ventures</h3>
          <p className="mt-1 text-muted">
            Education &amp; Migration Services. Helping students &amp; professionals achieve their global education and migration goals. Australia · Canada · UK · USA · New Zealand
          </p>
          <dl className="mt-4 grid grid-cols-3 gap-2">
            {linkedinStats.map((s) => (
              <div key={s.label} className="rounded-xl bg-surface p-2 text-center">
                <dt className="text-[11px] tracking-wide text-muted uppercase">{s.label}</dt>
                <dd className="font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-medium text-primary">
            Follow company <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
        <a data-reveal style={delay(160)} href={site.reviews.url} target="_blank" rel="noopener noreferrer" className="group card card-hover flex flex-col p-6">
          <span className="icon-circle bg-gold text-navy-900">
            <Star aria-hidden className="size-5" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">Google Reviews</h3>
          <p className="mt-1 text-muted">
            {site.reviews.rating}★ from {site.reviews.count} reviews. Share your UEMS experience and help other students choose with confidence.
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-medium text-primary">
            Write a review <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </SectionShell>
  );
}
