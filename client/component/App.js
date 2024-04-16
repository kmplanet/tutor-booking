import React, { useState, useEffect, Component } from 'react';

import axios from 'axios';
import FormComponent from './/Form.js';
// import BookingComponent from './/BookingForm.js';
import AllSlots from './/Allslots.js';

const App = () => {
  // const list = ['Tutor A', 'Tutor B', 'Tutor C'];
  // const listMap = list.map((el, index) => {
  //   return (
  //     <h3>
  //       {el} <button className="button"> Make a booking 📖 </button>
  //     </h3>
  //   );
  // });
  // console.log(listMap);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api');
      setData(response.data.allData);
    } catch (err) {
      console.error('Error fetching data in App.js:', err);
    }
  };
  return (
    <div>
      {/* <h2>Our Tutors</h2> */}
      {/* {listMap} */}
      <hr></hr>

      {/* <InputField /> */}
      <hr></hr>
      <AllSlots fetchData={fetchData} setData={setData} data={data} />
      <hr></hr>

      <TutorAddSlotsArea />
      <FormComponent />
    </div>
  );
};

const TutorAddSlotsArea = () => {
  return (
    <div>
      <br></br>
      <b>If you are a tutor and wants to share your available slots, click: </b>
      {/* <button className="button" id="tutorAddSlot">
        {' '}
        here !{' '}
      </button> */}
    </div>
  );
};

// const InputField = () => {
//   return (
//     <div>
//       PLACEHOLDER <button className="button"> here ! </button>
//     </div>
//   );
// };

// const AllSlots = ({ fetchData }) => {
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
//   const [data, setData] = useState([]);
//   //states for book button:
//   const [seen, setSeen] = useState(false);

//   const togglePop = (slotId) => {
//     setSeen(!seen);
//     setSelectedSlotId(slotId);
//   };

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get('/api'); // Use '/api' as the base URL
//   //       setData(response.data.allData);
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   // Date and Time formatting
//   const formatDate = (dateString) => {
//     return dateString.slice(0, 10); // Trim the date string to display only YYYY-MM-DD
//   };
//   const formatTime = (dateString) => {
//     return dateString.slice(0, 5); // Trim the date string to display only YYYY-MM-DD
//   };

//   const allSlotsData = data.map((slot) => {
//     return (
//       <tr key={slot._id}>
//         {/* <td>{slot.id}</td> */}
//         <td>{slot.tutor_name}</td>
//         <td>{formatDate(slot.available_date)}</td>
//         <td>{formatTime(slot.available_time)}</td>
//         {/* <div> */}
//         {slot.booked === true ? (
//           <td className="no">No</td>
//         ) : (
//           <td id="yes">Yes</td>
//         )}
//         {/* </div> */}
//         <td>{slot.student_name}</td>
//         {slot.booked === true ? (
//           <td>-</td>
//         ) : (
//           <td>
//             <button
//               className="button"
//               key={slot._id}
//               onClick={() => togglePop(slot._id)}
//               name="_id"
//             >
//               Book Me
//             </button>
//             {/* {seen ? <BookingComponent toggle={togglePop} /> : null} */}
//             {seen && selectedSlotId === slot._id && (
//               <BookingComponent toggle={togglePop} slotId={slot._id} />
//             )}
//           </td>
//         )}
//       </tr>
//     );
//   });
//   return (
//     <div>
//       <h1>Tutor Slots</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             {/* <th scope="col">ID</th> */}
//             <th scope="col">Tutor</th>
//             <th scope="col">Date</th>
//             <th scope="col">Time</th>
//             <th scope="col">Available</th>
//             <th scope="col">Student Name</th>
//             <th scope="col">Book Now!</th>
//           </tr>
//         </thead>
//         <tbody>{allSlotsData}</tbody>
//       </table>
//     </div>
//   );
// };
export default App;
