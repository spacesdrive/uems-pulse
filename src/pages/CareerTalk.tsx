import type { CSSProperties } from 'react';
import { CircleCheck, Clock, Sparkles, Users } from 'lucide-react';
import {
  cellArchitecture,
  cellBenefits,
  cellSupport,
  counsellingDeliverables,
  idealFor,
  marqueeItems,
  outcomes,
  seminarIncludes,
  seminarTopics,
  talkHero,
  talkServices,
  talkStats,
  whoCanSetUp,
} from '@/data/careerTalk';
import { Accordion } from '@/components/Accordion';
import { ButtonRow } from '@/components/Button';
import { CountUp } from '@/components/CountUp';
import { Marquee } from '@/components/Marquee';
import { Seo } from '@/components/Seo';
import { SmartLink } from '@/components/SmartLink';
import { CtaBand } from '@/sections/CtaBand';
import { FeatureGrid } from '@/sections/FeatureGrid';
import { icons } from '@/lib/icons';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

function ServiceHeader({ step, badge, title, text }: { step: string; badge: string; title: string; text: string }) {
  return (
    <div data-reveal className="max-w-3xl">
      <span className="pill">
        <span className="font-semibold text-primary">{step}</span> {badge}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-muted">{text}</p>
    </div>
  );
}

