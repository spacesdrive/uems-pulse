import { Compass, GraduationCap, Plane, Globe2 } from 'lucide-react';
import type { Action } from '@/data/types';
import { ButtonRow } from '@/components/Button';

interface Props {
  title?: string;
  text?: string;
  actions?: Action[];
}

const floating = [
  { Icon: Plane, className: 'left-[6%] top-[18%] hidden md:flex' },
  { Icon: GraduationCap, className: 'left-[12%] bottom-[16%] hidden lg:flex' },
  { Icon: Globe2, className: 'right-[7%] top-[20%] hidden md:flex' },
  { Icon: Compass, className: 'right-[13%] bottom-[14%] hidden lg:flex' },
];

/** High-contrast rounded CTA panel with floating icon chips, as used at the end of reference pages. */
export function CtaBand({
  title = 'Not Sure Which Destination Is Right For You?',
  text = 'Let our experts map out the perfect country and course based on your profile.',
  actions = [
    { label: 'Book Free Counselling', href: '/contact-us', variant: 'white' },
    { label: 'Call +91 9833808612', href: 'tel:+919833808612', variant: 'ghost', icon: 'phone' },
  ],
}: Props) {
  return (
    <section className="px-3 py-6 sm:px-4 md:py-8">
      <div
        data-reveal="scale"
        className="hero-gradient relative mx-auto max-w-7xl overflow-hidden rounded-4xl px-6 py-16 text-center text-white sm:px-10 md:py-20"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_60%)]" />
        {floating.map(({ Icon, className }, i) => (
          <span
            key={i}
            aria-hidden
            className={`absolute size-14 animate-float items-center justify-center rounded-full bg-white text-primary shadow-lg ${className}`}
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <Icon className="size-6" />
          </span>
        ))}
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">{title}</h2>
          {text && <p className="mt-4 text-lg text-white">{text}</p>}
          <ButtonRow actions={actions} className="mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}
