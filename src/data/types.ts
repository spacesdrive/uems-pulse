import type { IconName } from '@/lib/icons';

export interface Action {
  label: string;
  href: string;
  variant?: 'primary' | 'white' | 'outline' | 'ghost';
  icon?: IconName;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface FeatureItem {
  title: string;
  text?: string;
  icon?: IconName;
  href?: string;
  list?: string[];
}

export interface CardItem {
  title: string;
  image: string;
  text?: string;
  href?: string;
  meta?: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note?: string;
}

export interface Person {
  name: string;
  role?: string;
  image?: string;
  phone?: string;
  email?: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  meta?: string;
  image?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

interface SectionBase {
  id?: string;
  badge?: string;
  badgeIcon?: IconName;
  title?: string;
  intro?: string;
  /** Tints the section background. */
  tone?: 'white' | 'surface';
}

export type Section =
  | (SectionBase & {
      kind: 'split';
      body?: string[];
      list?: string[];
      listTitle?: string;
      image: ImageRef;
      reverse?: boolean;
      actions?: Action[];
    })
  | (SectionBase & { kind: 'features'; items: FeatureItem[]; columns?: 2 | 3 | 4; style?: 'icon' | 'numbered' })
  | (SectionBase & { kind: 'checklist'; items: string[]; note?: string; image?: ImageRef })
  | (SectionBase & { kind: 'cards'; items: CardItem[]; aspect?: 'portrait' | 'landscape' })
  | (SectionBase & { kind: 'table'; head: string[]; rows: string[][]; note?: string })
  | (SectionBase & { kind: 'steps'; items: FeatureItem[] })
  | (SectionBase & { kind: 'text'; body: string[]; actions?: Action[] })
  | (SectionBase & { kind: 'groups'; groups: { title: string; items: string[]; text?: string }[] })
  | (SectionBase & { kind: 'stats'; items: StatItem[] })
  | (SectionBase & { kind: 'faq'; items: FaqItem[] })
  | (SectionBase & { kind: 'team'; people: Person[]; variant?: 'portrait' | 'compact' })
  | (SectionBase & { kind: 'logos'; images: ImageRef[] })
  | (SectionBase & { kind: 'testimonials'; items: Testimonial[] })
  | (SectionBase & { kind: 'pricing'; items: { title: string; price: string; image?: string; features?: string[] }[]; action: Action })
  | (SectionBase & { kind: 'expert' })
  | (SectionBase & { kind: 'contactForm'; formTitle?: string })
  | (SectionBase & { kind: 'cta'; text?: string; actions: Action[] });

export interface PageHero {
  badge?: string;
  title: string;
  /** Portion of the title rendered with the accent treatment. */
  highlight?: string;
  intro?: string | string[];
  actions?: Action[];
  image?: ImageRef;
  /** Small chips rendered under the intro. */
  chips?: string[];
}

export interface ContentPageData {
  slug: string;
  seo: { title: string; description: string };
  hero: PageHero;
  sections: Section[];
}
