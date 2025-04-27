// src/WindSpeedCard.js
import React from 'react';
import './WindSpeedCard.css'; // Make sure to link the correct CSS file
import windicon from '../assets/wind.svg'; // Import the humidity icon

const WindSpeedCard = ({ windSpeed }) => {
  return (
    <div className="windspeed-card">
      <div className="card-header">
        <img src={windicon} alt="Wind Speed" className="wind-icon" />
        <h3>Wind Speed</h3>
      </div>
      <div className="windspeed-content">
        <div className="windspeed-value">
          <p>{windSpeed} m/s</p>
        </div>
        <div className="windspeed-bar">
          <div
            className="windspeed-fill"
            style={{ width: `${Math.min(windSpeed * 20, 100)}%` }} // Assuming 5 m/s max for a full bar
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WindSpeedCard;
