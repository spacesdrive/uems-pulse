import type { ContentPageData } from '../types';
import { U } from './_shared';

const page: ContentPageData = {
  slug: 'australia-migration',
  seo: {
    title: 'Migrate to Australia',
    description:
      'Migrate to Australia with UEMS: MARA agents with 20+ years combined experience and a 98% success rate. Skilled visas 189, 190, 491 and business visas 188.',
  },
  hero: {
    badge: 'Australia Migration',
    title: 'Migrate to Australia',
    highlight: 'Australia',
    intro:
      'Are you looking for better weather, cleaner air, a high standard of living, a park at the corner of every street or a reliable healthcare system? Australia offers you all this and much more. Australia is a developed country with a strong economy attracting many people from around the world to settle there every year. Australia welcomes immigrants as it requires skilled labour in many sectors.',
    actions: [
      { label: 'Enquire Now', href: '/contact-us', variant: 'white' },
      { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
    ],
    image: { src: `${U}/2021/06/Untitled-design-62.png`, alt: 'Migrate to Australia' },
  },
  sections: [
    {
      kind: 'split',
      badge: 'How UEMS can help',
      badgeIcon: 'handshake',
      title: 'How can UEMS help you to migrate to Australia',
      body: [
        'Migration is a very big decision for anyone, shifting from their hometown to a whole new country. Hence it is very important to have someone with you who can guide you step by step with the complete application process, giving you accurate and detailed Australian visa advice.',
        'UEMS’ Australian Migration Team comprises MARA agents who have a combined experience of over 20 years in the field with a 98% success rate. We are committed to achieving successful outcomes for clients. Unique Education and Migration Services (UEMS) has its very own team of lawyers as the UEMS headquarters is a law firm led by Ms Shefali Nandra (see www.uniquemigration.com.au). Our firm offers pre-eminent expertise in all aspects of immigration and nationality law.',
        'Our assistance starts with counselling in India itself by an Australian Citizen who is happy to share all about the country and what it offers. We like to know your migration dream and guide you with first hand knowledge. We share our belief of doing our “homework first” with our clients, which starts the process with a preliminary assessment.',
      ],
      image: { src: `${U}/2020/10/MirgraTION-02.jpg`, alt: 'Australia migration' },
    },
    {
      kind: 'checklist',
      tone: 'surface',
      badge: 'Eligibility criteria',
      badgeIcon: 'clipboard',
      title: 'Eligibility criteria — our services include',
      items: [
        'Assistance with choosing the “best” option for your situation.',
        'We guide professionals working across various occupation types to select the right visa stream or immigration program most suitable for their profile. This includes engineers, architects, doctors, managers, teachers and more.',
        'Simplifying the process with complete navigation through the paperwork.',
        'Sharing Professional Knowledge and Education.',
      ],
    },
    {
      kind: 'features',
      badge: 'Visa Types',
      badgeIcon: 'fileCheck',
      title: 'Skilled Visas',
      items: [
        {
          icon: 'badge',
          title: '189 Visa',
          text: 'This is a permanent visa which is points based and allows you to live and work in Australia. This visa applies to those who are not sponsored by an employer, any family member or a government agency.',
        },
        {
          icon: 'landmark',
          title: '190 Visa',
          text: 'This is a permanent visa which is again points based and allows you to live and work in Australia. You must meet certain age, English, qualifications and work experience requirements. It is also based on a sponsorship by a government agency.',
        },
        {
          icon: 'pin',
          title: '491 Visa',
          text: 'This is a provisional visa which allows you to work, live and study in regional areas of Australia. Speak to UEMS to find out what the regional areas are. It allows you to travel to and from Australia while the visa is valid.',
        },
      ],
    },
    {
      kind: 'features',
      tone: 'surface',
      badge: 'Business Visas',
      badgeIcon: 'briefcase',
      title: 'Business Visas',
      columns: 2,
      items: [
        {
          icon: 'briefcase',
          title: 'Subclass 188 – Business Innovation and Investment (Provisional) Visa',
          text: 'For anyone with business skills who wishes to operate a new or an existing business in Australia. This visa is nominated and sponsored by a government agency.',
        },
        {
          icon: 'wallet',
          title: 'Subclass 188 (Investor Stream)',
          text: 'This visa is for anyone who can invest up to AUD$1.5 million in a business or an investment activity in an Australian state.',
        },
      ],
    },
    {
      kind: 'steps',
      badge: 'Our services include',
      badgeIcon: 'route',
      title: 'Our services include',
      intro:
        'Contact UEMS and get your profile assessed thoroughly to understand if you qualify and what visa type is the best fit for your background. Follow through with the complete guidance on the application process.',
      items: [
        {
          icon: 'search',
          title: 'Preliminary assessment and consultation',
          text: 'We do our homework, understand the case completely, and guide you with where you stand with respect to the application.',
        },
        { icon: 'fileCheck', title: 'Step by step lodgement', text: 'Lodgement of the application with complete guidance at every step.' },
      ],
    },
    {
      kind: 'cta',
      title: 'Start your preliminary assessment',
      text: 'Speak to our Australian migration team and find out which visa is right for you.',
      actions: [
        { label: 'Enquire Now', href: '/contact-us', variant: 'white' },
        { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
      ],
    },
  ],
};

export default page;
