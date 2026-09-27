import type { ContentPageData } from '../types';
import { U, consultActions, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-new-zealand',
  seo: {
    title: 'Study in New Zealand: Your Gateway to Global Success',
    description:
      'Study in New Zealand with UEMS Ventures: popular courses, work rights, post-study work visas and a clear step-by-step application process.',
  },
  hero: {
    badge: 'Study in New Zealand',
    title: 'Study in New Zealand: Your Gateway to Global Success',
    highlight: 'New Zealand',
    intro:
      'New Zealand is one of the most sought-after study destinations for international students, known for its high academic standards, globally recognised qualifications, and excellent post-study work opportunities. New Zealand blends picturesque landscapes with top educational offerings and strong student support systems, making it ideal for international scholars. At UEMS, we guide you through every step of your journey—from choosing the right course to successfully starting your life in New Zealand.',
    actions: consultActions,
    image: {
      src: `${U}/2026/01/best-education-consultants-in-mumbai-complete-guide-to-study-abroad-in-2026.webp`,
      alt: 'Study in New Zealand with UEMS Ventures',
    },
  },
  sections: [
    {
      kind: 'groups',
      badge: 'Why New Zealand',
      badgeIcon: 'flag',
      title: 'Why Students are choosing New Zealand?',
      groups: [
        {
          title: 'Why students choose New Zealand',
          items: [
            'Globally recognized degrees and hands-on learning models',
            'Post-study work rights and career opportunities',
            'Safe, friendly, and welcoming campuses',
          ],
        },
        {
          title: 'UEMS Ventures Support Includes',
          items: [
            'Tailored course & institution guidance',
            'Application tracking & documentation support',
            'Visa filing and interview guidance',
            'Pre-departure orientation & accommodation support',
          ],
        },
        {
          title: 'Popular Fields',
          items: ['IT & Computer Science', 'Environmental Studies', 'Business & Entrepreneurship', 'Healthcare & Allied Sciences'],
        },
      ],
    },
    expert,
    {
      kind: 'split',
      badge: 'Popular Courses',
      badgeIcon: 'graduation',
      title: 'Popular Courses in New Zealand',
      intro: 'UEMS helps students apply to a wide range of programs, including:',
      list: [
        'Healthcare & Allied Health Programs',
        'Business & Management',
        'Information Technology & Data Science',
        'Engineering & Construction',
        'Hospitality & Tourism',
        'Education & Social Sciences',
      ],
      body: ['We help you choose courses aligned with your career goals and global mobility plans.'],
      image: { src: `${U}/2023/07/new.jpg`, alt: 'New Zealand landscape' },
    },
    {
      kind: 'features',
      tone: 'surface',
      badge: 'Why Study in New Zealand?',
      title: 'Why Study in New Zealand?',
      items: [
        {
          icon: 'badge',
          title: 'Globally Recognised Universities & Institutions',
          text: 'All New Zealand qualifications are regulated by the New Zealand Qualifications Authority (NZQA) and recognised worldwide.',
        },
        {
          icon: 'shield',
          title: 'High Quality of Life & Safety',
          text: 'New Zealand consistently ranks among the safest and most peaceful countries in the world.',
        },
        {
          icon: 'briefcase',
          title: 'Work While You Study',
          text: 'International students can work up to 20 hours per week during studies and full-time during scheduled breaks.',
        },
        {
          icon: 'trend',
          title: 'Post-Study Work Opportunities',
          text: 'Eligible graduates can apply for post-study work visas, opening pathways to international work experience and long-term settlement options.',
        },
        {
          icon: 'idea',
          title: 'Industry-Focused Education',
          text: 'Courses emphasise practical learning, research, and real-world application.',
        },
      ],
    },
    {
      kind: 'steps',
      badge: 'Our Process',
      badgeIcon: 'route',
      title: 'Our Step-by-Step Process',
      items: [
        { title: 'Free Profile Assessment' },
        { title: 'Course & Institution Shortlisting' },
        { title: 'Application Submission' },
        { title: 'Offer Letter & Acceptance' },
        { title: 'Visa Documentation & Filing' },
        { title: 'Pre-Departure Orientation' },
        { title: 'Ongoing Student Support' },
      ],
    },
    {
      kind: 'checklist',
      tone: 'surface',
      badge: 'Student Visa & Work Rights',
      badgeIcon: 'fileCheck',
      title: 'Student Visa & Work Rights',
      items: [
        'New Zealand student visas allow part-time work during study',
        'Post-study work options depend on course level and duration',
        'Clear visa pathways with regulated immigration policies',
      ],
      note: 'Our team ensures your application meets all immigration and compliance requirements.',
    },
    {
      kind: 'cta',
      title: 'Start Your New Zealand Journey Today',
      text: 'Whether you’re a student, graduate, or working professional, UEMS is here to guide you towards a globally rewarding education in New Zealand.',
      actions: [
        { label: 'Book a Free Consultation', href: '/contact-us', variant: 'white' },
        { label: 'Talk to Our Study Abroad Experts', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
      ],
    },
  ],
};

export default page;
