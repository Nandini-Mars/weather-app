import React from "react";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar ({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="main">
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className="search-button" sx={{ pl: 2 }} onClick={handleSearch}>
        Search
      </button>
    </div>
    </div>
  );
}
