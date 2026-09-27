import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ContactForm } from '@/components/ContactForm';
import { openExternal } from '@/lib/links';

vi.mock('@/lib/links', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/links')>()),
  openExternal: vi.fn(),
}));

describe('ContactForm', () => {
  beforeEach(() => vi.mocked(openExternal).mockClear());

  it('flags every missing required field and focuses the first one', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid contact number.')).toBeInTheDocument();
    const name = screen.getByLabelText(/your name/i);
    expect(name).toHaveAttribute('aria-invalid', 'true');
    expect(name).toHaveAccessibleDescription('Please enter your name.');
    expect(name).toHaveFocus();
    expect(openExternal).not.toHaveBeenCalled();
  });

  it('clears a field error as soon as the user edits it', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole('button', { name: /submit/i }));

    await user.type(screen.getByLabelText(/your name/i), 'A');

    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  it('rejects malformed emails and short phone numbers', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/your name/i), 'Asha');
    await user.type(screen.getByLabelText(/your email/i), 'asha@example');
    await user.type(screen.getByLabelText(/contact number/i), '98765');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByLabelText(/your email/i)).toHaveFocus();
    expect(screen.getByText('Please enter a valid contact number.')).toBeInTheDocument();
    expect(openExternal).not.toHaveBeenCalled();
  });

  it('opens a pre-filled email and offers WhatsApp once valid', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/your name/i), 'Asha Rao');
    await user.type(screen.getByLabelText(/your email/i), 'asha@example.com');
    await user.type(screen.getByLabelText(/contact number/i), '+91 98765 43210');
    await user.selectOptions(screen.getByLabelText(/query about/i), 'Migration');
    await user.type(screen.getByLabelText(/your question/i), 'PR options & timelines?');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(openExternal).toHaveBeenCalledTimes(1);
    const mailto = new URL(vi.mocked(openExternal).mock.calls[0][0]);
    expect(mailto.protocol).toBe('mailto:');
    expect(mailto.searchParams.get('subject')).toBe('Enquiry – Migration from Asha Rao');
    expect(mailto.searchParams.get('body')).toContain('Email: asha@example.com');
    expect(mailto.searchParams.get('body')).toContain('PR options & timelines?');

    expect(screen.getByRole('status')).toHaveTextContent(/your email is ready to send/i);
    const whatsapp = screen.getByRole('link', { name: /continue on whatsapp/i });
    expect(whatsapp).toHaveAttribute('rel', 'noopener noreferrer');

    await user.click(screen.getByRole('button', { name: /new enquiry/i }));
    expect(screen.getByLabelText(/your name/i)).toHaveValue('');
  });
});
