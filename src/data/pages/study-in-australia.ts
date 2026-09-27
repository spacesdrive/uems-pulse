import type { ContentPageData } from '../types';
import { U, consultActions, contactCta, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-australia',
  seo: {
    title: 'Why Study in Australia? – Eligibility & Courses',
    description:
      'Study in Australia with UEMS Ventures: eligibility, requirements, accommodation costs, scholarships and the subclass 500 student visa checklist.',
  },
  hero: {
    badge: 'Study in Australia',
    title: 'Why Study in Australia? – Eligibility & Courses',
    highlight: 'Australia?',
    intro:
      'Australia has much more to offer than the usual expectations. Many international students are choosing to study in Australia because of its friendly, laid-back nature, excellent education system, and high standard of living, and the support provided by Education Consultants.',
    actions: consultActions,
    image: { src: `${U}/2021/06/Untitled-design-81.png`, alt: 'Students studying in Australia' },
  },
  sections: [
    expert,
    {
      kind: 'features',
      badge: 'Why Australia',
      title: 'A land of abundance for international students',
      items: [
        {
          icon: 'sparkles',
          title: 'Great Weather Condition',
          text: 'Australia is a land of abundance - abundance of sun, abundance of green pastures, abundance of fresh air, abundance of minerals and it doesn’t just end there.',
        },
        {
          icon: 'graduation',
          title: 'Quality Education For International Students',
          text: 'Australia offers a globally recognised education with renowned facilities and educators. It offers quality study options and an excellent lifestyle.',
        },
        {
          icon: 'wallet',
          title: 'Affordable Education',
          text: 'There’s almost nothing that Australia does not have… some of the best universities in the world with affordable education. It is home to over 800,000 international students and the numbers of students each year are growing.',
        },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'What Australia Offers',
      title: 'What Australia Offers to the International Students',
      intro: 'Many universities and programs in various fields to choose from. Top 8 out of 100 universities are in Australia.',
      list: [
        'No application fees in most of the institutes',
        'No Visa Interviews',
        'Pathway programs eventually helping you get the degree you aspire',
        'Up to 3 years of Post-study work rights',
        'Higher minimum wages than other countries',
        'Options to study courses that lead to permanent residency',
      ],
      image: { src: `${U}/2020/10/Study-in-Australia.jpg`, alt: 'Upcoming intake in Australia' },
    },
    {
      kind: 'table',
      badge: 'Requirements',
      badgeIcon: 'clipboard',
      title: 'Requirements to Study in Australia',
      head: ['Level of Education', 'Min aggregate score', 'IELTS'],
      rows: [
        ['Bachelors Degree', '60 - 65% in year 12 with best 4 subjects', '6.5, no band less than 6.0'],
        ['Masters Degree', '55% and above in UG', '6.0 – 6.5'],
      ],
    },
    {
      kind: 'split',
      reverse: true,
      badge: 'Costs',
      badgeIcon: 'wallet',
      title: 'Cost of studying in Australia',
      body: [
        'The entire cost of studying in Australia isn’t just inclusive of the tuition cost but many other factors such as an individual’s accommodation, student visa costs, airfare and the overall availability of scholarships.',
        'If studying abroad is planned with utmost details, then it can be affordable for everyone. Tuition fees depend on the course picked by the student.',
      ],
      image: { src: `${U}/2019/04/business-man-and-woman-meeting-at-work-in-office-QX9VMGL.jpg`, alt: 'Counselling meeting' },
    },
    {
      kind: 'table',
      tone: 'surface',
      badge: 'Accommodation',
      badgeIcon: 'home',
      title: 'Accommodation in Australia',
      intro:
        'Most universities in Australia offer on-campus accommodation, but it is not mandatory to live there. These are indicative costs and they vary from city to city. UEMS provides you with full assistance on where to live and how to choose the accommodation before you land in the country. Most students end up sharing an apartment or a house with other students which helps reduce the expenses.',
      head: ['Accommodation type', 'Expenses (indicative)'],
      rows: [
        ['Hostels and Guesthouses', '$90 to $150 per week'],
        ['Shared Rental', '$95 to $215 per week'],
        ['On-campus', '$110 to $280 per week'],
        ['Homestay', '$235 to $325 per week'],
        ['Rental', '$185 to $440 per week'],
        ['Boarding schools', '$11,000 to $22,000 a year'],
      ],
      note: 'Source: studyinaustralia.gov.au — living costs.',
    },
    {
      kind: 'groups',
      badge: 'Scholarships',
      badgeIcon: 'award',
      title: 'Scholarship To Study Abroad in Australia',
      intro:
        'Australia offers many scholarships which make the decision to study abroad much more affordable and accessible. Scholarships are offered on the basis of academics and differ with each institute depending on the student’s profile. They range from $2000 up to 100% of the tuition fee. Most Australian universities and colleges also have their own list of scholarships for Indian students which can be shared when a student enquires with UEMS.',
      groups: [
        {
          title: 'Australian Government Scholarships',
          text: 'Australian government scholarships are offered for full-time study in Australia for undergraduate, Masters or technical courses. Students are advised to apply for Australian Government scholarships a year in advance after receiving an offer from the respective Australian University.',
          items: [],
        },
        {
          title: 'International Organisations providing Scholarships for Australia',
          items: [
            'Rotary Peace fellows',
            'Aga Khan Foundation International Scholarship',
            'CSIRO PG scholarship programme',
            'OFID Scholarship Award',
            'Flowers Across Melbourne Scholarship – for design, technology and agriculture students',
            'The Indigenous Students Support Program (ISSP), for which the Australian Government is preparing programme guidelines',
          ],
        },
      ],
    },
    {
      kind: 'checklist',
      tone: 'surface',
      badge: 'Student Visa (subclass 500)',
      badgeIcon: 'fileCheck',
      title: 'Australia Student Visa',
      intro:
        'This visa entitles you to travel and stay in Australia for up to 5 years in line with your enrolment. The Australian government cost for the visa is AUD 620 per person. You as a student will be eligible to invite your spouse and your child. You and your family must meet all the visa conditions and follow Australian laws. Study visa documents checklist:',
      items: [
        'Student visa application form',
        'Passport details of the applicant',
        'Certificate of Enrolment (COE) or Letter of Offer (LoO)',
        'Financial proofs',
        'Overseas Student Health Cover proof',
        'English language test results',
        'Passport size photographs',
        'Health & Character records',
      ],
      note: 'Consult the UEMS Team to get complete assistance for the student visa.',
    },
    contactCta(),
  ],
};

export default page;
