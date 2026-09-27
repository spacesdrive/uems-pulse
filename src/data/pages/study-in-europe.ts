import type { ContentPageData } from '../types';
import { U, consultActions, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-europe',
  seo: {
    title: 'Why Europe? Elevate Your Future Beyond Borders',
    description:
      'Study in Europe with UEMS Ventures: Germany, France, Ireland, Netherlands, Finland & Sweden. Admission checklist, stay-back options and featured universities.',
  },
  hero: {
    badge: 'Study in Europe',
    title: 'Why Europe? Elevate Your Future Beyond Borders',
    highlight: 'Europe?',
    intro: [
      'Study in Europe: The Global Powerhouse for Your Career.',
      'Europe isn’t just a destination; it’s a strategic career move. Combining centuries of prestige with modern innovation, the European Union offers an unmatched ecosystem for international students.',
    ],
    actions: consultActions,
    image: { src: `${U}/2024/01/Admission.jpg`, alt: 'Admission to European universities' },
  },
  sections: [
    {
      kind: 'features',
      badge: 'Why Europe',
      badgeIcon: 'flag',
      title: 'An unmatched ecosystem for international students',
      items: [
        { icon: 'plane', title: 'The Schengen Advantage', text: 'One visa, 27 countries. Experience unrestricted travel and networking across the world’s largest economic zone.' },
        {
          icon: 'wallet',
          title: 'World-Class ROI',
          text: 'Access top-tier education at a fraction of the cost. From Tuition-Free Public Universities in Germany to extensive housing subsidies in France, Europe makes premium education affordable.',
        },
        {
          icon: 'building',
          title: 'A Global Tech & Business Hub',
          text: 'Home to the headquarters of Google, BMW, Airbus, and L’Oréal. Benefit from a curriculum designed in collaboration with industry leaders.',
        },
        {
          icon: 'shield',
          title: 'Post-Graduation Security',
          text: 'With stay-back options ranging from 18 to 24 months, Europe provides a stable bridge from your degree to a high-paying global career.',
        },
        { icon: 'briefcase', title: 'Earn While You Learn', text: 'Flexible work rights allow you to cover your living expenses while gaining local professional experience.' },
      ],
    },
    {
      kind: 'table',
      tone: 'surface',
      badge: 'Admission Checklist',
      badgeIcon: 'clipboard',
      title: 'Admission Checklist: Fast-Track Your Journey',
      intro: 'We’ve simplified the complexities. Here is what you need to qualify for the top European institutions:',
      head: ['Feature', 'Requirement'],
      rows: [
        ['Academics', 'Minimum 55% – 60% (Public universities prefer 70%+).'],
        ['English Proficiency', 'IELTS 6.0 – 6.5 or Medium of Instruction (MOI) waiver.'],
        ['Study Gaps', 'Accepted when supported by relevant work experience.'],
        ['Intakes', 'Winter (Sept/Oct) & Spring (Jan/Feb).'],
      ],
    },
    expert,
    {
      kind: 'features',
      badge: 'The "Big 5" Destinations',
      badgeIcon: 'compass',
      title: 'The "Big 5" Destinations',
      intro: 'Choose the country that matches your ambition:',
      items: [
        { icon: 'building', title: 'Germany: The Engineering Capital', text: 'Low tuition, 18-month stay-back, and the strongest job market in the EU.' },
        { icon: 'sparkles', title: 'France: The Hub of Luxury & Business', text: 'Home to elite Grande Écoles and generous student housing support (CAF).' },
        { icon: 'rocket', title: 'Ireland: The Silicon Valley of Europe', text: 'Exceptional opportunities in IT, Pharma, and Finance with a 2-year post-study work visa.' },
        { icon: 'route', title: 'Netherlands: The Logistics Leader', text: '95% English-speaking population and a world-class research environment.' },
        { icon: 'idea', title: 'Finland & Sweden: The Innovation Frontiers', text: 'Pioneers in Sustainability, Design, and Technology.' },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'Your European Success Partner',
      title: 'UEMS Ventures: Your European Success Partner',
      intro: 'Applying to Europe is about more than just a form; it’s about a perfect strategy. We provide:',
      list: [
        'Precision Country Selection: We match your profile to the country with the best job prospects for your field.',
        'Scholarship Maximization: We help you secure merit-based waivers from 20% to 100%.',
        'Visa Mastery: Specialized support for Blocked Accounts and complex documentation.',
        'Family Orientation: Expert guidance on dependent visas and spouse work rights.',
      ],
      image: { src: `${U}/2024/01/download-17-1.jpeg`, alt: 'Students in Europe' },
    },
    {
      kind: 'table',
      badge: 'Featured Universities',
      badgeIcon: 'graduation',
      title: 'Where to study in Europe',
      head: ['Country', 'Why Study Here?', 'Featured Universities (KC Tie-ups)'],
      rows: [
        ['Germany', 'Tuition-free public education & 18-month stay back.', 'Constructor University (Bremen)\nSRH University (Berlin, Heidelberg)\nInternational School of Management (ISM)\nEU Business School (Munich)'],
        ['France', 'Hub for Luxury, Fashion & Business. Housing subsidy (CAF) available.', 'SKEMA Business School\nNEOMA Business School\nINSEEC Business School\nECE Engineering School (Paris)'],
        ['Ireland', 'The “Silicon Valley of Europe” with a 2-year post-study work visa.', 'Trinity College Dublin\nUniversity College Dublin (UCD)\nUniversity of Limerick\nDublin City University (DCU)'],
        ['Netherlands', '95% English-speaking & top-ranked research universities.', 'University of Twente\nTilburg University\nWittenborg University of Applied Sciences'],
        ['Sweden', 'Innovation & Sustainability leader with 1-year stay back.', 'Linnaeus University\nHalmstad University\nUniversity of Skövde\nDalarna University'],
        ['Finland', 'World’s happiest country with high-tech education ecosystem.', 'LUT University\nMetropolia University of Applied Sciences\nSatakunta University of Applied Sciences (SAMK)'],
        ['Poland', 'Extremely affordable living & tuition fees.', 'Warsaw University of Business'],
      ],
    },
    {
      kind: 'cta',
      title: 'Ready to Launch Your Global Career?',
      text: 'Direct Line: +91 9833808612 | +91 9321646670 · Email: info@uemsventures.com',
      actions: [
        { label: 'Contact us', href: '/contact-us', variant: 'white' },
        { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
      ],
    },
  ],
};

export default page;
