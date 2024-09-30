

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CryptoToggle from './components/CryptoToggle';
import IntervalToggle from './components/IntervalToggle';
import CandlestickChart from './components/CandlestickChart';

const App = () => {
  const [symbol, setSymbol] = useState('ethusdt'); // Default cryptocurrency
  const [interval, setInterval] = useState('1m'); // Default interval
  const [chartData, setChartData] = useState([]); // Chart data state

  // Load saved chart data from localStorage when the symbol changes
  useEffect(() => {
    const savedData = localStorage.getItem(`${symbol}-chartData`);
    if (savedData) {
      setChartData(JSON.parse(savedData)); // Load saved data from localStorage
    } else {
      setChartData([]); // Clear data if no saved data found
    }
  }, [symbol]);

  // WebSocket connection for receiving live data
  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const candlestick = data.k;

      // Add new candlestick data and update localStorage
      setChartData((prevData) => {
        const newData = [
          ...prevData,
          {
            time: new Date(candlestick.t).toLocaleTimeString(), // Format time
            price: parseFloat(candlestick.c), // Get the close price and ensure it's a number
          },
        ];
        localStorage.setItem(`${symbol}-chartData`, JSON.stringify(newData)); // Save to localStorage
        return newData;
      });
    };

    return () => {
      ws.close(); // Close WebSocket when component unmounts or symbol/interval changes
    };
  }, [symbol, interval]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Binance Market Data</h1>
        <CryptoToggle setSymbol={setSymbol} />
        <IntervalToggle setInterval={setInterval} />
        <CandlestickChart chartData={chartData} />
      </div>
    </div>
  );
};

export default App;


