import type { CSSProperties } from 'react';
import { CircleCheck } from 'lucide-react';
import type { Section } from '@/data/types';
import { Accordion } from '@/components/Accordion';
import { ButtonRow } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { Img } from '@/components/Img';
import { CardGrid } from './CardGrid';
import { CtaBand } from './CtaBand';
import { DataTable } from './DataTable';
import { ExpertConnect } from './ExpertConnect';
import { FeatureGrid } from './FeatureGrid';
import { LogoWall } from './LogoWall';
import { PricingGrid } from './PricingGrid';
import { SectionShell } from './SectionShell';
import { SplitSection } from './SplitSection';
import { StatsGrid } from './StatsGrid';
import { Steps } from './Steps';
import { TeamGrid } from './TeamGrid';
import { Testimonials } from './Testimonials';

function Checklist({ items, image }: { items: string[]; image?: { src: string; alt: string } }) {
  const list = (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item}
          data-reveal
          style={{ '--reveal-delay': `${(i % 6) * 50}ms` } as CSSProperties}
          className="card flex gap-3 p-4 transition-colors hover:border-primary/25"
        >
          <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
  if (!image) return list;
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
      {list}
      <div data-reveal="scale" className="panel">
        <Img src={image.src} alt={image.alt} className="aspect-[4/3] w-full rounded-3xl object-cover" />
      </div>
    </div>
  );
}

function Groups({ groups }: { groups: { title: string; items: string[]; text?: string }[] }) {
  return (
    <div className={`grid gap-5 ${groups.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
      {groups.map((g, i) => (
        <div key={g.title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` } as CSSProperties} className="card card-hover p-6 md:p-7">
          <h3 className="text-lg font-semibold">{g.title}</h3>
          {g.text && <p className="mt-2 leading-7 text-muted">{g.text}</p>}
          {g.items.length > 0 && (
            <ul className="mt-4 space-y-2.5">
              {g.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CircleCheck aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function SectionRenderer({ section }: { section: Section }) {
  const { id, badge, badgeIcon, title, intro, tone } = section;
  const shell = { id, badge, badgeIcon, title, intro, tone };

  switch (section.kind) {
    case 'split':
      return <SplitSection {...section} />;
    case 'expert':
      return <ExpertConnect id={id} tone={tone} title={title} />;
    case 'cta':
      return <CtaBand title={title} text={section.text} actions={section.actions} />;
    case 'features':
      return (
        <SectionShell {...shell}>
          <FeatureGrid items={section.items} columns={section.columns} style={section.style} />
        </SectionShell>
      );
    case 'checklist':
      return (
        <SectionShell {...shell}>
          <Checklist items={section.items} image={section.image} />
          {section.note && <p className="mt-6 text-center text-muted">{section.note}</p>}
        </SectionShell>
      );
    case 'cards':
      return (
        <SectionShell {...shell} width="wide">
          <CardGrid items={section.items} aspect={section.aspect} />
        </SectionShell>
      );
    case 'table':
      return (
        <SectionShell {...shell}>
          <DataTable head={section.head} rows={section.rows} note={section.note} />
        </SectionShell>
      );
    case 'steps':
      return (
        <SectionShell {...shell}>
          <Steps items={section.items} />
        </SectionShell>
      );
    case 'text':
      return (
        <SectionShell {...shell} width="narrow">
          <div data-reveal className="card space-y-4 p-6 text-lg leading-8 text-ink/80 md:p-10">
            {section.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ButtonRow actions={section.actions} className="pt-4" />
          </div>
        </SectionShell>
      );
    case 'groups':
      return (
        <SectionShell {...shell}>
          <Groups groups={section.groups} />
        </SectionShell>
      );
    case 'stats':
      return (
        <SectionShell {...shell}>
          <StatsGrid items={section.items} />
        </SectionShell>
      );
    case 'faq':
      return (
        <SectionShell {...shell} width="narrow">
          <Accordion items={section.items} />
        </SectionShell>
      );
    case 'team':
      return (
        <SectionShell {...shell} width="wide">
          <TeamGrid people={section.people} variant={section.variant} />
        </SectionShell>
      );
    case 'logos':
      return (
        <SectionShell {...shell} width="wide">
          <LogoWall images={section.images} />
        </SectionShell>
      );
    case 'testimonials':
      return (
        <SectionShell {...shell} width="wide">
          <Testimonials items={section.items} />
        </SectionShell>
      );
    case 'pricing':
      return (
        <SectionShell {...shell} width="wide">
          <PricingGrid items={section.items} action={section.action} />
        </SectionShell>
      );
    case 'contactForm':
      return (
        <SectionShell {...shell} width="narrow">
          <div data-reveal="scale">
            <ContactForm title={section.formTitle} />
          </div>
        </SectionShell>
      );
  }
}
