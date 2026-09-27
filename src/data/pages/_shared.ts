import type { Action, Section } from '../types';
import { site } from '../site';

export const U = 'https://uemsventures.com/wp-content/uploads';

export const consultActions: Action[] = [
  { label: 'Book Free Counselling', href: '/contact-us', variant: 'white' },
  { label: 'Talk to Mumbai Expert', href: `tel:${site.phones[0].replace(/\s/g, '')}`, variant: 'ghost', icon: 'phone' },
];

export const expert: Section = { kind: 'expert' };

export const contactCta = (title = 'Consult the UEMS Team', text = 'Get complete assistance for your application, student visa and everything in between.'): Section => ({
  kind: 'cta',
  title,
  text,
  actions: [
    { label: 'Contact us', href: '/contact-us', variant: 'white' },
    { label: 'Book Appointment', href: site.bookingUrl, variant: 'ghost', icon: 'calendarCheck' },
  ],
});
