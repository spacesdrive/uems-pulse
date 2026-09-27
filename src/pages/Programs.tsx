import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { CircleCheck, Phone } from 'lucide-react';
import { pathways, programPillars, programsCtaImage, programsHero, programStats, programStories, whyTrust, whyTrustImage } from '@/data/programs';
import { site } from '@/data/site';
import { Button, ButtonRow } from '@/components/Button';
import { CountUp } from '@/components/CountUp';
import { Img } from '@/components/Img';
import { Marquee } from '@/components/Marquee';
import { Seo } from '@/components/Seo';
import { Stars } from '@/components/Stars';
import { FeatureGrid } from '@/sections/FeatureGrid';
import { SectionShell } from '@/sections/SectionShell';
import { cn } from '@/lib/cn';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

function ProgramsHero() {
  return (
    <section className="hero-gradient relative overflow-hidden px-4 pt-32 pb-16 text-white sm:pt-40 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.3),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span data-reveal className="pill-light">
            <span className="size-1.5 animate-pulse rounded-full bg-gold" /> {programsHero.badge}
          </span>
          <h1 data-reveal style={delay(60)} className="mt-5 text-5xl leading-[1.02] font-semibold tracking-tight md:text-7xl">
            Your Future <span className="text-gold-200">Starts Here</span>
          </h1>
          <p data-reveal style={delay(120)} className="mt-6 max-w-xl text-lg leading-8 text-white">
            {programsHero.intro}
          </p>
          <div data-reveal style={delay(180)}>
            <ButtonRow
              className="mt-8"
              actions={[
                { label: 'Explore Programs', href: '#pathways', variant: 'white' },
                { label: 'Book a Program', href: site.bookingUrl, variant: 'ghost', icon: 'calendarCheck' },
              ]}
            />
          </div>
          <dl data-reveal style={delay(240)} className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/25 pt-6">
            {programStats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-semibold">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs tracking-wide text-white uppercase">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div data-reveal="scale" className="relative grid grid-cols-2 gap-3">
          <div className="row-span-2 overflow-hidden rounded-3xl ring-4 ring-white/30">
            <Img src={programsHero.images[0].src} alt={programsHero.images[0].alt} priority sizes="300px" className="size-full object-cover" />
          </div>
          {programsHero.images.slice(1).map((img) => (
            <div key={img.src} className="overflow-hidden rounded-3xl ring-4 ring-white/30">
              <Img src={img.src} alt={img.alt} priority sizes="300px" className="aspect-square size-full object-cover" />
            </div>
          ))}
          <div className="col-span-2 grid grid-cols-3 gap-2 sm:absolute sm:-bottom-6 sm:left-1/2 sm:flex sm:-translate-x-1/2 sm:gap-3">
            {programStats.slice(3).map((s) => (
              <div key={s.label} className="rounded-2xl bg-white px-2 py-3 text-center text-ink shadow-xl sm:px-4">
                <p className="text-xl font-semibold text-primary">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[11px] leading-tight text-muted sm:whitespace-nowrap">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pathways() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = pathways[active];
  const onKeyDown = (e: KeyboardEvent) => {
    const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + pathways.length) % pathways.length;
    setActive(next);
    refs.current[next]?.focus();
  };
  return (
    <SectionShell id="pathways" tone="surface" badge="Your Journey" badgeIcon="route" title="Academic Pathways" intro="Find your strengths. Unlock your potential. Choose the stage that matches your current academic journey." width="wide">
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <div role="tablist" aria-label="Academic pathways" aria-orientation="vertical" className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
          {pathways.map((item, i) => (
            <button
              key={item.step}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`pathway-tab-${i}`}
              aria-selected={i === active}
              aria-controls="pathway-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={cn(
                'flex min-w-56 cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0',
                i === active ? 'border-primary bg-white shadow-[0_12px_30px_-16px_rgba(26,90,240,0.6)] ring-2 ring-primary/15' : 'border-line bg-white/60 hover:bg-white',
              )}
            >
              <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors', i === active ? 'bg-primary text-white' : 'bg-primary-50 text-primary')}>
                {item.step}
              </span>
              <span>
                <span className="block font-semibold">{item.label}</span>
                <span className="text-sm text-muted">{item.stage}</span>
              </span>
            </button>
          ))}
        </div>
        <div id="pathway-panel" role="tabpanel" aria-labelledby={`pathway-tab-${active}`} key={active} className="card grid animate-page-in overflow-hidden md:grid-cols-2">
          <Img src={p.image} alt={p.title} sizes="(min-width: 768px) 420px, 100vw" className="aspect-[16/11] size-full object-cover md:aspect-auto" />
          <div className="flex flex-col p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{p.stage}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
            <p className="mt-3 leading-7 text-muted">{p.text}</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-[15px]">
                  <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3 pt-7">
              <Button label="Book Now" href={site.bookingUrl} />
              {p.eval && <Button label="Explore Eval" href="/career-clarity-tests" variant="outline" arrow />}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function Component() {
  return (
    <>
      <Seo title="Programs – Your Future Starts Here" description="Career discovery, subject selection, university planning and premium mentorship programs from Class 8 through graduation." />
      <ProgramsHero />
      <SectionShell badge="About UEMS Ventures" badgeIcon="sparkles" title="Guiding Students at Every Stage" intro="From career clarity and subject selection to profile building and global university admissions, we guide students at every stage of their academic journey with personalised mentoring, expert insights, and future-focused strategies.">
        <FeatureGrid items={programPillars} />
      </SectionShell>
      <Pathways />
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div data-reveal="scale" className="panel">
            <Img src={whyTrustImage.src} alt={whyTrustImage.alt} className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </div>
          <div>
            <span data-reveal className="pill">
              <span className="size-1.5 rounded-full bg-gold" /> Why Choose Us
            </span>
            <h2 data-reveal className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Why Students &amp; Parents Trust UEMS Ventures
            </h2>
            <p data-reveal className="mt-4 text-lg text-muted">
              We believe every student deserves clarity, confidence, and opportunities that match their true potential.
            </p>
            <ol className="mt-8 space-y-5">
              {whyTrust.map((w, i) => (
                <li key={w.title} data-reveal style={delay(i * 60)} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-primary ring-1 ring-primary/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="mt-1 leading-7 text-muted">{w.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <SectionShell tone="surface" badge="Student Stories" badgeIcon="star" title="Futures We've Helped Build" intro="Real students. Real transformations. Real results." width="wide">
        <Marquee duration={45}>
          {programStories.map((s) => (
            <figure key={s.name} className="card w-[320px] shrink-0 p-6 sm:w-[380px]">
              <div className="flex items-center gap-3">
                <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-semibold text-white">
                  {s.name[0]}
                </span>
                <figcaption>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-muted">{s.meta}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 leading-7 text-ink/80">{s.quote}</blockquote>
              <Stars className="mt-4" />
            </figure>
          ))}
        </Marquee>
      </SectionShell>
      <section className="px-3 py-10 sm:px-4 md:py-14">
        <div data-reveal="scale" className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl text-white">
          <Img src={programsCtaImage} alt="" sizes="100vw" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-primary/60" />
          <div className="relative px-6 py-16 sm:px-12 md:py-24">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">
              More Than Counselling. <span className="text-gold">We Help Students Build Futures.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white">Every student deserves clarity, confidence, and opportunities that match their true potential. Ready to Begin Your Journey?</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Book Your Program" href={site.bookingUrl} variant="white" size="lg" />
              <a href="tel:+919833808612" className="btn btn-ghost-light btn-lg">
                <Phone aria-hidden className="size-4" /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
