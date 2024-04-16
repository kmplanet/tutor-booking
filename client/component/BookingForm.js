import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';

const BookingComponent = (props) => {
  const [bookFormData, setBookFormData] = useState({
    student_name: '',
    booked: false,
    _id: props.slotId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookFormData({
      ...bookFormData,
      [name]: value,
      booked: true,
    });
  };
  const handleSubmit = () => {
    setBookFormData({
      ...bookFormData,
      booked: true,
    });
  };
  const handleBooking = async (e) => {
    console.log('e', e);
    console.log('bookFormData', bookFormData);

    e.preventDefault();
    try {
      const response = await axios.post('/api/booking', bookFormData);
      console.log('Booking made successfully:', response.data);
    } catch (err) {
      console.error('error making booking', err);
    }
    props.toggle();
    handleSubmit();

    console.log('e', e);
    console.log('bookFormData', bookFormData);
  };

  return (
    <div>
      {/* <h3>Confirm booking</h3> */}
      <form onSubmit={handleBooking}>
        <label>
          Student name:
          <input
            type="text"
            name="student_name"
            value={bookFormData.student_name}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          name="booked"
          value={bookFormData.booked}
          key={props.key}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingComponent;
