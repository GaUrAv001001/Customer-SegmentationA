// code 4

import React, { useState } from 'react';
import axios from 'axios';
import './CustomsegA.css';

const CustomsegA = () => {
  const [dataA, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [targetValue, setTargetValue] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (buttonValue) => {
    setTargetValue(buttonValue);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8800/CustomsegAWithPercentage/${buttonValue}`);
      setPercentage(response.data.percentage);
      setData(response.data.data);
    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error(err);
    } finally {
    }
  };

  return (
    <div>
      <div className='btn-data-a'>
        <button
          className='btn-data'
          onClick={() => fetchData(0)} // Set targetValue to 0 when Button 1 is clicked
        >
          High
        </button>
        <button
          className='btn-data'
          onClick={() => fetchData(1)} // Set targetValue to 1 when Button 2 is clicked
        >
          Low
        </button>
        <button
          className='btn-data'
          onClick={() => fetchData(2)} // Set targetValue to 2 when Button 1 is clicked
        >
          Medium
        </button>
      </div>
      {error && <p>Error: {error}</p>}
      <p className='perc'>Data Percentage: {percentage}%</p>
      {targetValue !== null && dataA.length > 0 && (
        <div className='ext-data'>
          <ul className='ul-ext'>
            {dataA.map((item) => (
              <li className='li-ext' key={item.ID}>{item.Names}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomsegA;








