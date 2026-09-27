import { useState, type CSSProperties } from 'react';
import { ArrowRight, BookOpen, CircleCheck, Clock, Globe, Lock, Sparkles, UserCheck } from 'lucide-react';
import { audiences, evalInsights, heroChecklist, quizzes, whyLove, type QuizKey } from '@/data/careerTests';
import { site } from '@/data/site';
import { Button, ButtonRow } from '@/components/Button';
import { Img } from '@/components/Img';
import { QuizDialog } from '@/components/QuizDialog';
import { Seo } from '@/components/Seo';
import { CtaBand } from '@/sections/CtaBand';
import { FeatureGrid } from '@/sections/FeatureGrid';
import { SectionShell } from '@/sections/SectionShell';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

export function Component() {
  const [quiz, setQuiz] = useState<QuizKey | null>(null);

  return (
    <>
      <Seo title="Career Clarity Tests – Powered by EvalTest" description="Discover the career that truly fits you. EvalTest psychometric assessment plus quick IB and ICSE curriculum quizzes from UEMS Ventures." />

      <section className="hero-gradient relative overflow-hidden px-4 pt-32 pb-20 text-white sm:pt-40 md:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.3),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span data-reveal className="pill-light">
              <Sparkles aria-hidden className="size-4 text-gold" /> Powered by EvalTest
            </span>
            <h1 data-reveal style={delay(60)} className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Discover the Career That <span className="text-gold-200">Truly Fits You</span>
            </h1>
            <p data-reveal style={delay(120)} className="mt-6 max-w-xl text-lg leading-8 text-white">
              At UEMS Ventures, we believe career decisions should be based on clarity — not confusion, pressure, or guesswork. Let us introduce you to Eval Test.
            </p>
            <p data-reveal style={delay(160)} className="mt-3 max-w-xl leading-7 text-white">
              Whether you&apos;re confused about subject selection, choosing a degree, or planning your future career, EvalTest helps you make smarter decisions with confidence.
            </p>
            <div data-reveal style={delay(200)}>
              <ButtonRow
                className="mt-8"
                actions={[
                  { label: 'Learn More', href: '#about', variant: 'white' },
                  { label: 'Try EvalTest', href: site.evalUrl, variant: 'ghost' },
                ]}
              />
            </div>
            <p data-reveal style={delay(240)} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/15 py-1.5 pr-4 pl-1.5 text-sm ring-1 ring-white/25">
              <span className="rounded-full bg-white px-3 py-1 font-semibold text-primary">2,500+ Students</span>
              Already found their path
            </p>
          </div>
          <div data-reveal="scale" className="rounded-[28px] bg-white p-6 text-ink shadow-[0_40px_100px_-40px_rgba(6,42,71,0.6)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="icon-circle">
                <Sparkles aria-hidden className="size-5" />
              </span>
              <div>
                <p className="font-semibold">EvalTest Assessment</p>
                <p className="text-sm text-muted">Career Discovery Tool</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {heroChecklist.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3">
                  <CircleCheck aria-hidden className="size-5 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3 text-sm font-medium">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-primary">
                <Clock aria-hidden className="size-4" /> Under 30 min
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1.5 text-navy">
                <BookOpen aria-hidden className="size-4" /> No prep needed
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionShell badge="Quick Curriculum Quiz" badgeIcon="clipboardList" title="Confused About Subjects or Stream?" intro="Take a curriculum-based quiz to explore the right subjects, careers, and future opportunities. Make smarter subject choices with confidence.">
        <div className="grid gap-5 md:grid-cols-2">
          {(Object.keys(quizzes) as QuizKey[]).map((key, i) => {
            const q = quizzes[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setQuiz(key)}
                data-reveal
                style={delay(i * 90)}
                className="group card card-hover flex cursor-pointer flex-col p-7 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className={i === 0 ? 'icon-circle' : 'icon-circle bg-gold text-navy-900'}>
                    {i === 0 ? <Globe aria-hidden className="size-5" /> : <BookOpen aria-hidden className="size-5" />}
                  </span>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-muted uppercase">{q.tag}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{key === 'ib' ? 'IB Curriculum' : 'ICSE Curriculum'}</h3>
                <p className="mt-2 leading-7 text-muted">{q.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {q.chips.map((c) => (
                    <li key={c} className="rounded-full border border-line px-3 py-1 text-sm">
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 font-medium text-primary">
                  Start {key.toUpperCase()} Quiz <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-muted">Tap a card to start your quiz</p>
      </SectionShell>

      <SectionShell id="about" tone="surface" badge="About" badgeIcon="brain" title="What is EvalTest?" intro="EvalTest is an advanced career assessment and psychometric evaluation platform that helps students identify their true potential and ideal career pathways.">
        <p data-reveal className="mx-auto -mt-6 mb-10 max-w-3xl text-center text-muted">
          The assessment provides personalized insights — identifying natural strengths, career interests, personality traits, suitable pathways, subject recommendations, and ideal learning environments.
        </p>
        <FeatureGrid items={evalInsights} />
        <div data-reveal className="mt-10 text-center">
          <Button label="Try EvalTest" href={site.evalUrl} size="lg" />
        </div>
      </SectionShell>

      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span data-reveal className="pill">
              <span className="size-1.5 rounded-full bg-gold" /> Why EvalTest
            </span>
            <h2 data-reveal className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Why Students Love EvalTest
            </h2>
            <p data-reveal className="mt-2 text-lg font-medium text-primary">
              Simple. Fun. Insightful.
            </p>
            <p data-reveal className="mt-4 leading-7 text-muted">
              Students enjoy the process because it feels less like an exam and more like discovering themselves. The assessment is easy to take and requires no special preparation.
            </p>
            <ul className="mt-6 space-y-3">
              {whyLove.map((w, i) => (
                <li key={w} data-reveal style={delay(i * 50)} className="flex gap-3">
                  <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="scale" className="hero-gradient rounded-4xl p-8 text-white md:p-10">
            <p className="text-sm font-medium tracking-[0.16em] text-white uppercase">It&apos;s Not an Exam</p>
            <p className="mt-2 text-3xl font-semibold md:text-4xl">It&apos;s self-discovery</p>
            <dl className="mt-10 grid grid-cols-3 gap-3">
              {[
                ['<30', 'Minutes'],
                ['0', 'Prep Needed'],
                ['100%', 'Insightful'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white/15 p-4 text-center ring-1 ring-white/25 backdrop-blur">
                  <dd className="text-3xl font-semibold">{v}</dd>
                  <dt className="mt-1 text-xs text-white">{l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SectionShell tone="surface" badge="Who It's For" badgeIcon="users" title="Who Should Take EvalTest?">
        <FeatureGrid items={audiences} columns={4} />
      </SectionShell>

      <section className="section">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div data-reveal="scale" className="panel relative">
            <Img src="https://uemsventures.com/wp-content/uploads/2026/05/Untitled-design-29.jpg" alt="Mentoring session" className="aspect-[4/3] w-full rounded-3xl object-cover" />
            <span className="absolute top-8 left-8 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium shadow">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" /> Live Mentoring
            </span>
          </div>
          <div>
            <span data-reveal className="pill">
              <UserCheck aria-hidden className="size-4 text-primary" /> Signature Program
            </span>
            <h2 data-reveal className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Personalised One-on-One Mentoring
            </h2>
            <p data-reveal className="mt-4 text-lg leading-8 text-muted">
              Guiding students at every stage — from subject selection to career planning. Our expert mentors provide personalized counselling tailored to each student&apos;s unique strengths.
            </p>
            <div data-reveal className="mt-8">
              <Button label="Book a Session" href={site.evalUrl} size="lg" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Book Your EvalTest Assessment Today"
        text="Take the first step toward a future built around your strengths, passions, and potential. Start Your Career Discovery Journey with UEMS Ventures."
        actions={[
          { label: 'Visit EvalTest.com', href: site.evalUrl, variant: 'white' },
          { label: 'Talk to a counsellor', href: '/contact-us', variant: 'ghost', icon: 'chat' },
        ]}
      />
      <p className="-mt-6 mb-10 flex flex-wrap justify-center gap-x-5 gap-y-2 px-4 text-sm text-muted">
        <span className="inline-flex items-center gap-1.5"><Sparkles aria-hidden className="size-4 text-primary" /> Scientific</span>
        <span className="inline-flex items-center gap-1.5"><Clock aria-hidden className="size-4 text-primary" /> Under 30 Min</span>
        <span className="inline-flex items-center gap-1.5"><Lock aria-hidden className="size-4 text-primary" /> Private &amp; Secure</span>
      </p>

      <QuizDialog quiz={quiz ? quizzes[quiz] : null} onClose={() => setQuiz(null)} />
    </>
  );
}
