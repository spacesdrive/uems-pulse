import type { ContentBlock } from '@/data/posts';
import { RichBlocks } from '@/components/RichBlocks';
import { Seo } from '@/components/Seo';
import { CtaBand } from '@/sections/CtaBand';
import { ExpertConnect } from '@/sections/ExpertConnect';
import { PageHero } from '@/sections/PageHero';

export interface LongformPageData {
  slug: string;
  title: string;
  blocks: ContentBlock[];
  seoTitle?: string;
  description?: string;
  kind: 'legal' | 'landing';
}

type Raw = Omit<LongformPageData, 'kind'>;

const legal = import.meta.glob<Raw>('../data/generated/legal/*.json', { import: 'default' });
const landing = import.meta.glob<Raw>('../data/generated/landing/*.json', { import: 'default' });

/** Legal pages and SEO landing pages share one long-form template; each file is its own chunk. */
export async function loadLongformPage(slug: string): Promise<LongformPageData | null> {
  const legalLoader = legal[`../data/generated/legal/${slug}.json`];
  if (legalLoader) return { ...(await legalLoader()), kind: 'legal' };
  const landingLoader = landing[`../data/generated/landing/${slug}.json`];
  if (landingLoader) return { ...(await landingLoader()), kind: 'landing' };
  return null;
}

export function LegalPage({ page }: { page: LongformPageData }) {
  const title = page.title === page.slug && page.seoTitle ? page.seoTitle.split('|')[0].trim() : page.title;
  const isLegal = page.kind === 'legal';
  return (
    <>
      <Seo
        title={page.seoTitle ?? title}
        description={page.description || `${title} — UEMS Ventures (Unique Education and Migration Services).`}
      />
      <PageHero
        badge={isLegal ? 'Legal' : 'Study Abroad Guide'}
        title={title}
        intro={page.description || undefined}
        actions={
          isLegal
            ? undefined
            : [
                { label: 'Book Free Counselling', href: '/contact-us', variant: 'white' },
                { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
              ]
        }
      />
      <section className="section">
        <div data-reveal className="mx-auto max-w-3xl px-4 sm:px-6">
          <RichBlocks blocks={page.blocks} />
        </div>
      </section>
      {!isLegal && (
        <>
          <ExpertConnect />
          <CtaBand />
        </>
      )}
    </>
  );
}
