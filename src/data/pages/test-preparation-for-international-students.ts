import type { ContentPageData } from '../types';
import { U } from './_shared';

const page: ContentPageData = {
  slug: 'test-preparation-for-international-students',
  seo: {
    title: 'Test Preparation for Studying Abroad',
    description:
      'Online coaching for GRE, GMAT, IELTS, PTE, SAT and TOEFL with expert instructors, comprehensive study materials and a personalised approach.',
  },
  hero: {
    badge: 'Test Prep',
    title: 'Test Preparation for Studying Abroad',
    highlight: 'Studying Abroad',
    intro:
      'Welcome to our online coaching platform. Our expert instructors will guide you through test preparation for studying abroad. With a focus on the GRE, GMAT, IELTS, PTE, SAT, ACT, and TOEFL, we’ll optimize your performance. We will ensure outstanding scores and increased chances of admission to the top universities. Start your journey today and unlock a world of opportunities!',
    chips: ['GRE', 'GMAT', 'IELTS', 'PTE', 'SAT', 'ACT', 'TOEFL'],
    actions: [
      { label: 'Enroll Now', href: '#enroll', variant: 'white' },
      { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
    ],
    image: { src: `${U}/2023/07/621a402a840c620001160a3a.jpg`, alt: 'Student preparing for an entrance exam' },
  },
  sections: [
    {
      kind: 'cards',
      badge: 'Online Coaching',
      badgeIcon: 'book',
      title: 'Get the coaching you need to ace your External Exam',
      intro: 'Our team of experienced tutors will help you achieve your dream of studying abroad. We offer online coaching for a variety of external exams including:',
      aspect: 'landscape',
      items: [
        { title: 'GMAT Coaching', image: `${U}/2023/07/sat.jpg` },
        { title: 'GRE Coaching', image: `${U}/2023/07/2.png` },
        { title: 'SAT Coaching', image: `${U}/2023/07/3.png` },
        { title: 'IELTS Coaching', image: `${U}/2023/07/4.png`, href: '/ielts' },
        { title: 'PTE Coaching', image: `${U}/2023/07/5.png` },
        { title: 'TOEFL Coaching', image: `${U}/2023/07/6.png` },
      ],
    },
    {
      kind: 'table',
      tone: 'surface',
      badge: 'External Exams At a Glance',
      badgeIcon: 'clipboardList',
      title: 'Everything You Need to Know About External Exams, in One Place',
      intro: 'Connect with us to find out the latest fees for each of these exams.',
      head: ['Exam', 'Format', 'Levels', 'Score validity', 'Exam fees (INR)'],
      rows: [
        ['Graduate Record Exam (GRE)', 'Verbal Reasoning, Quantitative Reasoning, and Analytical Writing', 'Postgraduate', '5 years', '22,550 (General Test), 14,550 (Subject Test)'],
        ['Graduate Management Admission Test (GMAT)', 'Quantitative Reasoning, Verbal Reasoning, and Analytical Writing', 'Postgraduate', '5 years', '23,000 – 25,000'],
        ['Scholastic Aptitude Test (SAT)', 'Reading, Writing and Language, and Math', 'Undergraduate', '5 years', '11,000 – 12,000'],
        ['International English Language Testing System (IELTS)', 'Listening, Reading, Writing, and Speaking', 'Undergraduate and Postgraduate', '2 years', '18,000'],
        ['Pearson Test of English (PTE)', 'Listening, Reading, Writing, and Speaking', 'Undergraduate and Postgraduate', '2 years', '17,000'],
        ['Test of English as a Foreign Language (TOEFL)', 'Reading, Listening, Speaking, and Writing', 'Undergraduate and Postgraduate', '2 years', '18,000'],
      ],
    },
    {
      kind: 'features',
      badge: 'Why Choose Us',
      badgeIcon: 'trophy',
      title: 'Why Choose Us for your external exam',
      items: [
        {
          icon: 'userCheck',
          title: 'Expert Instructors',
          text: 'Benefit from the guidance of experienced instructors who possess in-depth knowledge of the exams and can provide effective strategies and personalized instruction.',
        },
        {
          icon: 'bookCheck',
          title: 'Comprehensive Study Materials',
          text: 'Access a wealth of carefully curated study materials, including video lessons, interactive exercises, and practice tests, designed to cover all exam sections comprehensively.',
        },
        {
          icon: 'target',
          title: 'Personalized Approach',
          text: 'Receive tailored coaching that addresses your specific needs, allowing you to focus on areas that require improvement and maximize your score potential.',
        },
      ],
    },
    {
      kind: 'faq',
      tone: 'surface',
      badge: 'FAQs',
      badgeIcon: 'chat',
      title: 'Frequently Asked Questions (FAQ)',
      intro: 'Get answers to commonly asked questions about our coaching program.',
      items: [
        {
          q: 'How does the online coaching program work?',
          a: 'Our online coaching program provides comprehensive study materials, expert instruction, and personalized guidance through a user-friendly online platform. You can access video lessons, practice tests, and additional resources at your own pace, while receiving support from our experienced instructors.',
        },
        {
          q: 'Can I enroll in multiple exam coaching programs?',
          a: 'Yes, you can enroll in multiple exam coaching programs based on your study abroad requirements and goals. Each program is designed to specifically target the skills and knowledge needed for that particular exam.',
        },
        {
          q: 'How long is the coaching program?',
          a: 'The duration of the coaching program varies depending on the exam and your individual progress. Our programs are flexible, allowing you to study at your own pace and adapt the timeline to fit your needs.',
        },
        {
          q: 'Are the practice tests similar to the actual exams?',
          a: 'Yes, our practice tests are designed to closely resemble the format, difficulty level, and question types of the actual exams. By practicing with these tests, you can familiarize yourself with the exam structure and improve your performance.',
        },
        {
          q: 'Do you provide support and feedback during the coaching program?',
          a: 'Absolutely! Our instructors are available to provide support, clarify doubts, and offer personalized feedback throughout the coaching program. You can reach out to them via email, discussion forums, or other designated channels.',
        },
        {
          q: 'Is there any prerequisite knowledge required to enroll in the coaching programs?',
          a: 'While some exams may have recommended prior knowledge, our coaching programs are designed to cater to both beginners and those with prior familiarity with the subject matter. Our instructors will guide you from the basics to advanced concepts.',
        },
      ],
    },
    {
      kind: 'split',
      id: 'enroll',
      badge: 'Enroll Now',
      badgeIcon: 'rocket',
      title: 'Ready to excel in your external exams?',
      body: ['Unlock a world of opportunities. Enroll in our online coaching program today & embark on your journey to success!'],
      list: ['Address: 416 Marathon Max, LBS Marg, Mulund West, Mumbai – 400080', 'Email: info@uemsventures.com', 'Phone: +91 9833808612 / +91 9321646670'],
      listTitle: 'Get In Touch',
      actions: [
        { label: 'Enroll Now', href: '/contact-us' },
        { label: 'WhatsApp us', href: 'https://wa.me/919833808612', variant: 'outline', icon: 'chat' },
      ],
      image: { src: `${U}/2023/07/ielts_student.jpg`, alt: 'GMAT, GRE, IELTS, PTE, SAT, TOEFL online coaching' },
    },
  ],
};

export default page;
