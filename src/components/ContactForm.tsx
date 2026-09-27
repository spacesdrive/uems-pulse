import { useId, useState, type FormEvent } from 'react';
import { CircleCheck, Lock, MessageCircle, Send, ShieldCheck, Timer } from 'lucide-react';
import { site, whatsappHref } from '@/data/site';
import { cn } from '@/lib/cn';
import { openExternal } from '@/lib/links';

const SOURCES = ['Google', 'Social Media', 'Newspaper', 'Friends/Relatives', 'Others'];
const QUERIES = ['Study Abroad', 'Migration', 'Career Counseling', 'External Exam (Coaching)'];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  source: string;
  query: string;
  message: string;
}

const empty: FormValues = { name: '', email: '', phone: '', source: '', query: '', message: '' };

function validate(v: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!v.name.trim()) errors.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'Please enter a valid email address.';
  if (v.phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a valid contact number.';
  return errors;
}

function compose(v: FormValues) {
  return [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Contact number: ${v.phone}`,
    v.source && `Heard about us via: ${v.source}`,
    v.query && `Query about: ${v.query}`,
    v.message && `\nQuestion:\n${v.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Enquiry form with the same fields as the UEMS site. With no backend attached, submitting
 * opens a pre-filled email to the UEMS inbox; WhatsApp is offered as an instant alternative.
 */
export function ContactForm({ title = "Let's Connect & Guide You Forward", compact }: { title?: string; compact?: boolean }) {
  const id = useId();
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormValues) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`${id}-${firstError}`)?.focus();
      return;
    }
    const subject = `Enquiry${values.query ? ` – ${values.query}` : ''} from ${values.name}`;
    openExternal(`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose(values))}`);
    setSent(true);
  };

  const field = 'mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/10';
  const label = 'text-sm font-medium text-ink';
  const errorText = (key: keyof FormValues) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-1.5 text-sm text-red-600">
        {errors[key]}
      </p>
    ) : null;
  const aria = (key: keyof FormValues) => ({
    id: `${id}-${key}`,
    'aria-invalid': Boolean(errors[key]) || undefined,
    'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined,
  });

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-4 p-8 text-center md:p-10" role="status">
        <span className="icon-circle size-14">
          <CircleCheck aria-hidden className="size-7" />
        </span>
        <h3 className="text-xl font-semibold">Your email is ready to send</h3>
        <p className="max-w-md text-muted">
          We opened your email app with your enquiry filled in. Press send and our team will respond within 24 hours. Prefer
          chatting? Reach us on WhatsApp instantly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a className="btn btn-primary" href={whatsappHref(compose(values))} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden className="size-4" /> Continue on WhatsApp
          </a>
          <button type="button" className="btn btn-outline" onClick={() => { setSent(false); setValues(empty); }}>
            New enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className={cn('card p-5 sm:p-8', compact && 'sm:p-6')} aria-label={title}>
      {title && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-muted">Send us a message and we&apos;ll respond within 24 hours.</p>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>
            Your name <span className="text-red-600">*</span>
          </label>
          <input {...aria('name')} className={field} autoComplete="name" value={values.name} onChange={set('name')} required />
          {errorText('name')}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Your email <span className="text-red-600">*</span>
          </label>
          <input {...aria('email')} type="email" className={field} autoComplete="email" value={values.email} onChange={set('email')} required />
          {errorText('email')}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Your contact number <span className="text-red-600">*</span>
          </label>
          <input {...aria('phone')} type="tel" inputMode="tel" className={field} autoComplete="tel" value={values.phone} onChange={set('phone')} required />
          {errorText('phone')}
        </div>
        <div>
          <label htmlFor={`${id}-source`} className={label}>
            Where did you hear about us
          </label>
          <select {...aria('source')} className={field} value={values.source} onChange={set('source')}>
            <option value="">Select an option</option>
            {SOURCES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-query`} className={label}>
            What is your query about
          </label>
          <select {...aria('query')} className={field} value={values.query} onChange={set('query')}>
            <option value="">Select an option</option>
            {QUERIES.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={label}>
            What is your question
          </label>
          <textarea {...aria('message')} rows={compact ? 3 : 4} className={cn(field, 'resize-y')} value={values.message} onChange={set('message')} />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-muted">
          <li className="inline-flex items-center gap-1.5"><ShieldCheck aria-hidden className="size-3.5 text-primary" />Secure</li>
          <li className="inline-flex items-center gap-1.5"><Lock aria-hidden className="size-3.5 text-primary" />Private</li>
          <li className="inline-flex items-center gap-1.5"><Timer aria-hidden className="size-3.5 text-primary" />Responds within 24hrs</li>
        </ul>
        <button type="submit" className="btn btn-primary btn-lg">
          Submit <Send aria-hidden className="btn-arrow size-4" />
        </button>
      </div>
    </form>
  );
}
