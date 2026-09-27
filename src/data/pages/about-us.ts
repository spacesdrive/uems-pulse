import type { ContentPageData } from '../types';
import { U } from './_shared';

const page: ContentPageData = {
  slug: 'about-us',
  seo: {
    title: 'About Us',
    description:
      'UEMS Ventures has a clear “You First” policy. Nearly two decades of student counselling, 3000+ students placed, and offices in India, Australia and Canada.',
  },
  hero: {
    badge: 'About Us',
    title: 'We are called Unique for a reason',
    highlight: 'Unique',
    intro:
      'We at UEMS have a clear “You First” policy. Our clients’ needs and satisfaction is our top priority. It gives our team immense pleasure to leave our clients feeling empowered and happy with the choice they make, be it choosing where and what to study or migrating to a different part of the world.',
    actions: [
      { label: 'Meet the team', href: '#team', variant: 'white' },
      { label: 'Contact Us', href: '/contact-us', variant: 'ghost', icon: 'chat' },
    ],
    image: { src: `${U}/2022/10/1024-x-1024-min.jpg`, alt: 'UEMS Ventures student meet' },
  },
  sections: [
    {
      kind: 'text',
      badge: 'How we work',
      badgeIcon: 'clipboardList',
      title: '“Organising is what you do before you do something, so that when you do it, it’s not all mixed up” — A. A. Milne',
      body: [
        'UEMS team organises your application file for study abroad and migration very systematically, leaving no place for errors so that the results are clear and precise.',
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'About us',
      title: 'Connecting students and professionals with opportunities globally',
      body: [
        'We help students and professionals fulfil their dreams and optimise their potential by connecting them with education and migration opportunities globally. We also help students and young professionals explore their strengths and pick the best career path through our career interest / aptitude test, Eval.',
        'We not only guide students to make the best educational and career choices, but hold their hand and support them as they fulfil their dream of studying abroad. We specialise in helping students study abroad in Australia, Canada, Germany, Ireland, New Zealand, Russia, UK, and USA.',
        'Our honesty, commitment to doing our best for our clients, and nearly two decades of student counselling experience makes us incomparable in our field. We are called Unique for a reason, and we live up to our name!',
      ],
      actions: [
        { label: 'Try Eval', href: 'http://www.evaltest.com' },
        { label: 'Study destinations', href: '/study-abroad-consultants', variant: 'outline' },
      ],
      image: { src: `${U}/2022/10/1024-x-1024-2-min.jpg`, alt: 'Shalini Menon in a career counselling session' },
    },
    {
      kind: 'features',
      badge: 'Purpose',
      badgeIcon: 'target',
      title: 'Our Goals, Mission & Vision',
      items: [
        {
          icon: 'target',
          title: 'Our Goals',
          list: [
            'Transform the lives of students and professionals who aim higher and dare to aspire for a better education and life.',
            'Empower students and professionals with honest and accurate advice about career guidance, education abroad, and migration.',
            'Exceed client expectations and ensure they are content with the services provided to them.',
          ],
        },
        {
          icon: 'rocket',
          title: 'Mission',
          text: 'To assist students and professionals in their journey of discovering their path through career guidance, study abroad and migration counseling.',
        },
        {
          icon: 'idea',
          title: 'Vision',
          text: 'To make every individual aware of their potential and design their destiny accordingly.',
        },
      ],
    },
    {
      kind: 'stats',
      tone: 'surface',
      badge: 'Our Experience',
      badgeIcon: 'chart',
      title: 'Over the last 15 years',
      intro:
        'We have placed more than 3000 students in universities in Australia and Canada and have expanded our expertise to other countries. Our esteemed team of lawyers, with a combined work experience of more than three decades, have successfully lodged migration applications for hundreds of clients in Australia and Canada.',
      items: [
        { value: 15, suffix: '+', label: 'Years of experience' },
        { value: 3000, suffix: '+', label: 'Students placed' },
        { value: 30, suffix: '+', label: 'Years of combined legal experience' },
        { value: 3, label: 'Continents with offices' },
      ],
    },
    {
      kind: 'team',
      id: 'team',
      badge: 'Our Team',
      badgeIcon: 'users',
      title: 'Our Team',
      people: [
        { name: 'Shalini Menon', role: 'Founder & CEO', image: `${U}/2020/10/disha-shah-01.png` },
        { name: 'Disha Shah', image: `${U}/2020/10/disha-shah-2.png` },
        { name: 'Tanya Nair', image: `${U}/2020/10/DSFDFG.png` },
        { name: 'Smitha Leo', image: `${U}/2020/10/DFSFSDF.png` },
        { name: 'Gauri Katira', image: `${U}/2022/05/IMG_20220514_145942-modified-1.png` },
        { name: 'Gagandeep Singh', image: `${U}/2021/12/961c0e18-c5b8-4055-afc8-e1a1ced698c9-modified-e1649747587347.png` },
      ],
    },
    {
      kind: 'team',
      tone: 'surface',
      badge: 'Sydney',
      badgeIcon: 'pin',
      title: 'Our Sydney Team',
      people: [
        { name: 'Dr. Kuldip Nandra', image: `${U}/2020/10/ADSF.png` },
        { name: 'Shefali Nandra', image: `${U}/2020/10/DSFF.png` },
        { name: 'Rinku Sharma', image: `${U}/2020/10/Rinku-Sharma.png` },
        { name: 'Indu', image: `${U}/2020/10/Indu.png` },
        { name: 'Geetu', image: `${U}/2020/10/Geetu.png` },
        { name: 'Chakrapani B', image: `${U}/2020/10/CK.png` },
      ],
    },
    {
      kind: 'team',
      variant: 'compact',
      badge: 'Associates',
      badgeIcon: 'handshake',
      title: 'Our Associates',
      people: [
        { name: 'Sumi Joy', role: 'IELTS Trainer / Communication Coach', image: `${U}/2021/12/e0fe63b7-f047-4c53-9b37-e1b33f9abda5-modified-e1638973788528.png` },
        { name: 'Ketki Bhasin', role: 'Associate Punjab Region', image: `${U}/2023/05/WhatsApp_Image_2023-05-25_at_12_36_39_PM-modified_1-transformed-e1685031058376.png` },
        { name: 'Mr. Prajesh Trotsky', role: 'NT Edusys', image: `${U}/2021/12/4014edab-4302-40cb-816f-4c05ea3625b5-modified-e1638974838662.png` },
        { name: 'Manjusha Bhaskarwar', role: 'Career Counselor', image: `${U}/2021/12/67de34b5-adaa-4138-ae0c-ab918b7cab57-1-modified.png` },
        { name: 'Santosh Birajdar', role: 'Associate', phone: '9820033734', image: `${U}/2023/09/profile-pic.png` },
        { name: 'Binal Soni', role: 'Edu Compass - Founder & Counsellor', phone: '9869172620', email: 'binal@educompass.in', image: `${U}/2024/02/Profile-1-modified.jpg` },
        { name: 'Rajkumar Sharma', role: 'Principal DPS Gajraula', phone: '9991114479', image: `${U}/2023/09/profile-pic-3.png` },
      ],
    },
    {
      kind: 'groups',
      tone: 'surface',
      badge: 'Who we serve',
      badgeIcon: 'users',
      title: 'Our clientele, approach and offices',
      groups: [
        {
          title: 'Our clientele includes',
          items: [
            'Students seeking career guidance or wanting to study abroad.',
            'Teachers, principals, schools, colleges, and education institutes who wish to use career guidance and study abroad counseling for their students.',
            'Professionals wanting to migrate or change careers.',
          ],
        },
        {
          title: 'Our Approach',
          text: 'We adopt a client centric approach and exceed client expectations through our clear and consistent communication, honest advice, and end-to-end support for all services provided.',
          items: [],
        },
        {
          title: 'Our Office',
          text: 'We work in virtual teams across three continents with offices in India, Australia, and Canada.',
          items: [],
        },
      ],
    },
    {
      kind: 'cta',
      title: 'Let’s chart your destiny abroad',
      text: 'Talk to our counsellors about study abroad, migration or career clarity.',
      actions: [
        { label: 'Contact Us Now', href: '/contact-us', variant: 'white' },
        { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
      ],
    },
  ],
};

export default page;
