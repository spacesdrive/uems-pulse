import type { CSSProperties } from 'react';
import { BadgeCheck, Clock, Globe2, Users } from 'lucide-react';
import { hero } from '@/data/home';
import { site } from '@/data/site';
import { ButtonRow } from '@/components/Button';
import { Img } from '@/components/Img';
import { Stars } from '@/components/Stars';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

export function HomeHero() {
  const [before, after] = hero.title.split(hero.highlight);
  return (
    <section className="hero-gradient relative overflow-hidden px-4 pt-32 text-white sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div data-reveal className="flex justify-center">
          <a
            href={site.reviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white/15 py-1.5 pr-4 pl-1.5 ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <span className="flex -space-x-2.5">
              {hero.trustedAvatars.map((src) => (
                <Img key={src} src={src} alt="" sizes="36px" priority className="size-8 rounded-full object-cover ring-2 ring-white" />
              ))}
            </span>
            <span className="text-left leading-tight">
              <Stars className="text-white [&_svg]:size-3.5" />
              <span className="block text-xs font-medium sm:text-sm">
                Rated {site.reviews.rating} by {site.reviews.count} Google reviewers
              </span>
            </span>
          </a>
        </div>

        <p data-reveal style={delay(40)} className="mt-8 text-sm font-medium tracking-[0.18em] text-white uppercase">
          {hero.badge}
        </p>
        <h1 data-reveal style={delay(80)} className="mt-3 text-[2.6rem] leading-[1.02] font-semibold tracking-tight sm:text-6xl md:text-7xl">
          {before}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">{hero.highlight}</span>
            <span aria-hidden className="absolute inset-x-0 bottom-[0.06em] h-[0.2em] rounded-full bg-gold/80" />
          </span>
          {after}
        </h1>
        <p data-reveal style={delay(140)} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white md:text-lg md:leading-8">
          {hero.intro}
        </p>
        <div data-reveal style={delay(200)}>
          <ButtonRow
            className="mt-9 justify-center"
            actions={[
              { label: 'Contact Us Now', href: '/contact-us', variant: 'primary' },
              { label: 'Explore Destinations', href: '#destinations', variant: 'white', icon: 'compass' },
            ]}
          />
        </div>
      </div>

      {/* Framed "dashboard" of proof points, echoing the reference's product frame */}
      <div className="relative mx-auto mt-14 max-w-6xl md:mt-16">
        <div aria-hidden className="absolute inset-x-[-50vw] -bottom-px h-[34%] bg-white" />
        <div data-reveal="scale" style={delay(120)} className="relative rounded-[28px] bg-white p-2.5 text-ink shadow-[0_40px_100px_-40px_rgba(6,42,71,0.55)] ring-1 ring-black/5 sm:p-3">
          <div className="grid gap-3 md:grid-cols-[1.05fr_1fr]">
            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-primary-50 to-white">
              <Img
                src={hero.image.src}
                alt={hero.image.alt}
                priority
                sizes="(min-width: 768px) 560px, 100vw"
                width={1280}
                height={1280}
                className="mx-auto aspect-square w-full max-w-[560px] object-cover"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="rounded-[20px] bg-surface p-5 sm:col-span-2 md:col-span-1 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted">Trusted &amp; Proven</p>
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary text-white">
                    <Users aria-hidden className="size-4" />
                  </span>
                </div>
                <p className="mt-3 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-tight">5K+</span>
                  <span className="mb-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">students</span>
                </p>
                <p className="mt-2 text-sm text-muted">5,000+ students launched their future through us</p>
              </div>
              <div className="rounded-[20px] bg-surface p-5 sm:col-span-2 md:col-span-1 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted">Top Destinations</p>
                  <span className="flex size-9 items-center justify-center rounded-full bg-gold text-navy-900">
                    <Globe2 aria-hidden className="size-4" />
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {hero.destinations.map((d) => (
                    <li key={d} className="flex size-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-navy shadow-sm ring-1 ring-line">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[20px] bg-primary p-5 text-white">
                <BadgeCheck aria-hidden className="size-6" />
                <p className="mt-4 text-sm text-white">Approved!</p>
                <p className="text-3xl font-semibold tracking-tight">98% Success</p>
              </div>
              <div className="rounded-[20px] bg-navy-900 p-5 text-white">
                <Clock aria-hidden className="size-6 text-gold" />
                <p className="mt-4 text-sm text-white">Free Consult</p>
                <p className="text-3xl font-semibold tracking-tight">24hr response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
