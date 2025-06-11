import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from '../Filter';

describe('Filter Component', () => {
  const mockProps = {
    columnName: 'mod3',
    options: [
      { id: 0, text: '0' },
      { id: 1, text: '1' },
      { id: 2, text: '2' },
    ],
    selectedValues: [0, 1],
    onFilterChange: jest.fn(),
  };

  it('renders with correct column name', () => {
    const { getByText } = render(<Filter {...mockProps} />);
    expect(getByText('mod3')).toBeInTheDocument();
  });

  it('renders with correct placeholder', () => {
    const { getByPlaceholderText } = render(<Filter {...mockProps} />);
    expect(getByPlaceholderText('Select mod3')).toBeInTheDocument();
  });

  it('displays selected values', () => {
    const { getByText } = render(<Filter {...mockProps} />);
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });

  it('calls onFilterChange when selection changes', () => {
    const { getByText } = render(<Filter {...mockProps} />);
    // Note: This is a simplified test as the actual multiselect component
    // might require more complex interaction simulation
    fireEvent.click(getByText('2'));
    expect(mockProps.onFilterChange).toHaveBeenCalled();
  });

  it('renders in disabled state when disabled prop is true', () => {
    const { container } = render(<Filter {...mockProps} disabled={true} />);
    const multiselect = container.querySelector('.multiselect-container');
    expect(multiselect).toHaveClass('disabled');
  });
}); 