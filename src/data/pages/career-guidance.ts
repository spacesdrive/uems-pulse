import type { ContentPageData } from '../types';
import { U } from './_shared';
import { site } from '../site';

const page: ContentPageData = {
  slug: 'career-guidance',
  seo: {
    title: 'Career Guidance – Confusion to Clarity',
    description:
      'Discover the right career path with UEMS Ventures: EVAL career clarity test, in-person career counselling and industry mentoring, plus programs, tests and talks.',
  },
  hero: {
    badge: 'Career Guidance',
    title: 'Confusion to Clarity',
    highlight: 'Clarity',
    intro: [
      "Don't leave your future to guesswork. Discover the right career path through a proven journey of discovery, assessment, and guidance.",
      'Get ready to steer yourself in the right direction by using our innovative methods and tools. It is important that every individual understands their strengths and weaknesses so that one can set realistic goals.',
    ],
    actions: [
      { label: 'Start Eval Test', href: 'https://evaltest.com/tests-info', variant: 'white' },
      { label: 'Book Your Career Counselling Session', href: '/contact-us', variant: 'ghost', icon: 'calendarCheck' },
    ],
    image: {
      src: `${U}/2026/06/lucid-origin_A_single_Indian_student_standing_still_one_half_of_frame_slightly_blurred_and_de-0.jpg`,
      alt: 'Student finding career clarity',
    },
  },
  sections: [
    {
      kind: 'features',
      badge: 'Three Steps to Success',
      badgeIcon: 'route',
      title: 'Three Steps to Success',
      intro: 'Discover the right career path for yourself — explore our programs, tests and talks.',
      items: [
        {
          icon: 'graduation',
          title: 'Programs',
          text: 'Build a strong foundation. We offer tailored academic mentoring from Class 8 through College Graduation.',
          list: ['Career Discovery', 'Subject Selection', 'University Planning'],
          href: '/programs',
        },
        {
          icon: 'brain',
          title: 'Career Clarity Tests',
          text: 'Remove the guesswork with scientific psychometric assessments to understand your strengths.',
          list: ['Aptitude Analysis', 'Stream Mapping', 'Detailed Reports'],
          href: '/career-clarity-tests',
        },
        {
          icon: 'mic',
          title: 'Career Talk',
          text: 'Gain real-world insights through expert seminars, workshops, and personalized counselling.',
          list: ['Expert Seminars', 'Cell Setup', 'Industry Exposure'],
          href: '/career-talk',
        },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'How Eval Helps You',
      badgeIcon: 'brain',
      title: 'Step One – Career Clarity Test',
      intro: 'We follow a three-step career guidance process to assist all individuals make an informed and well researched choice when it comes to choosing a career.',
      body: ['Test takers gain an in-depth understanding of their Strengths, Interests, Work Style Indicators, Further Education options, and Ideal Career Path.'],
      actions: [{ label: 'Start Eval Test', href: 'https://evaltest.com/tests-info' }],
      image: { src: `${U}/2022/03/home-page-reports.70c5465c.png`, alt: 'Eval career report' },
    },
    {
      kind: 'split',
      reverse: true,
      badge: 'Step Two',
      badgeIcon: 'users',
      title: 'In-Person Career Counselling',
      body: [
        'After attempting Eval you can take further help from our expert counsellors who will understand the result of your Eval career report and help you plan your career, the stream you need to choose, and what courses you need to study to achieve your desired career goals.',
      ],
      actions: [{ label: 'Book Your Career Counselling Session', href: '/contact-us' }],
      image: { src: `${U}/2022/04/Green-Modern-Thank-You-Instagram-Post.jpg`, alt: 'Career counselling session' },
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'Step Three',
      badgeIcon: 'handshake',
      title: 'Mentoring',
      body: [
        'Connect with industry related mentors who will give their valuable time to share their experiences. Learn from them about the practicalities of the career of your choice. This is offered after the career counselling sessions.',
      ],
      actions: [{ label: 'Get in Touch', href: '/contact-us' }],
      image: { src: `${U}/2022/04/Green-Modern-Thank-You-Instagram-Post-1.jpg`, alt: 'Mentor guiding a student' },
    },
    {
      kind: 'cta',
      title: 'Ready to take the first step?',
      text: 'Join thousands of students who found their path with UEMS Ventures.',
      actions: [
        { label: 'Get Career Clarity', href: '/career-clarity-tests', variant: 'white' },
        { label: 'Schedule Appointment', href: site.bookingUrl, variant: 'ghost', icon: 'calendarCheck' },
      ],
    },
  ],
};

export default page;
