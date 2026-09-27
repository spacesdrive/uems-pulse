import type { CardItem, FeatureItem, ImageRef, StatItem } from './types';

const U = 'https://uemsventures.com/wp-content/uploads';

export const hero = {
  badge: 'Study Abroad & Migration',
  title: 'We Help You Chart Your Destiny Abroad',
  highlight: 'Destiny Abroad',
  intro:
    'UEMS Ventures is your expert partner for studying abroad and seamless migration. From university selection to visa success — we guide every step of your journey to a brighter future.',
  image: { src: '/images/home-hero-1280.webp', alt: 'UEMS Ventures – study abroad and migration consultancy' },
  trustedAvatars: [`${U}/2021/02/gayatri.jpg`, `${U}/2021/02/nikhil.jpg`, `${U}/2021/02/martin.jpg`, `${U}/2021/02/angel-2.jpg`, `${U}/2021/02/satyakant-2.jpg`],
  destinations: ['US', 'UK', 'CA', 'AU', 'DE'],
};

export const whyChoose = {
  badge: 'Study Abroad & Immigration Experts',
  title: 'Why Choose UEMS?',
  intro:
    'With over 15 years of expertise, UEMS Ventures is your trusted partner for study abroad and immigration services. We provide comprehensive guidance to chart your destiny abroad.',
  image: { src: `${U}/2026/06/Gemini_Generated_Image_i36gpvi36gpvi36g-optimized.webp`, alt: 'Global students' } satisfies ImageRef,
  highlights: [
    { value: '15+', label: 'Countries', note: 'Global Network' },
    { value: '5,200+', label: 'Students', note: 'Trusted by' },
  ],
  services: [
    {
      title: 'EVAL - Path to Career Clarity',
      text: 'Explore a logical way to discover your ideal career path. Our proprietary assessment analyzes your aptitude, interests, and personality to recommend the best courses and countries for your future.',
      image: `${U}/2026/06/Gemini_Generated_Image_y5kl3ty5kl3ty5kl-optimized-clean.jpg`,
      href: 'https://www.evaltest.com/',
      cta: 'Find My Clarity',
    },
    {
      title: 'Study Abroad',
      text: 'Explore the world of global educational opportunities. We guide you through university selection, applications, scholarships, and the entire admission process for top destinations worldwide.',
      image: `${U}/2026/06/Gemini_Generated_Image_fk30ddfk30ddfk30-clean.jpg`,
      href: '/study-abroad',
      cta: 'More Info',
    },
    {
      title: 'Migration',
      text: 'Chart your path to settling abroad with confidence. From skilled worker programs to family sponsorship, our licensed consultants navigate the immigration process with you every step.',
      image: `${U}/2026/06/Gemini_Generated_Image_xdhhsqxdhhsqxdhh-clean-optimized.webp`,
      href: '/migration',
      cta: 'More Info',
    },
  ],
};

export const trustMetrics: StatItem[] = [
  { value: 1000, suffix: '+', label: 'Success Cases Completed', note: '+12% Quarterly Growth' },
  { value: 280, label: 'Partner Institutions Worldwide', note: 'Across 40 Countries' },
  { value: 15, suffix: ' yrs', label: 'Industry Experience', note: 'Est. 2009 · Proven Track Record' },
  { value: 98, suffix: '%', label: 'Client Success Rate', note: '#1 Rated · Industry Leading' },
];

export interface Destination {
  id: string;
  code: string;
  name: string;
  link: string;
  ctaText: string;
  img: string;
  desc: string;
  benefits: string[];
  courses: string;
  tuition: string;
}

