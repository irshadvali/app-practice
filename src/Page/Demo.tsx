import React, { useState, useRef, useEffect } from 'react';
import DateRangePicker from './DateRangePicker';
import SingleDatePicker from './SingleDatePicker';
import Header from '../Header/Header';
import logo from '../image/three.png'
import HeaderTwo from '../Header/HeaderTwo';
import ReviewWindow from '../component/ReviewWindow';
const Demo: React.FC = () => {
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const [buttonPosition, setButtonPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);


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

      const handleSingleDate =(date: Date | null)=>{
        console.log("======",formatDate(date));

      }
    const formatDate = (date: Date | null): string => {
        return date ? date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : '';
      };


      const handleButtonClick = () => {
        if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            setButtonPosition({ top: buttonRect.top, left: buttonRect.left });
            setIsReviewOpen(true);
        }
    };

    useEffect(() => {
        if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            setButtonPosition({ top: buttonRect.top, left: buttonRect.left });
        }
    }, []);
  return (
    <div>
       {/* <Header logoSrc={logo} /> */}
       <HeaderTwo></HeaderTwo>
      <h1>Select Date Range</h1>
        <DateRangePicker
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        ref={dateRangePickerRef}
      />
      {/* {!isValid && <p style={{ color: 'red' }}>End date must be after start date</p>}
      <button onClick={handleSubmit} disabled={!isValid}>Submit</button> */}
      <p>Start Date: {startDate ? startDate.toLocaleDateString('en-GB') : 'Not selected'}</p>
      <p>End Date: {endDate ? endDate.toLocaleDateString('en-GB') : 'Not selected'}</p>
      <button onClick={handleClearDates}>Clear Dates</button>
      <SingleDatePicker onDateChange={handleSingleDate}></SingleDatePicker>

      <div style={{marginTop:"200px", marginLeft: '200px'}}>
            <button ref={buttonRef} onClick={handleButtonClick}>Open Review Window</button>
            {isReviewOpen && <ReviewWindow onClose={() => setIsReviewOpen(false)} buttonPosition={buttonPosition} />}
        </div>
    </div>
  );
};

export default Demo;
