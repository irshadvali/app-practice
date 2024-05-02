import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { forwardRef } from 'react';

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
    // Debugging information
    const inputElement = screen.getByPlaceholderText('Select Date Range');
    if (!inputElement) {
      const allInputs = screen.getAllByRole('textbox');
      console.log('All input elements:', allInputs);
    }
    // Assertion
    expect(inputElement).toBeInTheDocument();
  });

  it('opens the date picker when the input is clicked', () => {
    render(<DateRangePicker onStartDateChange={() => {}} onEndDateChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Select Date Range');
    fireEvent.focus(inputElement);
    const datePickerElement = screen.getByTestId('datepicker');
    expect(datePickerElement).toBeInTheDocument();
  });

  it('clears selected dates when clearDates is called', () => {
    const handleStartDateChange = jest.fn();
    const handleEndDateChange = jest.fn();
    const { rerender } = render(
      <DateRangePicker onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange} />
    );

    fireEvent.focus(screen.getByPlaceholderText('Select Date Range'));
    fireEvent.click(screen.getByText('Clear'));
    rerender(
      <DateRangePicker onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange} />
    );

    expect(handleStartDateChange).toHaveBeenCalledWith(null);
    expect(handleEndDateChange).toHaveBeenCalledWith(null);
  });
});


it('clears selected dates when clearDates is called 2', () => {
    const handleStartDateChange = jest.fn();
    const handleEndDateChange = jest.fn();
    const { rerender } = render(
      <DateRangePicker onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange} />
    );
  
    fireEvent.focus(screen.getByPlaceholderText('Select Date Range'));
    fireEvent.click(screen.getByText('Clear'));
    rerender(
      <DateRangePicker onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange} />
    );
  
    console.log('Handle start date change calls:', handleStartDateChange.mock.calls);
    console.log('Handle end date change calls:', handleEndDateChange.mock.calls);
  
    expect(handleStartDateChange).toHaveBeenCalledWith(null);
    expect(handleEndDateChange).toHaveBeenCalledWith(null);
  });
