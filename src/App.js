
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}
