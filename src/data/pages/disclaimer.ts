import type { ContentPageData } from '../types';

/** The source site publishes this page without body copy yet; we point visitors to the policies that exist. */
const page: ContentPageData = {
  slug: 'disclaimer',
  seo: {
    title: 'Disclaimer',
    description: 'Disclaimer for UEMS Ventures. Read our Terms & Conditions and Privacy Policy, or contact our team with any questions.',
  },
  hero: {
    badge: 'Legal',
    title: 'Disclaimer',
    intro: 'Our full disclaimer is being updated. In the meantime, our Terms & Conditions and Privacy Policy govern the use of this website and our services.',
    actions: [
      { label: 'Terms & Conditions', href: '/terms-conditions', variant: 'white' },
      { label: 'Privacy Policy', href: '/privacy-policy', variant: 'ghost', icon: 'shield' },
    ],
  },
  sections: [
    {
      kind: 'cta',
      title: 'Have a question about our services?',
      text: 'Our team responds to every enquiry within 24 hours.',
      actions: [
        { label: 'Contact Us', href: '/contact-us', variant: 'white' },
        { label: 'Email info@uemsventures.com', href: 'mailto:info@uemsventures.com', variant: 'ghost', icon: 'mail' },
      ],
    },
  ],
};

export default page;
