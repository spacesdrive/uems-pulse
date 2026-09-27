import type { ContentPageData } from '../types';
import { U, consultActions, contactCta, expert } from './_shared';

const page: ContentPageData = {
  slug: 'studyincanada',
  seo: {
    title: 'Study in Canada – Requirements & Benefits',
    description:
      'Study in Canada with UEMS Ventures: top courses, estimated costs, popular scholarships and the SDS and General student visa streams.',
  },
  hero: {
    badge: 'Study in Canada',
    title: 'Study in Canada – Requirements & Benefits',
    highlight: 'Canada',
    intro: [
      'Canada is a land of majestic mountains and green forests and extends to the bustling cities with its vast and amazing features. It is known to have more lakes than any other place in the world. Canada has been considered one of the best places to live by the United Nations as it has healthy and safe communities.',
      'Canada offers quality and affordable education which is recognised globally, attracting a large number of students every year. 26 of Canada’s universities rank in the QS World University Rankings 2019 and 27 of them in The World University Rankings 2019.',
    ],
    actions: consultActions,
    image: { src: `${U}/2021/06/Untitled-design-60.png`, alt: 'Students studying in Canada' },
  },
  sections: [
    expert,
    {
      kind: 'split',
      badge: 'What Canada Offers',
      title: 'What Canada Offers to International Students',
      list: [
        'Three Canadian Universities are ranked among the Top 100 Universities in the World.',
        'Plenty of research opportunities.',
        'Uncompromised quality of education in universities and colleges.',
        'Affordable Tuition Fees compared to any other country.',
        '3 year post work rights for a 2 years course.',
        'Possibility of Permanent residency.',
      ],
      image: { src: `${U}/2020/10/what-canada-offers-banner.jpg`, alt: 'What Canada offers' },
    },
    {
      kind: 'cards',
      tone: 'surface',
      badge: 'Top Courses',
      badgeIcon: 'graduation',
      title: 'Top Courses in Canada',
      items: [
        { title: 'Business Studies', image: `${U}/2021/06/business-660x740.png` },
        { title: 'Architecture', image: `${U}/2020/10/IMG-20201005-WA0054-660x740.jpg` },
        { title: 'Data Analysis', image: `${U}/2020/10/IMG-20201005-WA0056-660x740.jpg` },
        { title: 'Nursing', image: `${U}/2020/10/IMG-20201005-WA0058-660x740.jpg` },
        { title: 'HR Management', image: `${U}/2020/10/IMG-20201005-WA0060-660x740.jpg` },
        { title: 'Artificial Intelligence', image: `${U}/2020/10/IMG-20201005-WA0079-660x740.jpg` },
      ],
    },
    {
      kind: 'split',
      reverse: true,
      badge: 'Estimated Study Cost',
      badgeIcon: 'wallet',
      title: 'Estimated Study Cost for Canada',
      body: [
        'Scholarships in Canada are quite competitive as they are very limited, unlike other countries like Australia, USA and UK. The eligibility criteria for scholarships is an outstanding academic background and exceptional English Proficiency scores.',
      ],
      listTitle: 'Popular Scholarships',
      list: [
        'PEO International Peace Scholarships for Women',
        'Dalhousie University Scholarship',
        'University of Saskatchewan International Students Awards',
        'York University International Student Scholarship',
        'University of Waterloo',
        'Lakehead University',
        'Brock – UG Entrance Scholarship',
        'Trent International Global Citizen Scholarships and Awards',
      ],
      image: { src: `${U}/2020/10/study-cost-banner.jpg`, alt: 'Study cost in Canada' },
    },
    {
      kind: 'groups',
      tone: 'surface',
      badge: 'Canada Student Visa',
      badgeIcon: 'fileCheck',
      title: 'Are you ready to go?',
      intro: 'The student visa process for Canada includes the SDS stream and a General stream.',
      groups: [
        {
          title: 'SDS Visa',
          items: [
            'IELTS Score of 6.0 band for each ability',
            'Purchasing a GIC of CAD$10,000 to cover the living expenses',
            'Proof of payment of 1 year’s fees',
          ],
        },
        {
          title: 'General Visa',
          text: 'The requirements for a general student visa application are the same as the SDS category except the GIC requirement:',
          items: ['English Language Test', 'Admission process completion (LOA, Tuition Fees)', 'GIC', 'Medical', 'Bio-metric'],
        },
      ],
    },
    contactCta('Book a Consultation Now', 'Our counsellors will map the right Canadian college or university, course and visa stream for your profile.'),
  ],
};

export default page;
