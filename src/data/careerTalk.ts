import type { FaqItem, FeatureItem, StatItem } from './types';

export const talkHero = {
  badge: 'Career Guidance Programs',
  title: 'Inspiring Students. Creating Career Awareness.',
  intro: [
    'At UEMS Ventures, our Career Talks and Guidance Programs are designed to help students make informed academic and career decisions through expert-led sessions, interactive workshops, and real-world industry insights.',
    'We collaborate with schools, colleges, educational institutions, and organizations to conduct impactful career awareness sessions that empower students with clarity, confidence, and direction.',
  ],
};

export const talkStats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Sessions' },
  { value: 50, suffix: '+', label: 'Schools' },
  { value: 25, suffix: '+', label: 'Mentors' },
];

export const talkServices = [
  {
    id: 'service-1',
    step: '01',
    title: 'Career Seminars & Talks',
    text: 'Expert-led seminars introducing students to emerging careers, future industries, and smart career planning strategies.',
    tags: ['Future Careers', 'Study Abroad', 'AI & Tech', 'Scholarships'],
    meta: ['+50 Students/session', '90 min'],
  },
  {
    id: 'service-2',
    step: '02',
    title: '1-on-1 Career Counselling',
    text: "Personalized support based on a student's interests, strengths, goals, and aspirations. Every journey is unique.",
    tags: ['Psychometric', 'Career Roadmap', 'Study Abroad'],
    meta: ['Online & Offline', '60 min'],
  },
  {
    id: 'service-3',
    step: '03',
    title: 'Counselling Cell Setup',
    text: 'Establish a dedicated Career Counselling Cell in your institution with ongoing support and future planning assistance.',
    tags: ['Framework', 'Calendar', 'Reports'],
    meta: ['Schools & Colleges', 'Full Setup'],
  },
];

export const marqueeItems = ['Career Seminars', '1-on-1 Counselling', 'Counselling Cell Setup', 'Study Abroad', 'Psychometric Tests'];

export const seminarTopics: FaqItem[] = [
  { q: 'Future careers & industry trends', a: 'Discover emerging fields like green energy, space tech, biotech, and the gig economy.' },
  { q: 'Subject & stream selection guidance', a: 'Choose the right academic path after Class 10 based on aptitude and interest.' },
  { q: 'Study abroad opportunities', a: 'Global education pathways, visas, scholarships, and international university profiles.' },
  { q: 'Healthcare & allied health careers', a: 'Medicine, nursing, physiotherapy, pharmacy, and emerging health sciences.' },
  { q: 'Liberal arts & interdisciplinary careers', a: 'Creative careers, design, humanities, and cross-disciplinary opportunities.' },
  { q: 'AI, technology & future skills', a: 'Coding, data science, AI/ML, cybersecurity, and digital transformation careers.' },
  { q: 'Profile building for top universities', a: 'Extracurriculars, internships, essays, and portfolio development strategies.' },
  { q: 'Scholarships & global education pathways', a: 'Merit-based and need-based scholarships across 30+ countries.' },
  { q: 'Entrepreneurship & leadership development', a: 'Startup mindset, innovation frameworks, and leadership development.' },
];

export const idealFor = ['Schools', 'Junior Colleges', 'Degree Colleges', 'Coaching Institutes', 'Parent Communities', 'Educational Organizations'];

export const seminarIncludes: FeatureItem[] = [
  { icon: 'mic', title: 'Expert Speakers', text: 'Industry professionals' },
  { icon: 'trend', title: 'Industry Trends', text: 'Future job market data' },
  { icon: 'plane', title: 'Global Paths', text: 'International opportunities' },
  { icon: 'chat', title: 'Live Q&A', text: 'Interactive doubt solving' },
  { icon: 'book', title: 'Resource Kit', text: 'Post-session materials' },
  { icon: 'award', title: 'Certificates', text: 'Participation certificates' },
];

export const counsellingDeliverables: FeatureItem[] = [
  { icon: 'compass', title: 'Career clarity sessions', text: 'Find direction through guided self-discovery' },
  { icon: 'brain', title: 'Psychometric assessment interpretation', text: 'Scientific aptitude & personality analysis' },
  { icon: 'bookCheck', title: 'Subject & stream selection guidance', text: 'Data-driven academic recommendations' },
  { icon: 'graduation', title: 'University & course planning', text: 'Strategic admission planning' },
  { icon: 'plane', title: 'Study abroad counselling', text: 'International education navigation' },
  { icon: 'route', title: 'Personalized career roadmap', text: 'Step-by-step career plan' },
  { icon: 'users', title: 'Parent counselling support', text: 'Helping parents support career decisions' },
];

export const outcomes = [
  { label: 'Career Clarity', value: 94 },
  { label: 'Decision Confidence', value: 89 },
  { label: 'Goal Alignment', value: 87 },
];

export const cellSupport = [
  'Career guidance framework setup',
  'Student counselling systems',
  'Career awareness calendars',
  'Parent engagement initiatives',
  'Assessment & reporting systems',
  'Career resource support',
  'University & admissions guidance updates',
  'Industry exposure programs',
];

export const cellBenefits = [
  'Strengthen student support systems',
  'Improve career awareness among students',
  'Offer structured counselling services',
  'Enhance institutional value for parents & students',
  'Create future-ready academic environments',
];

export const cellArchitecture: FeatureItem[] = [
  { icon: 'building', title: 'Framework', text: 'Structured systems' },
  { icon: 'calendar', title: 'Calendar', text: 'Year-round events' },
  { icon: 'chart', title: 'Reports', text: 'Progress tracking' },
  { icon: 'briefcase', title: 'Industry', text: 'Exposure programs' },
  { icon: 'users', title: 'Parents', text: 'Engagement plans' },
  { icon: 'book', title: 'Resources', text: 'Career library' },
];

export const whoCanSetUp = ['Schools', 'Colleges', 'Universities', 'Organizations'];
