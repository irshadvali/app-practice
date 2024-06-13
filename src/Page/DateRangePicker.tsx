import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './FullScreen.css'
import DatePicker from "react-datepicker"
interface DateRangePickerProps {
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const DateRangePicker = forwardRef<any, DateRangePickerProps>(({ onStartDateChange, onEndDateChange }, ref) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const datepickerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    console.log('===============',start);
    setStartDate(start);
    setEndDate(end);
    onStartDateChange(start);
    onEndDateChange(end);
  };

  const toggleDatePicker = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (datepickerRef.current && !datepickerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatDate = (date: Date | null): string => {
    return date ? date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : '';
  };

  const selectedDates = startDate && endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}`: 'MM/DD/YYYY-MM/DD/YYYY';

  useImperativeHandle(ref, () => ({
    clearDates() {
      setStartDate(null);
      setEndDate(null);
      onStartDateChange(null);
      onEndDateChange(null);
    }
  }));

  return (
    <div ref={datepickerRef}>
      <input
        className='inputSt'
        type="text"
        onFocus={toggleDatePicker}
        ref={inputRef}
        value={selectedDates || ''}
        placeholder="Select Date Range"
        readOnly
        onMouseDown={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
          toggleDatePicker();
        }}
      />
      {open && (
        <div>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            placeholderText="Select Date Range"
            dateFormat="MM/dd/yyyy"
            showPopperArrow={false}
          />
        </div>
      )}
    </div>
  );
});

export default DateRangePicker;
