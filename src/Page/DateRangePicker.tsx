import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./FullScreen.css"
import enGB from 'date-fns/locale/en-GB';
// registerLocale('en-GB', enGB);
const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const datepickerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
   const SformattedDate = startDate && startDate.toLocaleDateString('en-GB');
   const EformattedDate = endDate && endDate.toLocaleDateString('en-GB');
  const selectedDates = SformattedDate && EformattedDate ? `${SformattedDate} - ${EformattedDate}` : '';
  console.log("----",SformattedDate)
  return (
    <div ref={datepickerRef}>
      <input
        type="text"
        onFocus={toggleDatePicker}
        ref={inputRef}
        value={selectedDates}
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
};

export default DateRangePicker;
