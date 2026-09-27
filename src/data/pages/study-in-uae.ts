import type { ContentPageData } from '../types';
import { U, consultActions, contactCta, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-uae',
  seo: {
    title: 'Study in UAE – Dubai: Your Gateway to Global Success',
    description:
      'Study in Dubai with UEMS Ventures: branch campuses of top UK, US and Australian universities, admission requirements, costs and the UAE student visa process.',
  },
  hero: {
    badge: 'Study in UAE – Dubai',
    title: 'Study in UAE – Dubai: Your Gateway to Global Success',
    highlight: 'Dubai',
    intro:
      'The United Arab Emirates, and Dubai in particular, has rapidly emerged as a premier global destination for international students. Combining world-class education with a high-growth economy, Dubai offers a unique blend of academic excellence and professional opportunity. Whether you are looking for local institutional excellence or branch campuses of top Western universities, Dubai provides a safe, multicultural, and tax-free environment to launch your career.',
    actions: consultActions,
    image: { src: `${U}/2025/02/writing-923882_1280.jpg`, alt: 'Student writing an application' },
  },
  sections: [
    {
      kind: 'features',
      badge: 'Why Dubai',
      badgeIcon: 'flag',
      title: 'Why Study in UAE - Dubai?',
      intro: 'Dubai is more than just a tourist destination; it is a global hub for innovation and education.',
      items: [
        { icon: 'building', title: 'World-Class Infrastructure', text: 'Access to state-of-the-art campuses and research facilities.' },
        {
          icon: 'users',
          title: 'No Age Barrier',
          text: 'Dubai has no upper age limit for student visas. Whether a student is 18 or 50, they can secure a residence visa as long as they meet the university’s academic entry requirements.',
        },
        {
          icon: 'calendar',
          title: 'Liberal Policy on Study Gaps',
          text: 'Study gaps are not an issue in Dubai. The focus is placed on the student’s current academic merit and professional experience rather than how many years have passed since their last qualification.',
        },
        { icon: 'landmark', title: 'Global Branch Campuses', text: 'Earn degrees from top UK, US, and Australian universities right in the heart of the Middle East.' },
        {
          icon: 'plane',
          title: 'Parent Campus Transfers',
          text: 'Students at branch campuses (UK, Australia, USA) can transfer to the parent campus after finishing one academic year of their Undergraduate course, depending on their scores.',
        },
        { icon: 'languages', title: 'Cultural Diversity', text: 'Join a student community from over 150 nationalities.' },
        { icon: 'trend', title: 'Career Growth', text: 'High demand for skilled professionals in Finance, Engineering, Tourism, and Tech.' },
        { icon: 'shield', title: 'Safety & Lifestyle', text: 'Ranked among the safest cities in the world with an unparalleled cosmopolitan lifestyle.' },
      ],
    },
    expert,
    {
      kind: 'groups',
      badge: 'Universities & Courses',
      badgeIcon: 'graduation',
      title: 'Top Universities & Colleges in Dubai',
      intro: 'Dubai hosts the “International Academic City” and “Knowledge Village,” housing some of the world’s most prestigious institutions:',
      groups: [
        {
          title: 'Top Universities & Colleges',
          items: [
            'University of Birmingham Dubai Campus',
            'University of Wollongong Dubai (UOWD)',
            'Heriot-Watt University Dubai',
            'Instituto Marangoni, Dubai',
            'Curtin University Dubai',
            'Middlesex University Dubai',
            'Rochester Institute of Technology (RIT) Dubai',
            'Emirates Aviation University, Dubai Campus',
            'University of Europe for Applied Sciences, Dubai',
            'American University of Ras Al Khaimah, Dubai Campus',
          ],
        },
        {
          title: 'Popular Courses to Study',
          items: [
            'Business & Management: MBA, Finance, International Business.',
            'Engineering: Civil, Mechanical, and Aerospace Engineering.',
            'Information Technology: Cyber Security, Data Science, and AI.',
            'Tourism & Hospitality: Event Management and Hotel Management.',
            'Architecture & Design: Interior Design and Urban Planning.',
          ],
        },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      reverse: true,
      badge: 'Admission Requirements',
      badgeIcon: 'clipboard',
      title: 'Admission Requirements',
      body: [
        'Intakes — Fall (September): major intake for all programs. Spring (January): secondary intake for select courses.',
        'English Proficiency: IELTS (5.5 – 6.5) or TOEFL. Many universities give an IELTS waiver by accepting Medium of Instruction (MOI) certificates if your previous education was in English.',
      ],
      listTitle: 'Eligibility',
      list: ['Undergraduate: Minimum 70% in Grade 12 (HSC).', 'Postgraduate: Minimum GPA of 3.0 on a 4.0 scale (approx. 60%+).'],
      actions: [{ label: 'Contact us', href: '/contact-us' }],
      image: { src: `${U}/2023/11/download-9.jpeg`, alt: 'Dubai skyline' },
    },
    {
      kind: 'table',
      badge: 'Costs',
      badgeIcon: 'wallet',
      title: 'Cost of Education & Living',
      head: ['Category', 'Estimated Cost (Annual)'],
      rows: [
        ['Tuition (Undergraduate)', 'AED 35,000 – AED 65,000'],
        ['Tuition (Postgraduate)', 'AED 45,000 – AED 85,000'],
        ['Living Expenses', 'AED 3,000 – AED 6,000 (Monthly)'],
      ],
    },
    {
      kind: 'features',
      tone: 'surface',
      badge: 'UAE Student Visa Process',
      badgeIcon: 'fileCheck',
      title: 'UAE Student Visa Process',
      intro: 'Securing a visa for Dubai is efficient and streamlined.',
      items: [
        { icon: 'fileCheck', title: 'Student Residence Visa', text: 'Student visa is granted for one year and is to be renewed every year.' },
        { icon: 'briefcase', title: 'Part-Time Work', text: 'Students are permitted to work part-time in designated sectors with university approval.' },
        {
          icon: 'plane',
          title: 'Entry Permit vs. Visa',
          text: 'Students first receive an entry permit to enter Dubai, and the actual residence visa is granted at the airport’s visa office.',
        },
      ],
    },
    {
      kind: 'features',
      badge: 'How We Help',
      title: 'How UEMS Ventures Can Help You',
      intro: 'At UEMS Ventures, we simplify your journey to Dubai. Our expert counselors provide end-to-end support:',
      columns: 3,
      items: [
        { icon: 'userCheck', title: 'Personalized Counseling', text: 'Selecting the right university and course based on your profile.' },
        { icon: 'clipboardList', title: 'Application Management', text: 'Handling documentation, SOPs, and LORs to ensure high acceptance rates.' },
        { icon: 'award', title: 'Scholarship Assistance', text: 'Identifying merit-based scholarships to reduce your financial burden.' },
        { icon: 'shield', title: 'Visa Guidance', text: 'Navigating the GDRFA portal and medical insurance requirements.' },
        { icon: 'home', title: 'Post-Arrival Support', text: 'Assistance with accommodation, airport pickup, and local orientation.' },
      ],
    },
    contactCta(),
  ],
};

export default page;
