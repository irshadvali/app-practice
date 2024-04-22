import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FullScreen.css';

interface DatePickerProps {
  onDateChange: (date: Date | null) => void;
}

const SingleDatePicker = forwardRef<any, DatePickerProps>(({ onDateChange }, ref) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const datepickerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date);
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
    return date ? date.toLocaleDateString('en-GB') : '';
  };

  const selectedDateString = formatDate(selectedDate);

  useImperativeHandle(ref, () => ({
    clearDate() {
      setSelectedDate(null);
      onDateChange(null);
    }
  }));

  return (
    <div ref={datepickerRef}>
      <input
        style={{ height: "40px", width: "250px", textAlign: 'center' }}
        type="text"
        onFocus={toggleDatePicker}
        ref={inputRef}
        value={selectedDateString || ''}
        placeholder="Select Date"
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
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            placeholderText="Select Date"
            dateFormat="MM/dd/yyyy"
            showPopperArrow={false}
          />
        </div>
      )}
    </div>
  );
});

export default SingleDatePicker;
