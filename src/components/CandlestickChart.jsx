

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CandlestickChart = ({ chartData }) => {
  const data = {
    labels: chartData.map(dataPoint => dataPoint.time),
    datasets: [
      {
        label: 'Price',
        data: chartData.map(dataPoint => dataPoint.price),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CandlestickChart;


