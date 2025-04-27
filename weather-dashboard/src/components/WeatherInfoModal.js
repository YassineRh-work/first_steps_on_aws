// src/WeatherInfoModal.js
import React from 'react';
import './WeatherInfoModal.css'; // Make sure to link the CSS file for modal styling

const WeatherInfoModal = ({ weatherData, onClose }) => {
  if (!weatherData) return null; // Return null if no weather data is passed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Additional Weather Information</h3>
        <p>Feels like: {weatherData.main.feels_like}°C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WeatherInfoModal;
