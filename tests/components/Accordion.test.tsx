import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Accordion } from '@/components/Accordion';

const items = [
  { q: 'Do you help with visas?', a: 'Yes, end to end.' },
  { q: 'Is IELTS coaching offered?', a: 'Yes, in small batches.' },
];

describe('Accordion', () => {
  it('opens the first item by default and wires button/panel relationships', () => {
    render(<Accordion items={items} />);
    const [first, second] = screen.getAllByRole('button');
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'false');
    const panel = document.getElementById(first.getAttribute('aria-controls')!);
    expect(panel).toHaveAccessibleName(items[0].q);
  });

  it('keeps only one item open at a time and can close all', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    const [first, second] = screen.getAllByRole('button');

    await user.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(first).toHaveAttribute('aria-expanded', 'false');

    await user.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'false');
  });

  it('makes collapsed answers inert so they are skipped by keyboard and screen readers', () => {
    render(<Accordion items={items} defaultOpen={null} />);
    for (const button of screen.getAllByRole('button')) {
      const panel = document.getElementById(button.getAttribute('aria-controls')!)!;
      expect(panel.firstElementChild).toHaveAttribute('inert');
    }
  });
});
