import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { whatsappHref } from '@/data/site';
import { cn } from '@/lib/cn';

function RouteProgress() {
  const navigation = useNavigation();
  const busy = navigation.state !== 'idle';
  return (
    <div
      aria-hidden
      className={cn(
        'fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-gold transition-all',
        busy ? 'scale-x-75 opacity-100 duration-[1.5s] ease-out' : 'scale-x-100 opacity-0 duration-300',
      )}
    />
  );
}

export function RootLayout() {
  const { pathname } = useLocation();
  useRevealObserver();

  return (
    <div id="app-root" className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <RouteProgress />
      <Header />
      <main id="main" key={pathname} className="flex-1 animate-page-in">
        <Outlet />
      </main>
      <Footer />
      <a
        href={whatsappHref('Hi UEMS Ventures, I would like to know more about your services.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      >
        <MessageCircle aria-hidden className="size-7" />
      </a>
      {/* The first entry of every document load is keyed "default"; key it by path so a new URL never inherits another page's scroll. */}
      <ScrollRestoration getKey={(location) => (location.key === 'default' ? location.pathname : location.key)} />
    </div>
  );
}
