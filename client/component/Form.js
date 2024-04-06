import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    tutor_name: '',
    available_date: '',
    available_time: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend

      const response = await axios.post('/api', formData);
      //   console.log('response',)
      console.log('Data saved successfully:', response.data);
      console.log('Data saved successfully:', response);

      // Optionally, you can reset the form after successful submission
      setFormData({
        tutor_name: '',
        available_date: '',
        available_time: '',
      });
    } catch (error) {
      console.error('Error saving data:', error, 'EEEE:', e);
    }
  };
  // Time selection array
  const timeList = [
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];
  return (
    <div>
      <button
        className="button"
        id="tutorAddSlot"
        onClick={() => setShowForm(true)}
      >
        I am available !
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Tutor Name:
            <input
              type="text"
              name="tutor_name"
              value={formData.tutor_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Available Date:
            <input
              type="text"
              name="available_date"
              value={formData.available_date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Available Time:
            {/* <select name="available_time">
              {timeList.map((available_time) => (
                <option
                  key={available_time.Id}
                  value={formData.available_time}
                  onChange={handleInputChange}
                >
                  {available_time}
                </option>
              ))}
            </select> */}
            <input
              type="text"
              name="available_time"
              value={formData.available_time}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
