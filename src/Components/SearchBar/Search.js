import { useState } from "react";
import axios from "axios";
import "./Search.css";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

const SearchInput = ({ setSearchResults }) => {
  // State for search bar input
  const [searchInput, setSearchInput] = useState("");

  // set search bar value to whatever is typed
  // fetch appropriate cities based on that user input
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    throttledFetchCities(event.target.value);
  };

  // Options for GeoDB API
  const cityApiOptions = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: {
      maxPopulation: "100000",
      namePrefix: "",
    },
    headers: {
      "X-RapidAPI-Key": "b9586fc743msh555d3de2d2aa9cbp18ec6ejsn9908ea17ee54",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  // Fetching list of City Data based on search bar input
  // Passing result to prop function setSearchResults
  const fetchCities = async (userInput) => {
    try {
      cityApiOptions["params"]["namePrefix"] = `${userInput}`;
      const response = await axios.request(cityApiOptions);
      setSearchResults(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedFetchCities = debounce(fetchCities, 1500);
  const throttledFetchCities = throttle(fetchCities, 1500);

  // Component return value (search bar)
  return (
    <div className="search-bar">
      <input
        className="search-bar"
        placeholder="Search for cities..."
        value={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
