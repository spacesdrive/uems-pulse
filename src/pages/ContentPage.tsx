import type { ContentPageData } from '@/data/types';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/sections/PageHero';
import { SectionRenderer } from '@/sections/SectionRenderer';

/** Generic data-driven page: gradient hero followed by typed content sections. */
export function ContentPage({ page }: { page: ContentPageData }) {
  return (
    <>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHero {...page.hero} />
      {page.sections.map((section, i) => (
        <SectionRenderer key={`${section.kind}-${i}`} section={section} />
      ))}
    </>
  );
}