export const destinations: Destination[] = [
  {
    id: 'canada',
    code: 'CA',
    name: 'Canada',
    link: '/studyincanada',
    ctaText: 'Study in Canada',
    img: `${U}/2026/06/Gemini_Generated_Image_ixrkmixrkmixrkmi-clean-optimized.webp`,
    desc: 'Affordable education with strong immigration pathways and world-class research opportunities.',
    benefits: ['Express Entry Opportunities', 'Top-Ranked Universities', 'Post-Study Work Options (Up to 3 Yrs)'],
    courses: 'Business, IT, Engineering, Healthcare',
    tuition: 'CAD 15k – 35k / yr',
  },
  {
    id: 'usa',
    code: 'US',
    name: 'USA',
    link: '/study-in-usa',
    ctaText: 'Study in USA',
    img: `${U}/2026/06/Gemini_Generated_Image_igux8yigux8yigux-clean-optimized.webp`,
    desc: 'Home to the Ivy League and Silicon Valley—launch your career at the highest level.',
    benefits: ['OPT & STEM Visa Extensions', 'Cutting-Edge Research Facilities', 'Global Networking Hub'],
    courses: 'Computer Science, Business, Medicine',
    tuition: 'USD 20k – 50k / yr',
  },
  {
    id: 'uk',
    code: 'GB',
    name: 'United Kingdom',
    link: '/study-in-uk-ireland',
    ctaText: 'Study in UK & Ireland',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&fit=crop',
    desc: "Experience rich academic heritage with accelerated 1-year master's programs.",
    benefits: ['Graduate Route Visa (2-3 Years)', 'World-Renowned Degrees', 'Access to European Job Market'],
    courses: 'Finance, Law, Data Science, Design',
    tuition: '£12k – 25k / yr',
  },
  {
    id: 'ireland',
    code: 'IE',
    name: 'Ireland',
    link: '/study-in-uk-ireland',
    ctaText: 'Study in UK & Ireland',
    img: `${U}/2020/10/396-x-263-02.jpg`,
    desc: 'The tech hub of Europe, offering a seamless path to residency.',
    benefits: ['2-Year Post-Study Work Visa', 'European Tech Hub (Google, Apple)', 'Pathway to Permanent Residency'],
    courses: 'Pharma, Tech, Business, Finance',
    tuition: '€10k – 25k / yr',
  },
  {
    id: 'germany',
    code: 'DE',
    name: 'Germany',
    link: '/study-in-europe',
    ctaText: 'Study in Europe',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&fit=crop',
    desc: 'World-class engineering and tuition-free public universities.',
    benefits: ['Tuition-Free Public Universities', '18-Month Job Seeker Visa', 'Strong Engineering & Tech Sector'],
    courses: 'Engineering, Automotive, Medicine',
    tuition: 'Free – €500 / semester',
  },
  {
    id: 'france',
    code: 'FR',
    name: 'France',
    link: '/study-in-europe',
    ctaText: 'Study in Europe',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&fit=crop',
    desc: 'Affordable, culturally rich education with strong EU connectivity.',
    benefits: ['APS Visa (1 Year Post-Study)', 'Affordable Tuition Fees', 'Hub for Luxury & Business'],
    courses: 'Luxury Brand Mgmt, Art, Business',
    tuition: '€3k – 15k / yr',
  },
  {
    id: 'italy',
    code: 'IT',
    name: 'Italy',
    link: '/contact-us',
    ctaText: 'Talk to an Advisor',
    img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1400&fit=crop',
    desc: 'Rich history, affordable living, and world-renowned design schools.',
    benefits: ['Affordable Cost of Living', 'Post-Study Work Options', 'Excellence in Design & Architecture'],
    courses: 'Design, Architecture, Arts, Culinary',
    tuition: '€1k – 10k / yr',
  },
  {
    id: 'uae',
    code: 'AE',
    name: 'UAE',
    link: '/study-in-uae',
    ctaText: 'Study in UAE',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&fit=crop',
    desc: 'A booming, tax-free metropolis with golden visa opportunities.',
    benefits: ['Golden Visa Opportunities', 'Tax-Free Income Potential', 'Booming Economy & Internships'],
    courses: 'Business, Oil & Gas, Aviation',
    tuition: 'AED 30k – 80k / yr',
  },
  {
    id: 'australia',
    code: 'AU',
    name: 'Australia',
    link: '/study-in-australia',
    ctaText: 'Study in Australia',
    img: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1400&fit=crop',
    desc: 'High quality of life with generous post-study work rights up to 6 years.',
    benefits: ['Up to 6 Years Post-Study Visa', 'Regional PR Pathways', 'Top QS Ranked Institutions'],
    courses: 'Nursing, Engineering, Accounting, IT',
    tuition: 'AUD 20k – 45k / yr',
  },
  {
    id: 'newzealand',
    code: 'NZ',
    name: 'New Zealand',
    link: '/study-in-new-zealand',
    ctaText: 'Study in New Zealand',
    img: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1400&fit=crop',
    desc: 'Unmatched work-life balance with straightforward PR pathways.',
    benefits: ['Post-Study Work Visa (1-3 Yrs)', 'Straightforward PR Process', 'Unmatched Work-Life Balance'],
    courses: 'Agriculture, IT, Nursing',
    tuition: 'NZD 22k – 35k / yr',
  },
];

