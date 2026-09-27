import type { ContentPageData } from '../types';
import { U, consultActions, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-asia',
  seo: {
    title: 'Study in Asia – Quality, Diversity, Opportunity',
    description:
      'Explore education in Asia with UEMS Ventures: Singapore, Malaysia, South Korea and Japan. End-to-end guidance from shortlisting to settlement.',
  },
  hero: {
    badge: 'Study in Asia',
    title: 'Explore Education in Asia Offering Quality, Diversity, Opportunity',
    highlight: 'Asia',
    intro:
      'Asia’s education landscape is dynamic and evolving — from research-intensive programs in Singapore and Japan to affordable degree options in Malaysia, South Korea, and beyond.',
    chips: ['High-impact universities with cutting-edge research', 'Competitive tuition fees and scholarship opportunities', 'Rich cultural and professional experiences'],
    actions: consultActions,
    image: { src: `${U}/2025/11/1.png`, alt: 'Study in Asia' },
  },
  sections: [
    {
      kind: 'groups',
      badge: 'Singapore',
      badgeIcon: 'flag',
      title: 'Singapore – Asia’s Education & Innovation Capital',
      intro: 'Singapore is one of the top education destinations in Asia, known for its academic excellence, cutting-edge research, and strong global reputation.',
      groups: [
        {
          title: 'Why Choose Singapore?',
          items: [
            'Home to top-ranked universities and private institutions',
            'Industry-aligned programs with practical learning',
            'Strong global recognition of qualifications',
            'Internship and industry exposure opportunities',
            'Safe, modern, and multicultural lifestyle',
          ],
        },
        {
          title: 'Popular Courses in Singapore',
          items: [
            'Business & Management',
            'Finance & Banking',
            'Information Technology & Data Analytics',
            'Engineering & Technology',
            'Hospitality & Tourism',
            'Healthcare & Allied Sciences',
          ],
        },
      ],
    },
    expert,
    {
      kind: 'features',
      badge: 'More Destinations',
      badgeIcon: 'compass',
      title: 'Other Asian Destinations We Support',
      intro: 'Along with Singapore, UEMS Ventures also guides students for education opportunities in:',
      items: [
        { icon: 'wallet', title: 'Malaysia', text: 'Affordable degrees with international recognition.' },
        { icon: 'rocket', title: 'South Korea', text: 'Technology, innovation, and research-driven programs.' },
        { icon: 'idea', title: 'Japan', text: 'Advanced science, engineering, and cultural studies.' },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'How We Support You',
      title: 'How UEMS Ventures Supports You',
      intro: 'We offer end-to-end guidance, ensuring a smooth and transparent study-abroad journey:',
      list: [
        'Career clarity & country shortlisting',
        'Course and institution selection based on your profile',
        'SOP & documentation support',
        'Application submission and follow-ups',
        'Student visa guidance',
        'Pre-departure and settlement support',
      ],
      body: ['Our counselling approach is personalised, ethical, and outcome-focused. (Country options depend on student profile, eligibility, and intake availability.)'],
      image: { src: `${U}/2025/01/Untitled-design-1.webp`, alt: 'Counsellor guiding a student' },
    },
    {
      kind: 'features',
      badge: 'Who Can Apply?',
      badgeIcon: 'users',
      title: 'Who Can Apply?',
      items: [
        { icon: 'school', title: 'Students completing 12th grade' },
        { icon: 'graduation', title: 'Undergraduate students planning Master’s programs' },
        { icon: 'briefcase', title: 'Working professionals seeking career-oriented education abroad' },
      ],
    },
    {
      kind: 'cta',
      title: 'Start Your Asian Education Journey with Confidence',
      text: 'Whether you’re aiming for Singapore’s world-class universities or exploring emerging opportunities across Asia, UEMS Ventures is here to guide you at every step. UEMS Ventures – Guiding Careers Beyond Borders.',
      actions: [
        { label: 'Book a Free Counselling Session', href: '/contact-us', variant: 'white' },
        { label: 'Talk to Our Study Abroad Experts', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
      ],
    },
  ],
};

export default page;
