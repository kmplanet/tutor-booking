import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import BookingComponent from './/BookingForm.js';

const AllSlots = ({ fetchData, setData, data }) => {
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  //states for book button:
  const [seen, setSeen] = useState(false);

  const togglePop = (slotId) => {
    setSeen(!seen);
    setSelectedSlotId(slotId);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api'); // Use '/api' as the base URL
  //       setData(response.data.allData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Date and Time formatting
  const formatDate = (dateString) => {
    return dateString.slice(0, 10); // Trim the date string to display only YYYY-MM-DD
  };
  const formatTime = (dateString) => {
    return dateString.slice(0, 5); // Trim the date string to display only YYYY-MM-DD
  };

  const allSlotsData = data.map((slot) => {
    return (
      <tr key={slot._id}>
        {/* <td>{slot.id}</td> */}
        <td>{slot.tutor_name}</td>
        <td>{formatDate(slot.available_date)}</td>
        <td>{formatTime(slot.available_time)}</td>
        {/* <div> */}
        {slot.booked === true ? (
          <td className="no">No</td>
        ) : (
          <td id="yes">Yes</td>
        )}
        {/* </div> */}
        <td>{slot.student_name}</td>
        {slot.booked === true ? (
          <td>-</td>
        ) : (
          <td>
            <button
              className="button"
              key={slot._id}
              onClick={() => togglePop(slot._id)}
              name="_id"
            >
              Book Me
            </button>
            {/* {seen ? <BookingComponent toggle={togglePop} /> : null} */}
            {seen && selectedSlotId === slot._id && (
              <BookingComponent toggle={togglePop} slotId={slot._id} />
            )}
          </td>
        )}
      </tr>
    );
  });
  return (
    <div>
      <h1>Tutor Slots</h1>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Tutor</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Available</th>
            <th scope="col">Student Name</th>
            <th scope="col">Book Now!</th>
          </tr>
        </thead>
        <tbody>{allSlotsData}</tbody>
      </table>
    </div>
  );
};

export default AllSlots;
