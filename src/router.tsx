import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router';
import { RootLayout } from '@/layouts/RootLayout';
import NotFound from '@/pages/NotFound';

/**
 * Every page is a lazily loaded route module, so the initial bundle only carries the shell
 * (layout, header, footer) plus whatever the first page needs.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <div className="min-h-dvh" />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, lazy: () => import('@/pages/Home') },
          { path: 'blogs', lazy: () => import('@/pages/Blogs') },
          { path: 'news-and-events', lazy: () => import('@/pages/NewsEvents') },
          { path: 'category/:category', lazy: () => import('@/pages/Category') },
          { path: 'contact-us', lazy: () => import('@/pages/Contact') },
          { path: 'programs', lazy: () => import('@/pages/Programs') },
          { path: 'career-clarity-tests', lazy: () => import('@/pages/CareerClarityTests') },
          { path: 'career-talk', lazy: () => import('@/pages/CareerTalk') },
          {
            path: 'career-guidance/career-assessment-test',
            lazy: async () => {
              const mod = await import('@/pages/SlugPage');
              return {
                Component: mod.Component,
                loader: (args: LoaderFunctionArgs) => mod.loader({ ...args, params: { slug: 'career-assessment-test' } }),
              };
            },
          },
          { path: ':slug', lazy: () => import('@/pages/SlugPage') },
          { path: '*', Component: NotFound },
        ],
      },
    ],
  },
]);
