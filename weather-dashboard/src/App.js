import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import HumidityCard from './components/HumidityCard'; 
import WindSpeedCard from './components/WindSpeedCard';
import WeatherInfoModal from './components/WeatherInfoModal';


import sunIcon from './assets/sun.svg';
import cloudsIcon from './assets/clouds.svg';
import rainIcon from './assets/rain.svg';
import thunderstormIcon from './assets/thunderstorm.svg';
import snowIcon from './assets/snow.svg';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('London'); // Default location
  const [icon, setIcon] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // OpenWeatherMap API key
  const API_KEY = process.env.REACT_APP_API_KEY;

  // Function to determine the correct icon based on weather description
  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return sunIcon;  // Sun icon
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return cloudsIcon;  // Clouds icon
      case 'rain':
      case 'light rain':
      case 'moderate rain':
      case 'heavy intensity rain':
        return rainIcon;  // Rain icon
      case 'thunderstorm':
        return thunderstormIcon;  // Thunderstorm icon
      case 'snow':
        return snowIcon;  // Snow icon
      default:
        return cloudsIcon;  // Default to clouds icon
    }
  };

  // Fetch the weather data from OpenWeatherMap
  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);
  
    axios
      .get(`https://cef00mv5yf.execute-api.eu-west-3.amazonaws.com/dev/weather`, {
        params: { city: location },
      })
      .then((response) => {
        setWeatherData(response.data);
        setIcon(getWeatherIcon(response.data.weather[0].description));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // For debugging
        setError('Failed to fetch data');
        setLoading(false);
      });
  };
  

  // Fetch weather data when the component mounts or location changes
  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  useEffect(() => {
    const interval = setInterval(fetchWeatherData, 900000); // 900000 ms = 15 minutes
    return () => clearInterval(interval);
  }, []);

  // Toggle modal visibility
  const handleInfoButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      
      {/* Location Input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a city"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && !loading && (
        <div className="weather-info">
          <div className="card">
            <div className="icon">
              <img src={icon} alt={weatherData.weather[0].description} />
            </div>
            <h3>{weatherData.name}, {weatherData.sys.country}</h3>
            <p>{weatherData.weather[0].description}</p>
            <p className="temp">{weatherData.main.temp}°C</p>
          </div>
          
          <HumidityCard humidity={weatherData.main.humidity} />
          
          <WindSpeedCard windSpeed={weatherData.wind.speed} />
          <button className="info-button" onClick={handleInfoButtonClick}>i</button>

          {/* Modal for additional weather information */}
          {isModalOpen && (
            <WeatherInfoModal
              weatherData={weatherData}
              onClose={handleCloseModal} // Pass the close handler to modal
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
