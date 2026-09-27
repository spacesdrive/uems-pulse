import type { FeatureItem } from './types';

export type QuizKey = 'ib' | 'icse';
type Letter = 'A' | 'B' | 'C' | 'D';

export interface Quiz {
  title: string;
  tag: string;
  heading: string;
  intro: string[];
  chips: string[];
  description: string;
  questions: { q: string; options: Record<Letter, string> }[];
  results: Record<Letter, { title: string; text: string; trait: string }>;
}

const results = (stream: 'ib' | 'icse'): Quiz['results'] => ({
  A: {
    title: stream === 'ib' ? 'Science / Technology' : 'Science Stream',
    text: stream === 'ib' ? 'Consider HL subjects in Physics, Chemistry, Mathematics, and Computer Science.' : 'Consider Physics, Chemistry, Mathematics, and Biology in ISC.',
    trait: 'Analytical Mind',
  },
  B: {
    title: stream === 'ib' ? 'Commerce / Business' : 'Commerce Stream',
    text: stream === 'ib' ? 'Consider HL subjects in Business Management, Economics, and Mathematics.' : 'Consider Commerce, Accounts, Economics, and Mathematics in ISC.',
    trait: 'Strategic Mind',
  },
  C: {
    title: stream === 'ib' ? 'Humanities' : 'Humanities Stream',
    text: stream === 'ib' ? 'Consider HL subjects in History, English A, Economics, or Global Politics.' : 'Consider History, Political Science, Sociology, and Literature in ISC.',
    trait: 'Communicative Mind',
  },
  D: {
    title: stream === 'ib' ? 'Creative / Design' : 'Creative / Arts Stream',
    text: stream === 'ib' ? 'Consider HL subjects in Visual Arts, Design Technology, or Film.' : 'Consider Art, Music, Literature, and Mass Communication in ISC.',
    trait: 'Creative Mind',
  },
});

export const quizzes: Record<QuizKey, Quiz> = {
  ib: {
    title: 'IB Curriculum Quiz',
    tag: '6 Subjects',
    heading: "Choose IB Subjects Like You're Designing Your Future",
    intro: ['Your subject choices shape your university offers.', '6 subjects • 3 HL + 3 SL • TOK • EE • CAS'],
    chips: ['TOK', 'EE', 'CAS', '3 HL + 3 SL'],
    description: "Choose IB subjects like you're designing your future. Discover whether Science/Tech, Commerce, Humanities, or Creative paths suit you best.",
    questions: [
      { q: 'What do you enjoy most?', options: { A: 'Solving problems', B: 'Debating ideas', C: 'Creating things', D: 'Managing money' } },
      { q: "Pick a project you'd love", options: { A: 'Science experiment', B: 'Business plan', C: 'Documentary', D: 'App or website' } },
      { q: 'Your ideal future career?', options: { A: 'Doctor / Engineer', B: 'Business leader', C: 'Lawyer / Journalist', D: 'Designer / Artist' } },
    ],
    results: results('ib'),
  },
  icse: {
    title: 'ICSE Curriculum Quiz',
    tag: 'Streams',
    heading: 'Find the Right Stream & Subject Combination',
    intro: ['Your ICSE/ISC stream choice opens different career doors.', 'Science • Commerce • Humanities • Arts'],
    chips: ['Science', 'Commerce', 'Humanities'],
    description: 'Explore the right stream and subject combination for your ICSE journey. Find out if Science, Commerce, or Humanities is your calling.',
    questions: [
      {
        q: 'What excites you most in school?',
        options: { A: 'Math & Science experiments', B: 'Business Studies & Economics', C: 'History, Literature & Social Studies', D: 'Art, Music & Creative Projects' },
      },
      {
        q: 'Which activity would you choose?',
        options: { A: 'Building a working model', B: 'Organizing a school event', C: 'Writing a research paper', D: 'Designing a poster or short film' },
      },
      {
        q: 'What career appeals to you?',
        options: { A: 'Engineer, Doctor, Scientist', B: 'CA, Banker, Entrepreneur', C: 'Lawyer, Teacher, Civil Servant', D: 'Designer, Writer, Performer' },
      },
    ],
    results: results('icse'),
  },
};

export const evalInsights: FeatureItem[] = [
  { icon: 'sparkles', title: 'Natural Strengths', text: 'Innate abilities & aptitudes' },
  { icon: 'brain', title: 'Interests & Personality', text: 'What truly drives you' },
  { icon: 'route', title: 'Career Pathways', text: 'Suitable directions' },
  { icon: 'bookCheck', title: 'Subject Guidance', text: 'Stream recommendations' },
  { icon: 'graduation', title: 'Education Options', text: 'Future study paths' },
  { icon: 'idea', title: 'Learning Style', text: 'Ideal environments' },
];

export const whyLove = [
  'No prior preparation needed',
  'No technical knowledge required',
  'Simple and interactive questions',
  'Less than 30 minutes to complete',
  'Instant career insights & recommendations',
];

export const audiences: FeatureItem[] = [
  { icon: 'school', title: 'Class 8–10', text: 'Exploring careers & preparing for stream selection' },
  { icon: 'graduation', title: 'Grades 11–12', text: 'Confused about courses, careers, or university' },
  { icon: 'briefcase', title: 'College & Grads', text: 'Seeking clarity on career direction' },
  { icon: 'users', title: 'Parents', text: 'Want scientific guidance for their children' },
];

export const heroChecklist = [
  'Natural Strengths & Abilities',
  'Career Interests & Personality',
  'Suitable Career Pathways',
  'Subject & Stream Recommendations',
  'Future Education Opportunities',
];
