import type { ContentPageData } from '../types';
import { U } from './_shared';
import { studentTestimonials } from '../testimonials';

const ieltsReviews = studentTestimonials.filter((t) => /IELTS|Smitha/.test(t.quote));

const page: ContentPageData = {
  slug: 'ielts',
  seo: {
    title: 'IELTS Training',
    description:
      'UEMS IELTS training for Academic and General modules: strategies for Band 7+ in every section, computer-based exam tactics and examiner insights.',
  },
  hero: {
    badge: 'IELTS & PTE',
    title: 'UEMS IELTS Training',
    highlight: 'IELTS',
    intro:
      'UEMS IELTS trainers support you on achieving the highest possible scores which you can work towards — for studying abroad, migration or to work as a professional overseas.',
    actions: [
      { label: 'Book Your Training Session', href: '/contact-us', variant: 'white' },
      { label: 'About the IELTS exam', href: 'https://www.ielts.org/', variant: 'ghost', icon: 'book' },
    ],
    image: { src: `${U}/2020/10/IELTS-03-1.jpg`, alt: 'IELTS training at UEMS' },
  },
  sections: [
    {
      kind: 'features',
      badge: 'Modules',
      badgeIcon: 'book',
      title: 'Choose the right IELTS module',
      columns: 2,
      items: [
        { icon: 'briefcase', title: 'General Training', text: 'This module is attempted by working professionals who wish to migrate to Australia or Canada.' },
        { icon: 'graduation', title: 'Academic Training', text: 'This module is attempted by students who are looking at moving to Australia, Canada, New Zealand etc. for further studies.' },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'In the training you',
      badgeIcon: 'target',
      title: 'What you achieve in the training',
      list: [
        'Achieve learning outcomes for Band 7+ in every section',
        'Academic and General Exam Strategies and Tactics',
        'Computer Based Exam Strategies and Tactics',
        'Increasing your Reading Answer Accuracy',
        'Successfully overcoming your IELTS Listening Traps',
        'Know what IELTS Examiners want from Speaking and Writing',
      ],
      body: ['For studying abroad, migration or to work as a professional overseas. Book your training session and your examination date with UEMS Ventures.'],
      actions: [{ label: 'Contact us', href: '/contact-us' }],
      image: { src: `${U}/2020/10/IELTS-02-1.jpg`, alt: 'IELTS students' },
    },
    {
      kind: 'testimonials',
      badge: 'Student Stories',
      badgeIcon: 'star',
      title: 'What our IELTS students say',
      items: ieltsReviews,
    },
    {
      kind: 'cta',
      title: 'Book your training session and examination date',
      text: 'Our IELTS trainers will help you reach the band score you need.',
      actions: [
        { label: 'Contact us', href: '/contact-us', variant: 'white' },
        { label: 'Explore all Test Prep', href: '/test-preparation-for-international-students', variant: 'ghost', icon: 'book' },
      ],
    },
  ],
};

export default page;
