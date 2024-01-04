import "./CurrentWeather.css";

export const CurrentWeather = ({ currentWeatherData, cityName }) => {
  return (
    <div className="weather-wrapper">
      <div className="top-weather">
        <div>
          <p className="city">{cityName}</p>
          <p className="weather-conditions">{currentWeatherData.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
        />
      </div>

      <div className="bottom-weather">
        <p className="temperature">{Math.round(currentWeatherData.main.temp - 273.15) + "°C"}</p>
        <div className="details">
          <div className="row">
            <span className="label">Details</span>
          </div>

          <div className="row">
            <span className="label">Feels Like</span>
            <span className="value">{Math.round(currentWeatherData.main.feels_like - 273.15) + " °C"}</span>
          </div>

          <div className="row">
            <span className="label">Wind</span>
            <span className="value">{currentWeatherData.wind.speed + " m/s"}</span>
          </div>

          <div className="row">
            <span className="label">Humidity</span>
            <span className="value">{currentWeatherData.main.humidity + "%"}</span>
          </div>

          <div className="row">
            <span className="label">Pressure</span>
            <span className="value">{currentWeatherData.main.pressure + " hPa"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
