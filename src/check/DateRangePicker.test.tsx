import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DateRangePicker from './DateRangePicker';

describe('DateRangePicker', () => {
  it('renders the component', () => {
    render(<DateRangePicker onStartDateChange={() => {}} onEndDateChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Select Date Range');
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
