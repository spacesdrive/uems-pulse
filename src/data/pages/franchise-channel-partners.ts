import type { ContentPageData } from '../types';

const page: ContentPageData = {
  slug: 'franchise-channel-partners',
  seo: {
    title: 'Franchise & Channel Partners',
    description:
      'Partner with UEMS Ventures: become an associate career counselor with the Eval team or associate with UEMS Abroad for study abroad.',
  },
  hero: {
    badge: 'Franchise & Channel Partners',
    title: 'Franchise & Channel Partners',
    intro: [
      '“Every day you have lived and have not spent that day trying to make a positive impact on somebody else makes you like a candle wasting its light in a dark, abandoned cave.” — Patrick San Francesco',
      'Become a member of a team which believes in spreading light and offering direction to students. Join us as our partner to enhance your own career or business. Choose to become an associate career counselor with the Eval Team or associate with UEMS Abroad for study abroad.',
    ],
    actions: [
      { label: 'Register for free', href: '/contact-us', variant: 'white' },
      { label: 'Call 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
    ],
  },
  sections: [
    {
      kind: 'text',
      badge: 'Our Mission',
      badgeIcon: 'target',
      title: 'Spread career clarity with us',
      body: [
        'UEMS Ventures is looking for partners who can join us in our mission of reaching out to as many students for the Career Clarity Test Series. It was important for us to create the Career Clarity Test series called Eval as we wanted to give young individuals clarity in what they take up as their careers. Now it’s time to spread the word.',
        'If you are someone who can work with our team to help students use Eval to find clarity, then let’s discuss what we can do together. Working with our team means you gain full support in understanding the product, its benefits for the students and yourself. It’s a product which we all love to work with because of the underlying philosophy and the reason why it was created.',
      ],
    },
    {
      kind: 'features',
      tone: 'surface',
      badge: 'Become an Associate Career Counselor',
      badgeIcon: 'userCheck',
      title: 'Special features available to a career counselor',
      intro:
        'Special packages are available for anyone interested in becoming a career counselor. Enquire with us — reach us on 9833808612 for a complete write-up on how the counseling model can work for you.',
      items: [
        { icon: 'graduation', title: 'Training' },
        { icon: 'trend', title: 'Marketing Support' },
        { icon: 'book', title: 'Career Knowledge Base' },
        { icon: 'clipboard', title: 'Admin Support' },
        { icon: 'brain', title: 'Career Clarity Tests' },
        { icon: 'users', title: 'Teamwork and Networking with Mentors' },
      ],
    },
    {
      kind: 'cta',
      title: 'Join the UEMS Team',
      text: 'Are you someone who has access to students or can reach out to students? Associate with us to help students fulfil their dream of studying abroad. We offer complete support on guiding the students with their application and visa process.',
      actions: [
        { label: 'Register for free', href: '/contact-us', variant: 'white' },
        { label: 'Reach us on 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
      ],
    },
  ],
};

export default page;
