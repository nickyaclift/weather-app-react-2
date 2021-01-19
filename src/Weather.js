import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.coord.dt) * 1000,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="card-header">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="location">London</h2>
            </div>
            <div className="today col-sm-6">
              <h1>
                <span className="day">Day </span>
                <span className="date">Date </span>
                <span className="month">Month </span>
                <span className="time">time:mins</span>
              </h1>
            </div>
          </div>
        </div>
        <br />
        <div>
          <form className="form-check-inline form form-contol">
            <div className="col-sm-8">
              <div className="card text-dark bg-light mb-3 card border-info search">
                <input
                  type="search"
                  className="form-control search-city"
                  placeholder="Search City"
                  id="search-city"
                  autoFocus="on"
                />
              </div>
            </div>
            <div className="col-sm-4 btn-toolbar">
              <div className="btn-group">
                <button type="submit" className="btn btn-info search-button">
                  <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
                </button>
                <button type="submit" className="btn btn-info marker-location">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="fas fa-map-marker-alt"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="weather col-sm-4">
          <h5>
            <span className="temperature">
              {Math.round(weatherData.temperature)}°C
            </span>
            <span className="units">
              <span
                href="#"
                className="change-units active"
                id="celsius"
                rel="noreferrer"
              >
                °C
              </span>

              <span
                href="#"
                className="change-units"
                id="fahrenheit"
                rel="noreferrer"
              >
                °F
              </span>
            </span>

            <div className="weather-description text-capitalize">
              {weatherData.description}
            </div>
            <div className="windSpeed">Wind Speed: {weatherData.wind}m/s</div>
            <div className="humidity humidityValue">
              Humidity: {weatherData.humidity}%
            </div>
          </h5>
        </div>
        <div className="col-sm-2">
          <FontAwesomeIcon
            icon={faSun}
            className="fas fa-sun weather-icon weather-today"
          />
        </div>
      </div>
    );
  } else {
    let apiKey = "a05f0202382b8935188265308a3e5140";
    //let city = "London";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return "Search for a city";
  }
}
