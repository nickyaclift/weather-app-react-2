import React, { useState } from "react";
import DateTime from "./DateTime";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "a05f0202382b8935188265308a3e5140";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  function currentLocation(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let apiKey = "a05f0202382b8935188265308a3e5140";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="card-header">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="location">{weatherData.city}</h2>
            </div>
            <DateTime date={weatherData.date} />
          </div>
        </div>

        <div className="row second-row">
          <div className="col-sm-6">
            <form
              className="form-check-inline form form-contol"
              onSubmit={handleSubmit}
            >
              <div className="card text-dark bg-light mb-3 card border-info search">
                <input
                  type="search"
                  className="form-control search-city"
                  placeholder="Search City"
                  id="search-city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCity}
                />
              </div>
              <div className="btn-toolbar">
                <div className="btn-group">
                  <button type="submit" className="btn btn-info search-button">
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-info marker-location"
                    onClick={getCurrentLocation}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return <div className="loading">Loading...</div>;
  }
}
