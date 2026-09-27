import type { ContentPageData } from '../types';
import { U } from './_shared';

const page: ContentPageData = {
  slug: 'migration',
  seo: {
    title: 'Our Migration Services',
    description:
      'UEMS Migration team — MARA agents in Australia and IRCC members for Canada — helps you move and re-establish yourself in a new country. Free assessment.',
  },
  hero: {
    badge: 'Migration',
    title: 'Our Migration Services',
    highlight: 'Migration',
    intro:
      'UEMS Migration team assists its candidates in realising their dream of moving and re-establishing themselves in a new country. Choose from either Australia or Canada and we will have one of our Migration professionals working on your application. Our aim is to help you at every step of the application, making it hassle-free and meeting a successful outcome.',
    actions: [
      { label: 'Free Assessment', href: '#free-assessment', variant: 'white' },
      { label: 'Migrate to Australia', href: '/australia-migration', variant: 'ghost', icon: 'plane' },
    ],
    image: { src: `${U}/2020/10/Untitled-design-90.png`, alt: 'Visa and migration services' },
  },
  sections: [
    {
      kind: 'split',
      badge: 'How UEMS helps',
      badgeIcon: 'handshake',
      title: 'How UEMS helps you with Migration',
      body: [
        'UEMS helps you with a preliminary assessment, providing you with a well researched answer about your profile. It’s important to work with migration professionals as they support you with the correct government rules and regulations.',
        'The UEMS team in the Australian office includes MARA agents who are migration professionals with many years of experience under their belt. The Canada office also gives the same support with the IRCC members who deal with migration to Canada.',
        'After the preliminary assessment you are linked with one of the team members from these offices to assist you in taking your application forward for the country you are interested in.',
      ],
      image: { src: `${U}/2020/10/Untitled-design-83.png`, alt: 'Migration consultation' },
    },
    {
      kind: 'features',
      tone: 'surface',
      badge: 'Choosing where to Migrate',
      badgeIcon: 'compass',
      title: 'Choosing where to Migrate',
      intro: 'Two of the most popular destinations to migrate to are Canada and Australia because both offer:',
      columns: 3,
      items: [
        { icon: 'sparkles', title: 'A high quality of life' },
        { icon: 'trend', title: 'High standard of living' },
        { icon: 'chart', title: 'A point based system' },
        { icon: 'shield', title: 'Safe and clean environments' },
        { icon: 'health', title: 'Excellent healthcare & education systems' },
      ],
    },
    {
      kind: 'steps',
      badge: 'Process',
      badgeIcon: 'route',
      title: 'Step by Step Migration Process',
      items: [
        { icon: 'search', title: "Check if you're qualified!" },
        { icon: 'file', title: 'Submit All Documents' },
        { icon: 'fileCheck', title: 'Lodge Your Application' },
        { icon: 'badge', title: 'Visa Granted' },
      ],
    },
    {
      kind: 'contactForm',
      id: 'free-assessment',
      tone: 'surface',
      badge: 'Free Assessment',
      badgeIcon: 'clipboard',
      title: 'Check your eligibility',
      intro: 'Please fill this form to check your eligibility and we will contact you as soon as possible. *fields are mandatory',
      formTitle: 'Free Assessment',
    },
  ],
};

export default page;
