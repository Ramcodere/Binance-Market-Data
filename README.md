# Binance Market Data WebSocket Implementation

This project is a real-time cryptocurrency market data charting application built with **React**. It connects to the **Binance WebSocket API** to fetch live candlestick data and visualizes it using **Chart.js** or an optional **TradingView** widget.

## Features

- **Real-time cryptocurrency data**: Fetches market data for ETH/USDT, BNB/USDT, and DOT/USDT from Binance via WebSocket.
- **Toggle between cryptocurrencies**: Users can switch between supported cryptocurrency pairs.
- **Time interval selection**: Choose between 1-minute, 3-minute, and 5-minute candlestick intervals.
- **Data persistence**: Historical data is stored in `localStorage`, ensuring data is maintained when switching between coins.
- **Interactive charting**: Display live candlestick charts using **Chart.js** or **TradingView** for financial charts.
- **Responsive design**: A clean and responsive user interface with modular components.

## Technologies Used

- **React** (18.x)
- **Chart.js** (for candlestick chart visualization)
- **Binance WebSocket API** (for real-time market data)
- **localStorage** (for persisting historical chart data)
- **CSS/Bootstrap** (for responsive design)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/binance-market.git
cd binance-market

Project Structure

src/
├── components/
│   ├── Navbar.js                # Navigation bar component
│   ├── CryptoToggle.js           # Dropdown to select cryptocurrency (ETH/USDT, BNB/USDT, DOT/USDT)
│   ├── IntervalToggle.js         # Dropdown to select time interval (1m, 3m, 5m)
│   ├── CandlestickChart.js       # Displays the candlestick chart using Chart.js or TradingView
└── App.js                        # Main app file that handles WebSocket connection and state management

Usage
Select a cryptocurrency from the dropdown (ETH/USDT, BNB/USDT, DOT/USDT).
Select a time interval (1-minute, 3-minute, or 5-minute) to adjust the chart's candlestick interval.
The chart will display real-time data, and historical data will be saved in localStorage. If you switch back to a previously selected coin, the data will be restored from localStorage.
WebSocket Integration
This application connects to the Binance WebSocket API for live market data:

WebSocket URL: wss://stream.binance.com:9443/ws/<symbol>@kline_<interval>
Symbols supported: ethusdt, bnbusdt, dotusdt
Intervals supported: 1m, 3m, 5m
Charting Options
You can choose between:

Chart.js for charting with full control.
TradingView widget for a professional financial chart interface (you must install react-tradingview-widget for this).
