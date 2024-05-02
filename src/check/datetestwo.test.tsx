import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { forwardRef } from 'react';
import DateRangePicker from './DateRangePicker'; // Assuming your DateRangePicker component is in a separate file

// Mocking the react-datepicker module
jest.mock('react-datepicker', () => {
  const MockDatePicker = forwardRef(({ selected, onChange }: { selected: Date | null; onChange: (date: Date | null) => void }, ref) => {
    return (
      <div data-testid="datepicker">
        <input type="text" value={selected?.toLocaleDateString()} onChange={() => {}} placeholder="Select Date Range" />
        <button onClick={() => onChange(null)}>Clear</button>
      </div>
    );
  });
  return MockDatePicker;
});

describe('DateRangePicker', () => {
  it('renders the component', () => {
    render(<DateRangePicker onStartDateChange={() => {}} onEndDateChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Select Date Range');
    expect(inputElement).toBeInTheDocument();
  });

  // Additional tests...
});
