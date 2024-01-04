import { useState } from "react";
import { SearchOption } from "./SearchOption";
import "./SearchOptionList.css";
import axios from "axios";

export const SearchOptionList = ({
  searchResults,
  setSelectedWeatherData,
  setSelectedCity,
  setSelectedPollutant
}) => {
  const handleCityClick = (value) => {
    setSelectedCity(value.name);

    const lon = value.longitude;
    const lat = value.latitude;
    const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=425694789a9d13d7f0df8989f8fe2d2b`;
    const pollutant_api_url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=425694789a9d13d7f0df8989f8fe2d2b`;


    // Fetching Weather Data
    axios
      .get(weather_api_url)
      .then((response) => {
        console.log(response.data);
        setSelectedWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Weather API", error);
      });


      // Fetching Pollutant Data
      axios
      .get(pollutant_api_url)
      .then((response) => {
        console.log(response.data);
        setSelectedPollutant(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Pollutant API", error);
      });


  };

  return (
    <div className="search-option-list">
      {searchResults.map((value, index) => {
        return (
          <button
            onClick={() => {
              handleCityClick(value);
            }}
          >
            <SearchOption key={index} option={value} />
          </button>
        );
      })}
    </div>
  );
};
