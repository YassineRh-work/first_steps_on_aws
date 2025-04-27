import React from 'react';
import './HumidityCard.css'; // Import custom CSS for styling
import humidityIcon from '../assets/humidity.svg'; // Import the humidity icon

const HumidityCard = ({ humidity }) => {
  return (
    <div className="humidity-card">
      <div className="card-header">
        <img src={humidityIcon} alt="Humidity" className="humidity-icon" />
        <h3>Humidity</h3>
      </div>
      <div className="humidity-content">
        <div className="humidity-percentage">
          <p>{humidity}%</p>
        </div>
        <div className="humidity-bar">
          <div
            className="humidity-fill"
            style={{ height: `${humidity}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HumidityCard;
