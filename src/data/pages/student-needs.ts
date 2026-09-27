import type { ContentPageData } from '../types';
import { U, contactCta } from './_shared';

const page: ContentPageData = {
  slug: 'student-needs',
  seo: {
    title: 'Student Needs',
    description:
      'UEMS presents a library of resources to help students prepare to move abroad: accommodation, education loans, health insurance and pre-departure counselling.',
  },
  hero: {
    badge: 'Student Needs',
    title: 'Student Needs',
    intro:
      'UEMS presents a library of resources which assists students with complete preparation to move to a new country for further education.',
    actions: [
      { label: 'Contact UEMS', href: '/contact-us', variant: 'white' },
      { label: 'Apply for an education loan', href: 'http://www.hdfccredila.com/apply-for-loan-partner.html?chear=Partner&cspecify=E1901080002', variant: 'ghost', icon: 'bank' },
    ],
    image: { src: `${U}/2021/06/Untitled-design-63.png`, alt: 'Students preparing to move abroad' },
  },
  sections: [
    {
      kind: 'split',
      badge: 'Accommodation',
      badgeIcon: 'home',
      title: 'Accommodation',
      body: [
        'UEMS assists all its students in finding the right accommodation for them. We are linked to many accommodation providers who can assist. Each country offers different types of accommodations, such as:',
      ],
      list: ['USA: On Campus', 'Australia: On Campus', 'Australia: Boarding and Lodging', 'Australia: Rent an apartment'],
      actions: [{ label: 'Contact UEMS', href: '/contact-us' }],
      image: { src: `${U}/2022/05/px1179393-image-kwvy0oxx.jpg`, alt: 'Student accommodation' },
    },
    {
      kind: 'split',
      tone: 'surface',
      reverse: true,
      badge: 'Bank Loan',
      badgeIcon: 'bank',
      title: 'Bank Loan',
      body: [
        'UEMS is working closely with HDFC Credila and other approved banks to provide bank loans for studying. Speak to us to understand various options available. You may also click below to go straight to HDFC and apply.',
      ],
      actions: [
        { label: 'Apply with HDFC Credila', href: 'http://www.hdfccredila.com/apply-for-loan-partner.html?chear=Partner&cspecify=E1901080002' },
        { label: 'Contact UEMS', href: '/contact-us', variant: 'outline' },
      ],
      image: { src: `${U}/2022/05/ezgif.com-gif-maker-1.jpg`, alt: 'Education loan' },
    },
    {
      kind: 'split',
      badge: 'Health Insurance',
      badgeIcon: 'health',
      title: 'Health Insurance',
      body: [
        'Health Insurance is a must as it takes care of your medical needs in a foreign country. UEMS has shortlisted a few of the Health Insurance providers for you already. Contact our office so that we can assist.',
        'One of the student Visa requirements is the health insurance, and students who do not maintain this are at risk of having their visas cancelled.',
      ],
      actions: [{ label: 'Contact UEMS', href: '/contact-us' }],
      image: { src: `${U}/2022/05/inside_72ad52d4-d4a2-4c1d-aaf9-66faf9786b93.jpg`, alt: 'Health insurance for students' },
    },
    {
      kind: 'split',
      tone: 'surface',
      reverse: true,
      badge: 'Pre-Departure',
      badgeIcon: 'plane',
      title: 'Pre - Departure',
      body: [
        "So all application procedures are completed and you are ready to leave but feeling anxious. Don't be, as we have everything covered before you land.",
        'After the Visa is received UEMS invites you for a face to face or a virtual Pre-departure counselling session. We feel it is our responsibility to make sure our students leave from their home country with confidence and no fear of landing in an unknown place.',
      ],
      actions: [{ label: 'Contact UEMS', href: '/contact-us' }],
      image: { src: `${U}/2022/05/travel-amid-coronavirus.jpg`, alt: 'Student ready for departure' },
    },
    contactCta('We are here to make sure you land ready', 'We make sure you land in a new country with all your basic needs arranged before you leave.'),
  ],
};

export default page;
