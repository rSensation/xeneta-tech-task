import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Header from '../Header';

describe('Header Component', () => {
  test('renders with title', () => {
    render(<Header title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('does not render the text without title', () => {
    render(<Header />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
