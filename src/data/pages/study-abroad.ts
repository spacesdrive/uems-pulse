import type { ContentPageData } from '../types';
import { U } from './_shared';
import { studentTestimonials } from '../testimonials';

const page: ContentPageData = {
  slug: 'study-abroad',
  seo: {
    title: 'Turn your dream of studying abroad into reality',
    description:
      'UEMS Ventures helps students navigate every step of their study abroad journey — from choosing the right program to settling into their new home. Book a free consultation.',
  },
  hero: {
    badge: 'Study Abroad with UEMS Ventures',
    title: 'Turn your dream of studying abroad into reality!',
    highlight: 'reality!',
    intro:
      'We help students like you navigate every step of their study abroad journey, from choosing the right program to settling into your new home.',
    actions: [
      { label: 'Get Started', href: '#free-consultation', variant: 'white' },
      { label: 'Explore destinations', href: '/study-abroad-consultants', variant: 'ghost', icon: 'compass' },
    ],
    image: {
      src: `${U}/2024/06/image-of-a-girl-in-our-study-abroad-consultants-in-Kollam-1024x778-1.png`,
      alt: 'Study abroad with UEMS Ventures',
    },
  },
  sections: [
    {
      kind: 'features',
      badge: 'Why UEMS Ventures',
      badgeIcon: 'trophy',
      title: 'Why UEMS Ventures is Your Best Choice for Studying Abroad',
      items: [
        { icon: 'route', title: 'Personalized Roadmap', text: 'Forget generic plans. We craft a study abroad journey aligned with your unique goals.' },
        { icon: 'clipboard', title: 'Seamless Application Support', text: 'We guide you through every step, from course selection to visa applications.' },
        { icon: 'plane', title: 'Seamless Transitions', text: 'We ensure a smooth journey with pre-departure assistance for accommodation, travel, and cultural orientation.' },
        { icon: 'award', title: 'Exclusive Benefits', text: 'Gain access to scholarship guidance, financial aid assistance, and valuable alumni networks.' },
        { icon: 'trophy', title: 'Proven Track Record of Success', text: "We don't just talk results, we deliver them. We have a history of helping students like you achieve their dreams." },
        { icon: 'sparkles', title: 'Free Consultation', text: 'Get started risk-free with a free consultation and personalized roadmap.' },
      ],
    },
    {
      kind: 'logos',
      tone: 'surface',
      badge: 'Partner Universities',
      badgeIcon: 'graduation',
      title: 'Partner Universities',
      images: [
        { src: `${U}/2024/06/The-University-of-Western-Australia-logo.jpeg`, alt: 'The University of Western Australia' },
        { src: `${U}/2024/06/Auckland-University-Logo.jpeg`, alt: 'University of Auckland' },
        { src: `${U}/2024/06/Otago-University-Logo.jpeg`, alt: 'University of Otago' },
        { src: `${U}/2024/06/Howard-University-Logo.jpeg`, alt: 'Howard University' },
        { src: `${U}/2024/06/Cornell-University-Logo.jpeg`, alt: 'Cornell University' },
        { src: `${U}/2024/06/uow_logo_2X2.jpeg`, alt: 'University of Wollongong' },
        { src: `${U}/2024/06/Stanford-University-Logo-300x300-1.jpeg`, alt: 'Stanford University' },
        { src: `${U}/2024/06/Arizona-State-University-Logo.jpeg`, alt: 'Arizona State University' },
        { src: `${U}/2024/06/Pennsylvania-University-Logo.jpeg`, alt: 'University of Pennsylvania' },
      ],
    },
    {
      kind: 'stats',
      badge: 'Our Proven Track Record',
      badgeIcon: 'chart',
      title: 'Our Proven Track Record',
      items: [
        { value: 5000, suffix: '+', label: 'Success Stories' },
        { value: 300, suffix: '+', label: 'Top Institutions' },
        { value: 15, suffix: '+', label: 'Years of Expertise' },
        { value: 98, suffix: '%', label: 'Success Rate' },
      ],
    },
    {
      kind: 'contactForm',
      id: 'free-consultation',
      tone: 'surface',
      badge: 'Free Consultation',
      badgeIcon: 'calendarCheck',
      title: 'Book Your Free Consultation Now!',
      intro: 'Tell us your preferred study destination — USA, UK, New Zealand, Canada or Australia — and our counsellors will get in touch.',
      formTitle: 'Book Your Free Consultation',
    },
    {
      kind: 'testimonials',
      badge: 'Testimonials',
      badgeIcon: 'star',
      title: 'What our clients say about us',
      items: studentTestimonials.slice(0, 6),
    },
  ],
};

export default page;
