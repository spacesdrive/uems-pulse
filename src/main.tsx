import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import '@fontsource-variable/geist';
import './styles/index.css';
import { router } from './router';

// Static fallbacks in index.html serve no-JS crawlers; each page renders its own tags once the app runs.
document.querySelectorAll('head [data-default]').forEach((el) => el.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
