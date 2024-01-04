import SearchInput from "./Components/SearchBar/Search";
import { useState } from "react";
import "./App.css";
import { SearchOptionList } from "./Components/SearchBar/SearchOptionList";
import { CurrentWeather } from "./Components/CurrentWeather/CurrentWeather";
import { PollutantTable } from "./Components/PollutantTable/PollutantTable";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedWeatherData, setSelectedWeatherData] = useState({});
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPollutant, setSelectedPollutant] = useState({});

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchInput setSearchResults={setSearchResults} />
        {searchResults.length > 0 && <SearchOptionList
          searchResults={searchResults}
          setSelectedWeatherData={setSelectedWeatherData}
          setSelectedCity={setSelectedCity}
          setSelectedPollutant={setSelectedPollutant}
        />}
      </div>
      {Object.keys(selectedWeatherData).length !== 0 && (
        <CurrentWeather
          cityName={selectedCity}
          currentWeatherData={selectedWeatherData}
        />
      )}
      {Object.keys(selectedPollutant).length !== 0 && (
        <PollutantTable pollutantData={selectedPollutant} />
      )}
    </div>
  );
}

export default App;
