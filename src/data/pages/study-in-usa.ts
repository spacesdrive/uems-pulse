import type { ContentPageData } from '../types';
import { U, consultActions, contactCta, expert } from './_shared';

const page: ContentPageData = {
  slug: 'study-in-usa',
  seo: {
    title: 'Study in the USA – Universities & Visa Guide',
    description:
      'Study in the USA with UEMS Ventures: top courses, application requirements and estimated costs at public and private universities.',
  },
  hero: {
    badge: 'Study in USA',
    title: 'Study in the USA – Universities & Visa Guide',
    highlight: 'USA',
    intro:
      'USA has emerged as one of the top study destinations for students because of the quality of education it offers. There are more than a million international students studying in the USA.',
    actions: consultActions,
    image: { src: `${U}/2021/06/Untitled-design-66.png`, alt: 'Students studying in the USA' },
  },
  sections: [
    expert,
    {
      kind: 'split',
      badge: 'Why the USA',
      title: 'What USA offers to International Students',
      body: [
        'USA has emerged as one of the top study destinations for students because of the quality of education it offers. There are more than a million international students studying in the USA. It is less competitive than the schools in India, as even an average student can get a chance to get into a good institute.',
      ],
      image: { src: `${U}/2020/10/study-in-the-United-States-750x430-1.png`, alt: 'Study in the US' },
    },
    {
      kind: 'cards',
      tone: 'surface',
      badge: 'Top Courses',
      badgeIcon: 'graduation',
      title: 'Top Courses in USA',
      items: [
        { title: 'Business Courses', image: `${U}/2021/06/business-1-660x740.png` },
        { title: 'IT Courses', image: `${U}/2021/06/it-660x740.png` },
        { title: 'Liberal Arts', image: `${U}/2020/10/Untitled-design-67.png` },
        { title: 'Engineering', image: `${U}/2020/10/Untitled-design-50.png` },
        { title: 'Artificial Intelligence', image: `${U}/2021/06/artificial-aligance-660x740.png` },
        { title: 'Social Sciences', image: `${U}/2020/10/Untitled-design-46.png` },
      ],
    },
    {
      kind: 'checklist',
      badge: 'Requirements',
      badgeIcon: 'clipboard',
      title: 'What do you need to be able to study in USA',
      items: [
        'Your Xth and XIIth marksheets',
        'Statement Of Purpose',
        'Academic Resume',
        'Your portfolio',
        'Two letters of recommendation from teachers and counselors',
        'Proof of funds',
      ],
      image: { src: `${U}/2020/10/brandon-mowinkel-211936-unsplash-390x249-1.jpg`, alt: 'USA flag' },
    },
    {
      kind: 'split',
      tone: 'surface',
      reverse: true,
      badge: 'Estimated Course Cost',
      badgeIcon: 'wallet',
      title: 'Estimated Course Cost',
      body: [
        'Cost of study in the USA varies depending on the course of study, the type of institution (private or public), and the length of the program. The average cost of education at a public university is approximately $17,000 and at a private institute it is $43,000.',
      ],
      actions: [{ label: 'Contact us', href: '/contact-us' }],
      image: { src: `${U}/2020/10/dolar.jpg`, alt: 'Cost of studying in the USA' },
    },
    contactCta(),
  ],
};

export default page;
