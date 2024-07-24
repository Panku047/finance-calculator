// src/DatePicker.js
import React from 'react';
import './DatePicker.css';

const DatePicker = ({labelName, onInputChange, currentValue}) => {

  const handleDateChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div className="date-picker-container">
      <label htmlFor="date-picker" className="date-picker-label">{labelName}</label>
      <input
        type="date"
        id="date-picker"
        value={currentValue}
        onChange={handleDateChange}
        className="date-picker-input"
      />
    </div>
  );
};

export default DatePicker;