function MetaStrip({ items }: { items: [string, string][] }) {
  return (
    <dl className="grid grid-cols-3 gap-3">
      {items.map(([v, l]) => (
        <div key={l} className="rounded-2xl bg-primary-50 p-4 text-center">
          <dd className="text-2xl font-semibold text-primary">{v}</dd>
          <dt className="mt-1 text-[11px] font-medium tracking-wide text-muted uppercase">{l}</dt>
        </div>
      ))}
    </dl>
  );
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function Component() {
  return (
    <>
      <Seo title="Career Talk – Seminars, Counselling & Counselling Cells" description="Career seminars, one-on-one counselling and Career Counselling Cell setup for schools, colleges and institutions by UEMS Ventures." />

      <section className="hero-gradient relative overflow-hidden px-4 pt-32 pb-16 text-white sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span data-reveal className="pill-light">
            <Sparkles aria-hidden className="size-4 text-gold" /> {talkHero.badge}
          </span>
          <h1 data-reveal style={delay(60)} className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Inspiring Students. <span className="text-gold-200">Creating Career Awareness.</span>
          </h1>
          {talkHero.intro.map((p, i) => (
            <p key={i} data-reveal style={delay(120 + i * 40)} className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white md:text-lg">
              {p}
            </p>
          ))}
          <div data-reveal style={delay(200)}>
            <ButtonRow
              className="mt-8 justify-center"
              actions={[
                { label: 'Explore Programs', href: '#service-1', variant: 'white' },
                { label: 'Get in Touch', href: '#partner', variant: 'ghost', icon: 'chat' },
              ]}
            />
          </div>
          <dl data-reveal style={delay(240)} className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-3">
            {talkStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur">
                <dd className="text-3xl font-semibold">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs tracking-wide text-white uppercase">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
          {talkServices.map((s, i) => (
            <SmartLink key={s.id} href={`#${s.id}`} data-reveal style={delay(i * 90)} className="group rounded-3xl bg-white p-6 text-ink shadow-[0_30px_70px_-35px_rgba(6,42,71,0.6)] transition-transform duration-300 hover:-translate-y-1">
              <span className="text-sm font-semibold text-primary">{s.step}</span>
              <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-[15px] leading-7 text-muted">{s.text}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Users aria-hidden className="size-4 text-primary" /> {s.meta[0]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock aria-hidden className="size-4 text-primary" /> {s.meta[1]}
                </span>
              </p>
            </SmartLink>
          ))}
        </div>
      </section>

      <div className="border-y border-line bg-white py-5">
        <Marquee duration={30}>
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i} className="flex shrink-0 items-center gap-4 text-sm font-semibold tracking-[0.16em] text-ink/70 uppercase">
              {m} <span className="text-gold">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <section id="service-1" className="section">
        <div className="container-x">
          <ServiceHeader
            step="01"
            badge="Career Seminars & Talks"
            title="Helping Students Explore Careers Beyond Traditional Choices"
            text="Our expert-led seminars introduce students to emerging careers, future industries, global education opportunities, and smart career planning strategies."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 data-reveal className="mb-4 text-sm font-semibold tracking-[0.16em] text-muted uppercase">
                Topics we cover — click to expand
              </h3>
              <Accordion items={seminarTopics} defaultOpen={null} />
            </div>
            <div className="space-y-6">
              <div data-reveal className="card p-6">
                <h3 className="font-semibold">Ideal for</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {idealFor.map((i) => (
                    <li key={i} className="rounded-full border border-line px-3 py-1.5 text-sm">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-reveal className="card p-6">
                <h3 className="font-semibold">What happens in a seminar</h3>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {seminarIncludes.map((s) => {
                    const Icon = icons[s.icon ?? 'check'];
                    return (
                      <li key={s.title} className="flex gap-3 rounded-2xl bg-surface p-3">
                        <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span>
                          <span className="block text-sm font-semibold">{s.title}</span>
                          <span className="text-xs text-muted">{s.text}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-5">
                  <MetaStrip items={[['90min', 'Duration'], ['9+', 'Topics'], ['Q&A', 'Included']]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-2" className="section bg-surface">
        <div className="container-x">
          <ServiceHeader
            step="02"
            badge="One-on-One Counselling"
            title="Personalized Guidance for Every Student"
            text="Every student is different — and so is every career journey. Our one-on-one counselling sessions provide personalized support based on a student's interests, strengths, goals, and aspirations."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 data-reveal className="mb-4 text-sm font-semibold tracking-[0.16em] text-muted uppercase">
                What students receive
              </h3>
              <FeatureGrid items={counsellingDeliverables} columns={2} />
            </div>
            <div className="space-y-6">
              <div data-reveal className="card p-6">
                <h3 className="font-semibold">Designed for</h3>
                <p className="mt-2 text-muted">Students who need focused guidance and customized career planning support.</p>
              </div>
              <div data-reveal className="card p-6">
                <h3 className="font-semibold">Student outcomes</h3>
                <ul className="mt-5 space-y-4">
                  {outcomes.map((o) => (
                    <li key={o.label}>
                      <div className="flex justify-between text-sm font-medium">
                        <span>{o.label}</span>
                        <span className="text-primary">{o.value}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-primary-50">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${o.value}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <MetaStrip items={[['60min', 'Per session'], ['7', 'Deliverables'], ['On/Off', 'Online/Offline']]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-3" className="section">
        <div className="container-x">
          <ServiceHeader
            step="03"
            badge="Counselling Cell Setup"
            title="Build a Structured Career Guidance Ecosystem in Your Institution"
            text="UEMS Ventures helps schools and colleges establish dedicated Career Counselling Cells that provide ongoing support, guidance, and future planning assistance to students."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div data-reveal className="card p-6 md:p-8">
              <h3 className="text-lg font-semibold">Our cell support includes</h3>
              <div className="mt-5">
                <Checks items={cellSupport} />
              </div>
            </div>
            <div data-reveal style={delay(80)} className="card p-6 md:p-8">
              <h3 className="text-lg font-semibold">Benefits for institutions</h3>
              <div className="mt-5">
                <Checks items={cellBenefits} />
              </div>
              <h3 className="mt-8 text-lg font-semibold">Who can set up</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {whoCanSetUp.map((w) => (
                  <li key={w} className="rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 data-reveal className="mt-14 mb-6 text-center text-sm font-semibold tracking-[0.16em] text-muted uppercase">
            Cell Architecture
          </h3>
          <FeatureGrid items={cellArchitecture} columns={3} />
        </div>
      </section>

      <div id="partner">
        <CtaBand
          title="Let's Build Brighter Futures Together"
          text="Whether you are a school, college, coaching institute, or educational organization — we can help your students gain career clarity, confidence, and direction through impactful guidance programs. Free Consultation · Custom Programs · Expert Mentors."
          actions={[
            { label: 'Book a Career Talk Today', href: 'mailto:info@uemsventures.com?subject=Career%20Talk%20enquiry', variant: 'white' },
            { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
          ]}
        />
      </div>
    </>
  );
}
