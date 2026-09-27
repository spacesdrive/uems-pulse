import { ourServices } from '@/data/home';
import { studentTestimonials } from '@/data/testimonials';
import { Seo } from '@/components/Seo';
import { CardGrid } from '@/sections/CardGrid';
import { CtaBand } from '@/sections/CtaBand';
import { ExpertConnect } from '@/sections/ExpertConnect';
import { SectionShell } from '@/sections/SectionShell';
import { Testimonials } from '@/sections/Testimonials';
import { DestinationExplorer } from '@/sections/home/DestinationExplorer';
import { HomeHero } from '@/sections/home/HomeHero';
import {
  FollowUs,
  FounderMessage,
  GoogleReviews,
  LatestBlogs,
  StrengthenProfile,
  TeamAndContact,
  TrustMetrics,
  WhyChoose,
} from '@/sections/home/HomeSections';

export function Component() {
  return (
    <>
      <Seo title="Expert Study Abroad & Migration Consultancy | UEMS Ventures" />
      <HomeHero />
      <WhyChoose />
      <ExpertConnect />
      <div className="pt-16 md:pt-24">
        <TrustMetrics />
      </div>
      <DestinationExplorer />
      <SectionShell tone="surface" badge="Our Services" badgeIcon="briefcase" title="Study, migrate and prepare with UEMS" width="wide">
        <CardGrid items={ourServices} aspect="landscape" />
      </SectionShell>
      <CtaBand />
      <StrengthenProfile />
      <FounderMessage />
      <LatestBlogs />
      <SectionShell id="testimonials" tone="surface" badge="Student Testimonials" badgeIcon="star" title="Loved by Students, Trusted by Parents" intro="Real stories from students and families who charted their destiny abroad with UEMS." width="wide">
        <GoogleReviews />
        <Testimonials items={studentTestimonials} />
      </SectionShell>
      <TeamAndContact />
      <FollowUs />
    </>
  );
}
