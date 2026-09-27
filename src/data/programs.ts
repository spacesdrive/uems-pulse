import type { FeatureItem, StatItem, Testimonial } from './types';

const U = 'https://uemsventures.com/wp-content/uploads';

export const programsHero = {
  badge: 'Admissions Open',
  title: 'Your Future Starts Here',
  intro:
    "Discover the right career. Build a powerful profile. Get into your dream university. At UEMS Ventures, we don't just help students choose courses — we help them discover who they can become.",
  images: [
    { src: `${U}/2026/05/Untitled-design-17.png`, alt: 'Student planning their future' },
    { src: `${U}/2026/05/Untitled-design-18.png`, alt: 'One-on-one career counselling session' },
    { src: `${U}/2026/05/Untitled-design-20.png`, alt: 'Students collaborating' },
  ],
};

export const programStats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Students Guided' },
  { value: 30, suffix: '+', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 94, suffix: '%', label: 'Career Match Rate' },
  { value: 200, suffix: '+', label: 'Partner Universities' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
];

export const programPillars: FeatureItem[] = [
  { icon: 'userCheck', title: 'Personalised One-on-One Mentoring', text: 'Every student gets dedicated attention tailored to their unique strengths, interests, and ambitions.' },
  { icon: 'brain', title: 'Scientific Career Assessments', text: 'Data-driven insights through validated psychometric tools — not guesswork or generic advice.' },
  { icon: 'graduation', title: 'Global University Expertise', text: 'Deep knowledge of admissions processes across 30+ countries and 200+ partner institutions.' },
];

export interface Pathway {
  step: string;
  label: string;
  stage: string;
  title: string;
  text: string;
  features: string[];
  image: string;
  eval?: boolean;
}

export const pathways: Pathway[] = [
  {
    step: '01',
    label: 'Career Discovery',
    stage: 'Grades 8–9',
    title: 'Career Discovery Program',
    text: 'Discover interests early and build the right foundation through interactive counselling and aptitude mapping. The perfect starting point for young minds exploring their future.',
    features: ['Career Clarity Assessments', 'Learning Style Analysis', 'Future Career Exploration', 'Parent Counselling Sessions'],
    image: `${U}/2026/05/Untitled-design-23.jpg`,
    eval: true,
  },
  {
    step: '02',
    label: 'Subject Selection',
    stage: 'Grade 10',
    title: 'Subject Selection Program',
    text: "Choose the right stream with confidence. Science, Commerce, or Humanities — we'll help you decide based on your unique aptitude and interests.",
    features: ['Stream Selection Counselling', 'Career Pathway Mapping', 'Personalised Assessment Reports', 'One-on-One Expert Guidance'],
    image: `${U}/2026/05/Untitled-design-24.jpg`,
    eval: true,
  },
  {
    step: '03',
    label: 'University Planning',
    stage: 'Grades 11–12',
    title: 'University & Career Planning',
    text: 'Build a profile that top universities notice. Strategically prepare for admissions in India and abroad with expert guidance every step of the way.',
    features: ['University Shortlisting', 'Passion Project Guidance', 'Scholarship Guidance', 'Leadership & Profile Building'],
    image: `${U}/2026/05/Untitled-design-25.jpg`,
  },
  {
    step: '04',
    label: 'Degree to Career',
    stage: 'College & Graduates',
    title: 'From Degree to Dream Career',
    text: 'Career direction, higher studies options, and international opportunities for graduates ready to make their next move.',
    features: ['Career Transition Planning', 'Resume & LinkedIn Optimisation', 'Global Education Pathways', 'Industry Networking'],
    image: `${U}/2026/05/Untitled-design-26.jpg`,
  },
  {
    step: '05',
    label: 'Premium Mentorship',
    stage: 'Premium',
    title: 'Build a World-Class Profile',
    text: 'A premium mentorship program designed to help students stand out in competitive admissions and build extraordinary profiles.',
    features: ['Leadership Development', 'Research Opportunities', 'Public Speaking & Comms', 'Certifications & Awards'],
    image: `${U}/2026/05/Untitled-design-27.jpg`,
  },
];

export const whyTrust: FeatureItem[] = [
  { title: 'Personalised Attention, Not Generic Advice', text: 'Every student receives one-on-one mentoring tailored to their unique strengths and aspirations.' },
  { title: 'Science-Backed Career Assessments', text: 'Psychometric and aptitude tools give you clarity grounded in data, not assumptions.' },
  { title: 'Global University Network', text: 'Admissions expertise across 30+ countries and 200+ institutions worldwide.' },
  { title: 'End-to-End Support', text: "From school career clarity all the way to university acceptance — we're with you every step." },
  { title: 'Student-First Philosophy', text: 'Your aspirations lead — we simply illuminate the path and open the right doors.' },
];

export const whyTrustImage = { src: `${U}/2026/05/Untitled-design-28.png`, alt: 'Career mentor with student' };

export const programStories: Testimonial[] = [
  {
    name: 'Aanya Sharma',
    meta: 'MBBS · Edinburgh',
    quote: 'UEMS helped me realise that medicine was genuinely my calling — not just family expectation. The aptitude tests and counselling sessions gave me absolute clarity.',
  },
  {
    name: 'Rohan Mehta',
    meta: 'Finance · Bath',
    quote: 'I had no idea what stream to pick after Grade 10. After two sessions at UEMS I had a full roadmap — Commerce with Economics, leading to Finance at a top UK university.',
  },
  {
    name: 'Priya Nair',
    meta: 'Psychology · KCL',
    quote: 'The profile-building program at UEMS was transformative. My essay, extracurriculars, and interview prep were all guided with precision. I got into my dream program.',
  },
  {
    name: 'Kabir Reddy',
    meta: 'CS · NUS',
    quote: "I was torn between engineering and design. UEMS showed me how I could combine both — and now I'm studying CS with a specialisation in HCI at my dream school.",
  },
  {
    name: 'Sara Ahmed',
    meta: 'Architecture · UCL',
    quote: 'My portfolio and application were guided so carefully. The mentorship at UEMS turned my scattered ideas into a compelling narrative that admissions committees loved.',
  },
];

export const programsCtaImage = 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1400&fit=crop';
