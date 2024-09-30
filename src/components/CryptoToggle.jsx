

import React from 'react';

const CryptoToggle = ({ setSymbol }) => {
  const handleSelect = (event) => {
    setSymbol(event.target.value); // Update symbol in App state
  };

  return (
    <select onChange={handleSelect} className="p-2 rounded">
      <option value="ethusdt">ETH/USDT</option>
      <option value="bnbusdt">BNB/USDT</option>
      <option value="dotusdt">DOT/USDT</option>
    </select>
  );
};

export default CryptoToggle;
