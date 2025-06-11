import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataTable from '../DataTable';

describe('DataTable Component', () => {
  const mockProps = {
    data: [
      { mod3: 0, mod4: 1 },
      { mod3: 1, mod4: 2 },
      { mod3: 2, mod4: 3 },
    ],
    columns: [
      { name: 'mod3', selector: (row: any) => row.mod3, sortable: true },
      { name: 'mod4', selector: (row: any) => row.mod4, sortable: true },
    ],
    currentPage: 1,
    totalRows: 3,
    rowsPerPage: 10,
    onPageChange: jest.fn(),
  };

  it('renders table with correct number of rows', () => {
    const { getAllByRole } = render(<DataTable {...mockProps} />);
    const rows = getAllByRole('row');
    // Add 1 for header row
    expect(rows.length).toBe(mockProps.data.length + 1);
  });

  it('renders table with correct number of columns', () => {
    const { getAllByRole } = render(<DataTable {...mockProps} />);
    const headers = getAllByRole('columnheader');
    expect(headers.length).toBe(mockProps.columns.length);
  });

  it('displays correct data in cells', () => {
    const { getByText } = render(<DataTable {...mockProps} />);
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });

  it('calls onPageChange when pagination is clicked', () => {
    const { getByRole } = render(<DataTable {...mockProps} />);
    const nextButton = getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(mockProps.onPageChange).toHaveBeenCalled();
  });

  it('renders with correct pagination info', () => {
    const { getByText } = render(<DataTable {...mockProps} />);
    expect(getByText(/1-3 of 3/i)).toBeInTheDocument();
  });
}); 