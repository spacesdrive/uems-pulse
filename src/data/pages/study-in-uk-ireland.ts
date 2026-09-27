import type { ContentPageData } from '../types';
import { U, consultActions, contactCta, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-uk-ireland',
  seo: {
    title: 'Study in the UK & Ireland – Best Options',
    description:
      'Study in the UK and Ireland with UEMS Ventures: top courses, entry requirements, living costs and the student visa document checklist.',
  },
  hero: {
    badge: 'Study in UK & Ireland',
    title: 'Study in the UK & Ireland – Best Options',
    highlight: 'UK & Ireland',
    intro: [
      'A flight time of merely 9 hours gets you into a country full of cultural diversity called the United Kingdom. It is the biggest island in the European continent with four countries: England, Scotland, Wales and Northern Ireland, surrounded by water all around.',
      'The UK shares its only land border with Ireland, where some of the biggest innovations come from, like the submarine, the modern stethoscope, colour photography and more. Ireland is one of the friendliest places to be; everyone is always made to feel at home.',
    ],
    actions: consultActions,
    image: { src: `${U}/2021/06/Untitled-design-65.png`, alt: 'Students studying in the UK and Ireland' },
  },
  sections: [
    expert,
    {
      kind: 'split',
      badge: 'UK & Ireland',
      title: 'What UK & Ireland offers to the International Students',
      body: [
        'Find out why more than 250,000 students are invited to study in the UK and 32,000 students in Ireland every year. The numbers are growing every year. Here’s a complete guide for reaching the UK / Ireland for further studies.',
      ],
      listTitle: 'Reasons for moving to UK & Ireland for further studies',
      list: ['Quality Education', 'Safe Environment', 'Shorter Courses', 'Work while you study', 'Diverse Culture'],
      image: { src: `${U}/2020/10/396-x-263-01.jpg`, alt: 'Students in the UK' },
    },
    {
      kind: 'cards',
      tone: 'surface',
      badge: 'Top Courses',
      badgeIcon: 'graduation',
      title: 'Top Courses in UK and Ireland',
      items: [
        { title: 'Law', image: `${U}/2021/06/law-660x740.png` },
        { title: 'Business', image: `${U}/2021/06/business-660x740.png` },
        { title: 'Medicine', image: `${U}/2021/06/medicine-660x740.png` },
        { title: 'Finance and Economics', image: `${U}/2020/10/Untitled-design-49.png` },
        { title: 'Food Technology', image: `${U}/2020/10/IMG-20201005-WA0085-660x740.jpg` },
        { title: 'Machine Learning and AI', image: `${U}/2020/10/IMG-20201005-WA0079-660x740.jpg` },
        { title: 'Biotechnology', image: `${U}/2020/10/IMG-20201005-WA0077-660x740.jpg` },
        { title: 'Media and Communication', image: `${U}/2021/06/social-660x740.png` },
      ],
    },
    {
      kind: 'groups',
      badge: 'Requirements & Costs',
      badgeIcon: 'clipboard',
      title: 'What do you need to get into a course?',
      groups: [
        {
          title: 'Course Requirements in UK',
          text: 'Since UK Universities are looking for the best candidates, most will conduct entrance tests to filter the bright minds. UK Universities also require additional documents such as references to prove that you hold the competence to succeed in your course.',
          items: ['IELTS: a score of 6.5 band is required for most of the courses.'],
        },
        {
          title: 'Cost of the course – Ireland',
          text: 'The expenses for every individual in Ireland vary depending on where you choose to stay and what your personal expenditures are.',
          items: ['On average, we estimate that a student will spend between €6,000 and €11,000 per year depending on location and lifestyle.'],
        },
      ],
    },
    {
      kind: 'checklist',
      tone: 'surface',
      badge: 'Student Visa',
      badgeIcon: 'fileCheck',
      title: 'Student Visa for UK and Ireland',
      intro: 'Original plus one copy for each of the following documents:',
      items: [
        'Acceptance Letter & Confirmation of fees paid',
        'Statement of Purpose',
        'Brief CV',
        'Class 10th Mark Sheet & Certificate',
        'Class 12th Mark Sheet & Certificate',
        'Graduation Mark Sheet & Certificate (in case of PG Course)',
        'IELTS/PTE score card (any one)',
        'Letter from Current Employer or Experience Certificate (where applicable)',
      ],
      image: { src: `${U}/2020/10/396-x-263-02.jpg`, alt: 'Students preparing their UK visa documents' },
    },
    contactCta(),
  ],
};

export default page;
