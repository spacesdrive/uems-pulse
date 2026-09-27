import type { ContentPageData } from '../types';
import { U, consultActions, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-abroad-consultants',
  seo: {
    title: 'Best Study Abroad Consultants For Abroad Studies',
    description:
      'UEMS Ventures offers complete application assistance for courses in Australia, Canada, UK, Ireland, USA, Asia, New Zealand, UAE and Europe.',
  },
  hero: {
    badge: 'Study Abroad',
    title: 'Best Study Abroad Consultants For Abroad Studies',
    highlight: 'Study Abroad',
    intro:
      'You have come to the right place for study abroad consultants. Here you will find guides to study in different countries, also giving you a chance to connect to us for a one on one consultation. UEMS offers complete application assistance for courses in many countries.',
    actions: consultActions,
    image: { src: `${U}/2020/10/Untitled-design-80.png`, alt: 'Study abroad consultants' },
  },
  sections: [
    {
      kind: 'cards',
      badge: 'Destinations',
      badgeIcon: 'compass',
      title: "What's Your Study Destination?",
      intro: 'Explore detailed guides for every country we specialise in.',
      items: [
        { title: 'Australia', image: `${U}/2025/11/3.png`, href: '/study-in-australia', meta: 'Study in' },
        { title: 'Canada', image: `${U}/2025/11/1.png`, href: '/studyincanada', meta: 'Study in' },
        { title: 'UK/Ireland', image: `${U}/2025/11/4.png`, href: '/study-in-uk-ireland', meta: 'Study in' },
        { title: 'USA', image: `${U}/2025/11/2.png`, href: '/study-in-usa', meta: 'Study in' },
        { title: 'Asia', image: `${U}/2026/02/asia-image-.webp`, href: '/study-in-asia', meta: 'Study in' },
        { title: 'New Zealand', image: `${U}/2026/02/new-zealand-image-.webp`, href: '/study-in-new-zealand', meta: 'Study in' },
        { title: 'UAE', image: `${U}/2026/02/uae-image-.webp`, href: '/study-in-uae', meta: 'Study in' },
        { title: 'Europe', image: `${U}/2026/02/europe-image-.webp`, href: '/study-in-europe', meta: 'Study in' },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'Why Study Abroad?',
      title: 'Why Study Abroad?',
      body: [
        'Studying abroad welcomes you to a whole new world, giving you a new experience. You get to make new friends, experience new cultures, and anyone with average scores can also get into a good course abroad. Studying abroad grooms you into an independent human being with a lot more confidence in your professional life.',
        'It helps you get out of your comfort zone and makes you experience new possibilities, bringing out your hidden strengths.',
      ],
      image: { src: `${U}/2019/04/benefits-of-study-abroad-banner.jpg`, alt: 'Benefits of studying abroad' },
    },
    expert,
    {
      kind: 'features',
      badge: 'Types of Courses',
      badgeIcon: 'graduation',
      title: 'Types of Courses',
      intro: 'We Listen, We Discuss, and then you Decide what’s best for you.',
      items: [
        {
          icon: 'school',
          title: 'High School',
          text: 'Going to High school overseas offers international students a life-changing opportunity. Play a sport, practice English and live a new experience all while gaining skills that will last you a lifetime.',
        },
        {
          icon: 'graduation',
          title: 'Undergraduate',
          text: 'Choose a country of your choice to enhance yourself with skills you gain with an international exposure. If you are someone who likes to venture out and build your confidence, study abroad opens doors to many options you might not have available to you here. Aspire yourself to new avenues – personally and academically.',
        },
        {
          icon: 'briefcase',
          title: 'Post Graduation',
          text: 'Post Graduation degrees abroad can give you a leap in your professional life as studying abroad also means that you are allowed to work while you are studying. The work experience you gain while studying gives you a practical outlook into your profession.',
        },
      ],
    },
    {
      kind: 'cta',
      title: 'Many countries welcome international students',
      text: 'Each one has its own advantage and UEMS helps you find the right country and the right course for you.',
      actions: [
        { label: 'Enquire Now', href: '/contact-us', variant: 'white' },
        { label: 'Read About Student experiences', href: '/#testimonials', variant: 'ghost', icon: 'star' },
      ],
    },
  ],
};

export default page;
