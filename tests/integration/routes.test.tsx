import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, expect, it } from 'vitest';
import { routes } from '@/router';
import { posts } from '@/data/posts';
import { contentPageSlugs } from '@/data/pages';

function renderApp(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  const { unmount } = render(<RouterProvider router={router} />);
  return Object.assign(router, { unmount });
}

const pageHeading = () => screen.findByRole('heading', { level: 1 }, { timeout: 5000 });

describe('app routes', () => {
  it.each(['/', '/contact-us', '/blogs', '/news-and-events', '/programs', '/career-clarity-tests', '/career-talk', '/career-guidance/career-assessment-test'])(
    'renders %s inside the layout with a single page heading',
    async (path) => {
      renderApp(path);
      await pageHeading();
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
      expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main');
      expect(screen.queryByText(/lost your way/i)).not.toBeInTheDocument();
    },
  );

  it('renders every data-driven content page', async () => {
    for (const slug of contentPageSlugs.filter((s) => s !== 'career-assessment-test')) {
      const app = renderApp(`/${slug}`);
      expect(await pageHeading(), slug).toBeInTheDocument();
      expect(screen.queryByText(/lost your way/i), slug).not.toBeInTheDocument();
      app.unmount();
    }
  }, 60_000);

  it('renders a blog post from its slug', async () => {
    const post = posts[0];
    renderApp(`/${post.slug}`);
    expect(await pageHeading()).toHaveTextContent(post.title);
  });

  it('redirects legacy slugs to their new pages', async () => {
    const router = renderApp('/usa');
    await pageHeading();
    expect(router.state.location.pathname).toBe('/study-in-usa');
  });

  it('shows the 404 page for unknown slugs and nested paths', async () => {
    const app = renderApp('/definitely-not-a-page');
    expect(await screen.findByRole('heading', { name: /lost your way/i })).toBeInTheDocument();
    expect(document.title).toMatch(/page not found/i);
    app.unmount();

    renderApp('/a/b/c');
    expect(await screen.findByRole('heading', { name: /lost your way/i })).toBeInTheDocument();
  });

  it('closes the mobile menu after navigating', async () => {
    const user = userEvent.setup();
    const router = renderApp('/');
    await pageHeading();
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    const menu = document.getElementById('mobile-menu')!;
    expect(menu).toHaveAttribute('inert');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(menu).not.toHaveAttribute('inert');

    await user.click(within(menu).getByRole('link', { name: 'Contact Us' }));
    // The router state updates before React commits the new page, so wait on the UI itself.
    await waitFor(() => expect(toggle).toHaveAttribute('aria-expanded', 'false'));
    expect(router.state.location.pathname).toBe('/contact-us');
    expect(toggle).toHaveAccessibleName('Open menu');
    expect(menu).toHaveAttribute('inert');
  });
});
