import { Mail, PhoneCall } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/data/site';
import { telHref } from '@/lib/links';
import { cn } from '@/lib/cn';

const expertCopy = {
  badge: 'Study Abroad & Migration Experts',
  title: 'We work together to help you Achieve Your Dream',
  body: [
    "At UEMS Ventures, we prioritize our clients' needs as a Study Abroad & Migration Expert. Our services include EVAL Career Clarity Tests, Study Abroad guidance, and Migration support. We aim to help people upgrade their lives. With EVAL, we help clients clarify their career paths. Through Study Abroad, we assist students in achieving their dream of studying at top universities overseas. And with Migration support, we empower individuals to build a new life in a foreign country.",
    "We offer comprehensive and personalized solutions tailored to meet each client's unique needs and goals. Our team of experienced and knowledgeable consultants provide expert guidance and support at every step, from the initial evaluation to the final destination.",
    'With a client-centric approach, we work closely with our clients to understand their aspirations and provide them with the information, resources, and support they need to achieve their dreams. Whether you are looking to study abroad, migrate to a new country, or clarify your career path, UEMS Ventures is your dedicated partner to help you chart your destiny abroad.',
  ],
};

/** The recurring "Talk to Mumbai Expert" block: story on the left, enquiry form on the right. */
export function ExpertConnect({ tone = 'surface', title = expertCopy.title, id }: { tone?: 'white' | 'surface'; title?: string; id?: string }) {
  return (
    <section id={id} className={cn('section', tone === 'surface' && 'bg-surface')}>
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <span data-reveal className="pill mb-4">
            <span className="size-1.5 rounded-full bg-gold" />
            {expertCopy.badge}
          </span>
          <h2 data-reveal className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {expertCopy.body.map((p, i) => (
            <p key={i} data-reveal className="mt-4 leading-7 text-muted">
              {p}
            </p>
          ))}
          <div data-reveal className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={telHref(site.phones[0])} className="group card card-hover flex items-center gap-4 p-4">
              <span className="icon-circle size-11">
                <PhoneCall aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-muted">Click to Call Back</span>
                <span className="font-semibold">Talk to Mumbai Expert</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="group card card-hover flex items-center gap-4 p-4">
              <span className="icon-circle size-11 bg-gold text-navy-900">
                <Mail aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-muted">Click to Mail Us</span>
                <span className="font-semibold break-all">{site.email}</span>
              </span>
            </a>
          </div>
        </div>
        <div data-reveal="scale">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
