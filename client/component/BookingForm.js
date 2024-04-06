import { Axios } from 'axios';
import React, { useState, useEffect, Component } from 'react';

const BookingComponent = (props) => {
  const [bookFormData, setBookFormData] = useState({
    student_name: '',
    booked: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookFormData({
      ...bookFormData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setBookFormData({
      ...bookFormData,
      booked: true,
    });
  };
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('/booking', bookFormData);
      console.log('Booking made successfully:', response.data);
    } catch (err) {
      console.error('error making booking', err);
    }
    props.toggle();
  };

  return (
    <div>
      <h1>Confirm booking</h1>
      <form onSubmit={handleBooking}></form>
      <label>
        Student name:
        <input
          type="text"
          name="student_name"
          value={bookFormData.student_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Booking ?
        <button
          type="submit"
          name="booked"
          value={bookFormData.booked}
          onClick={handleSubmit}
        ></button>
      </label>
    </div>
  );
};

export default BookingComponent;
