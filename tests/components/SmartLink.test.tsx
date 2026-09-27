import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router';
import { describe, expect, it } from 'vitest';
import { SmartLink } from '@/components/SmartLink';

function Where() {
  return <p data-testid="path">{useLocation().pathname}</p>;
}

function renderInRouter(ui: React.ReactNode) {
  const router = createMemoryRouter([{ path: '*', element: <>{ui}<Where /></> }]);
  return render(<RouterProvider router={router} />);
}

describe('SmartLink', () => {
  it('navigates client-side for internal paths', async () => {
    const user = userEvent.setup();
    renderInRouter(<SmartLink href="/contact-us">Contact</SmartLink>);
    const link = screen.getByRole('link', { name: 'Contact' });
    expect(link).not.toHaveAttribute('target');

    await user.click(link);
    expect(screen.getByTestId('path')).toHaveTextContent('/contact-us');
  });

  it('opens web links in a new tab without leaking the opener', () => {
    renderInRouter(<SmartLink href="https://wa.me/919833808612">WhatsApp</SmartLink>);
    const link = screen.getByRole('link', { name: 'WhatsApp' });
    expect(link).toHaveAttribute('href', 'https://wa.me/919833808612');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('keeps mailto, tel and anchor links in the same tab', () => {
    renderInRouter(
      <>
        <SmartLink href="mailto:info@uemsventures.com">Email</SmartLink>
        <SmartLink href="tel:+919833808612">Call</SmartLink>
        <SmartLink href="#faq">FAQ</SmartLink>
      </>,
    );
    for (const name of ['Email', 'Call', 'FAQ']) expect(screen.getByRole('link', { name })).not.toHaveAttribute('target');
  });
});