export const ourServices: CardItem[] = [
  { title: 'Study in Australia & Migrate Easily', image: `${U}/2020/10/660-_-740-01-2.jpg`, href: '/study-in-australia' },
  { title: 'Study in Canada & Migrate Easily', image: `${U}/2020/10/660-_-740-02-2.jpg`, href: '/studyincanada' },
  { title: 'Study in UK / Ireland', image: `${U}/2020/10/660-_-740-03-2.jpg`, href: '/study-in-uk-ireland' },
  { title: 'Study in USA', image: `${U}/2020/10/660-_-740-04-2.jpg`, href: '/study-in-usa' },
  { title: 'IELTS & PTE', image: `${U}/2020/10/660-_-740-07-1.jpg`, href: '/ielts' },
  { title: 'EVAL - Career Clarity Test', image: `${U}/2020/10/660-x-740.jpg`, href: '/career-guidance' },
];

export const strengthenProfile: (FeatureItem & { image: string; cta: string; href: string })[] = [
  {
    title: 'IELTS & PTE',
    text: 'Expert-led training with proven strategies to hit your target band score and secure your admission.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&fit=crop',
    cta: 'Start Preparing',
    href: '/ielts',
  },
  {
    title: 'EVAL Career Clarity',
    text: 'Scientific aptitude assessment mapping your strengths to the ideal courses and global career paths.',
    image: `${U}/2020/10/660-x-740.jpg`,
    cta: 'Find My Clarity',
    href: '/career-guidance',
  },
];

export const founder = {
  name: 'Shalini Menon',
  role: 'Founder & CEO, UEMS Ventures',
  image: `${U}/2026/06/Untitled-design-30.jpg`,
  heading: 'From The Desk Of The Founder',
  message: [
    "I'm Shalini Menon, Founder of UEMS Ventures. With over two decades of experience in corporate consulting and business transformation, I envisioned a platform that bridges the gap between ambition and achievement.",
    'At UEMS Ventures, we are committed to empowering businesses and individuals through strategic consulting, professional training, and comprehensive development programs. Our mission is to unlock potential and drive meaningful growth for every client we serve.',
    'We believe that the right guidance at the right time can transform trajectories. That belief is the cornerstone of everything we do — from shaping leadership capabilities to building resilient organizations.',
  ],
  stats: [
    { value: '20+', label: 'Years Exp.' },
    { value: '500+', label: 'Clients' },
  ],
};

export const teamPhotos: ImageRef[] = [
  { src: `${U}/2020/09/IMG_5807.jpeg`, alt: 'UEMS Ventures team photo' },
  { src: `${U}/2020/09/IMG_5718.jpeg`, alt: 'UEMS Ventures team at the office' },
  { src: `${U}/2020/09/IMG_5958.jpeg`, alt: 'UEMS Ventures team event' },
];

export const affiliations: ImageRef[] = [
  { src: `${U}/2021/06/ahm-OSHC.png`, alt: 'ahm OSHC' },
  { src: `${U}/2021/06/Allianz-Global-Assistance-Peoplecare-Health.png`, alt: 'Allianz Global Assistance' },
  { src: `${U}/2021/06/CBHS-International-Health-oosb28uupgpkeh6m4z7i6lhgjrt8grzfsff1gmtqis.png`, alt: 'CBHS International Health' },
  { src: `${U}/2021/06/COHORT-Go-oosb2cm7gsupox15j0u0gkjaxbapbked4y0zdqo5tw.png`, alt: 'Cohort Go' },
  { src: `${U}/2021/06/Condat-Solutions-oosb2rnmi5fauofb37c1kgqofh8kqq22j0gr261v2c.png`, alt: 'Condat Solutions' },
  { src: `${U}/2021/06/HDFC-Credula-oosb2vez9hkg549uh8yjufsit0q1ligzvj2oz9wadg.png`, alt: 'HDFC Credila' },
  { src: `${U}/2021/06/ielts-oosb2xann5n0sc7469rszfbfzsgs0wogjsdnxtti10.png`, alt: 'IELTS' },
  { src: `${U}/2021/06/Medibank-Private.png`, alt: 'Medibank Private' },
];

export const linkedinStats = [
  { value: '500+', label: 'Followers' },
  { value: '15+', label: 'Years' },
  { value: '5+', label: 'Countries' },
];
