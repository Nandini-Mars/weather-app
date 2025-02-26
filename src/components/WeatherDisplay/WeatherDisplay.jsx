import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherDisplay.css";

const WeatherCard = ({ title, data }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "4de20d94117b4c4982295637252502",
            q: city,
          },
        })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching data: ", error);
          alert("Failed to fetch weather data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div className="weather-card">
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-cards">
          <div className="card">
            <WeatherCard
              title="Humidity"
              data={`${weatherData.current.humidity}%`}
            />
          </div>
          <div className="card">
            <WeatherCard
              title="Condition"
              data={weatherData.current.condition.text}
            />
          </div>
          <div className="card">
            <WeatherCard
              title="Wind Speed"
              data={`${weatherData.current.wind_kph} kph`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
