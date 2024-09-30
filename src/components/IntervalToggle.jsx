

import React from 'react';

const IntervalToggle = ({ setInterval }) => {
  const handleSelect = (event) => {
    setInterval(event.target.value); // Update interval in App state
  };

  return (
    <select onChange={handleSelect} className="p-2 rounded">
      <option value="1m">1 Minute</option>
      <option value="3m">3 Minutes</option>
      <option value="5m">5 Minutes</option>
    </select>
  );
};

export default IntervalToggle;
