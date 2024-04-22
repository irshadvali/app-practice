import React, { useState, useRef } from 'react';
import DateRangePicker from './DateRangePicker';
import SingleDatePicker from './SingleDatePicker';
const Demo: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isValid, setIsValid] = useState<boolean>(true);
    const dateRangePickerRef = useRef<any>(null);
    const handleStartDateChange = (date: Date | null) => {
      setStartDate(date);
      setIsValid(!!date && !!endDate && date <= endDate);
    };
  
    const handleEndDateChange = (date: Date | null) => {
      setEndDate(date);
      setIsValid(!!startDate && !!date && startDate <= date);
    };
  
    const handleSubmit = () => {
      // Handle submission if both dates are valid
      if (isValid) {
        // Perform action
      }
    };
  
    const handleClearDates = () => {
        setStartDate(null);
    setEndDate(null);
    setIsValid(true);
    if (dateRangePickerRef.current) {
      dateRangePickerRef.current.clearDates();
    }
      };
  return (
    <div>
      <h1>Select Date Range</h1>
        {/* <DateRangePicker
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        ref={dateRangePickerRef}
      /> */}
      {/* {!isValid && <p style={{ color: 'red' }}>End date must be after start date</p>}
      <button onClick={handleSubmit} disabled={!isValid}>Submit</button> */}
      <p>Start Date: {startDate ? startDate.toLocaleDateString('en-GB') : 'Not selected'}</p>
      <p>End Date: {endDate ? endDate.toLocaleDateString('en-GB') : 'Not selected'}</p>
      <button onClick={handleClearDates}>Clear Dates</button>
      <SingleDatePicker onDateChange={(d)=>{console.log(d)}}></SingleDatePicker>
    </div>
  );
};

export default Demo;
