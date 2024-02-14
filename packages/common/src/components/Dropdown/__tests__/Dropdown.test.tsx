import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import { describe, expect, test, vi } from 'vitest';

import Dropdown from '../Dropdown';

describe('Dropdown Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  test('renders with placeholder', () => {
    const placeholder = 'Test placeholder';
    render(<Dropdown placeholder={placeholder} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  test('renders options', () => {
    render(<Dropdown options={options} />);
    selectEvent.openMenu(screen.getByRole('combobox'));
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test('calls onChange when an option is selected', async () => {
    const handleChange = vi.fn();
    render(<Dropdown options={options} onChange={handleChange} />);

    await selectEvent.select(screen.getByRole('combobox'), options[0].label);
    expect(handleChange).toHaveBeenCalledWith(options[0].value);
  });

  test('applies className prop', () => {
    const className = 'test-class';
    const { container } = render(<Dropdown className={className} />);

    const dropdown = container.children[0];
    expect(dropdown.classList.contains(className)).toBe(true);
  });
});
