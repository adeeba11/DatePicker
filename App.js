import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  // Inline CSS styles
  const containerStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#51bd99',  // Light cyan background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const boxStyle = {
    backgroundColor: '#ffffff',  // White background for the box
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow
    padding: '20px',
    width: '100%',
    maxWidth: '360px',
    margin: '0 auto',  // Center the box
  };

  const titleStyle = {
    color: '#00796b',  // Dark teal color
    marginBottom: '20px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const datePickerStyle = {
    border: '2px solid #00796b',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.2s',
    outline: 'none',
    width: '100%',
  };

  const datePickerFocusStyle = {
    borderColor: '#004d40',  // Darker teal for focus
  };

  const dateDisplayStyle = {
    marginTop: '20px',
    color: '#004d40',  // Darker teal color
    fontSize: '1.2rem',
    fontWeight: 'normal',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Pick a Date</h1>
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a date"
          style={datePickerStyle}
          onFocus={(e) => e.target.style.borderColor = datePickerFocusStyle.borderColor}
          onBlur={(e) => e.target.style.borderColor = '#00796b'}
        />
        <div style={dateDisplayStyle}>
          {selectedDate && (
            <p>
              Selected Date: {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
