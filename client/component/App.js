import React, { useState, useEffect, Component } from 'react';

import axios from 'axios';

const App = () => {
  const list = ['Tutor A', 'Tutor B', 'Tutor C'];
  const listMap = list.map((el, index) => {
    return (
      <h3>
        {el} <button className="button"> Make a booking 📖 </button>
      </h3>
    );
  });
  console.log(listMap);
  return (
    <div>
      <h2>Time slots</h2>
      {listMap}
      <hr></hr>
      <Content2 />
      <InputField />
      <hr></hr>
      <MyComponent />
    </div>
  );
};

const Content2 = () => {
  return (
    <div>
      If you are a tutor and wants to share your available slots, click{'     '}
      <button className="button"> here ! </button>
    </div>
  );
};

const InputField = () => {
  return (
    <div>
      PLACEHOLDER <button className="button"> here ! </button>
    </div>
  );
};
const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api'); // Use '/api' as the base URL
        setData(response.data.allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const formatDate = (dateString) => {
    return dateString.slice(0, 10); // Trim the date string to display only YYYY-MM-DD
  };

  const formatTime = (dateString) => {
    return dateString.slice(0, 5); // Trim the date string to display only YYYY-MM-DD
  };

  return (
    <div>
      <h1>Tutor Slots</h1>
      <ul>
        {data.map((slot) => (
          <li key={slot.id}>
            <p>Tutor Name: {slot.tutor_name}</p>
            <p>Date: {formatDate(slot.available_date)}</p>
            <p>Date: {formatTime(slot.available_time)}</p>
            <p>
              Available? :{' '}
              {slot.booked === true ? (
                <span id="no">No</span>
              ) : (
                <span id="yes">Yes</span>
              )}
            </p>
            <p>Student Name: {slot.student_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
