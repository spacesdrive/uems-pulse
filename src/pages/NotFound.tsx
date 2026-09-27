import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Compass } from 'lucide-react';
import { Button } from '@/components/Button';
import { Seo } from '@/components/Seo';

export default function NotFound() {
  const error = useRouteError();
  const is404 = !error || (isRouteErrorResponse(error) && error.status === 404);
  return (
    <section className="hero-gradient flex min-h-[80vh] items-center px-4 pt-32 pb-20 text-white">
      <Seo title={is404 ? 'Page not found' : 'Something went wrong'} />
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white text-primary shadow-lg">
          <Compass aria-hidden className="size-8" />
        </span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{is404 ? 'Lost your way?' : 'Something went wrong'}</h1>
        <p className="mt-4 text-lg text-white">
          {is404
            ? "The page you're looking for doesn't exist or has moved. Let's chart a new course."
            : 'An unexpected error occurred. Please try again or head back home.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button label="Back to Home" href="/" variant="white" size="lg" />
          <Button label="Contact Us" href="/contact-us" variant="ghost" size="lg" arrow={false} />
        </div>
      </div>
    </section>
  );
}
