export const site = {
  name: 'UEMS Ventures',
  legalName: 'Unique Education and Migration Services',
  tagline: 'Chart Your Destiny Abroad',
  description:
    'UEMS Ventures is your one stop solution for all services related to Career Guidance, Study Abroad and Migration.',
  seoDescription:
    'Trust UEMS for expert Study Abroad, IELTS & Migration Consultancy. Study in Australia, USA, UK, Canada & NZ with our guidance. Call us now +91 9833808612',
  phones: ['+91 9833808612', '+91 9321646670'],
  email: 'info@uemsventures.com',
  whatsapp: '919833808612',
  bookingUrl: 'https://www.picktime.com/43b6a5f6-94a8-4835-a4e3-288436e74f02',
  evalUrl: 'https://www.evaltest.com/',
  address: {
    lines: ['416 Marathon Max', 'LBS Marg', 'Mulund West', 'Mumbai – 400080'],
    mapUrl: 'https://www.google.com/maps/search/UEMS+Ventures+Mulund+West+Mumbai/',
  },
  reviews: {
    rating: 4.9,
    count: 63,
    url: 'https://www.google.com/maps/search/UEMS+Ventures+Mulund+West+Mumbai/',
  },
  socials: {
    facebook: 'https://www.facebook.com/UniqueEducationandMigrationMumbai/',
    instagram: 'https://instagram.com/uemsventures',
    linkedin: 'https://www.linkedin.com/company/unique-education-and-migration-services/',
    twitter: 'https://twitter.com/uniqueeducatio2',
  },
  founder: {
    name: 'Shalini Menon',
    linkedin: 'https://in.linkedin.com/in/shalini-menon',
  },
  credit: { label: 'AK Dezigns', href: 'https://akdezigns.com/' },
} as const;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Study Abroad',
    href: '/study-abroad-consultants',
    children: [
      { label: 'Australia', href: '/study-in-australia', description: 'Post-study work & PR pathways' },
      { label: 'Canada', href: '/studyincanada', description: 'Quality, affordable education' },
      { label: 'UK / Ireland', href: '/study-in-uk-ireland', description: 'Shorter, world-renowned degrees' },
      { label: 'USA', href: '/study-in-usa', description: 'Universities & visa guide' },
      { label: 'Asia', href: '/study-in-asia', description: 'Singapore, Malaysia, Korea, Japan' },
      { label: 'New Zealand', href: '/study-in-new-zealand', description: 'Your gateway to global success' },
      { label: 'UAE', href: '/study-in-uae', description: 'Dubai branch campuses' },
      { label: 'Europe', href: '/study-in-europe', description: 'The "Big 5" destinations' },
      { label: 'Student Needs', href: '/student-needs', description: 'Accommodation, loans & more' },
    ],
  },
  {
    label: 'Migration',
    href: '/migration',
    children: [{ label: 'Australia', href: '/australia-migration', description: 'Skilled & business visas' }],
  },
  {
    label: 'Career Guidance',
    href: '/career-guidance',
    children: [
      { label: 'Programs', href: '/programs', description: 'Mentoring from Class 8 to graduation' },
      { label: 'Career Clarity Tests', href: '/career-clarity-tests', description: 'Powered by EvalTest' },
      { label: 'Career Talk', href: '/career-talk', description: 'Seminars, counselling & cells' },
    ],
  },
  { label: 'Test Prep', href: '/test-preparation-for-international-students' },
  {
    label: 'Blogs',
    href: '/blogs',
    children: [{ label: 'News & Events', href: '/news-and-events', description: 'Seminars, webinars & updates' }],
  },
  { label: 'Contact Us', href: '/contact-us' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Menu',
    links: [
      { label: 'About us', href: '/about-us' },
      { label: 'Terms & conditions', href: '/terms-conditions' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Franchise & Channel Partners', href: '/franchise-channel-partners' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Career Guidance', href: '/career-guidance' },
      { label: 'Study Abroad', href: '/study-abroad' },
      { label: 'IELTS', href: '/ielts' },
      { label: 'Migration', href: '/migration' },
      { label: 'Student Needs', href: '/student-needs' },
    ],
  },
];

/** Legacy URLs used inside original content, mapped to their canonical routes. */
export const redirects: Record<string, string> = {
  studyinaustralia: '/study-in-australia',
  'study-abroad-australia': '/study-in-australia',
  australia: '/study-in-australia',
  'study-abroad-canada': '/studyincanada',
  canada: '/studyincanada',
  'studyinuk-ireland': '/study-in-uk-ireland',
  'uk-ireland': '/study-in-uk-ireland',
  usa: '/study-in-usa',
  'study-abroad-usa': '/study-in-usa',
  inquiry: '/contact-us',
};
