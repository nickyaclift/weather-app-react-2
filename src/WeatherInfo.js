import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="weather col-sm">
        <h5>
          <span className="temperature">
            {Math.round(props.data.temperature)}°C
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
            {props.data.description}
          </div>
          <div className="windSpeed">Wind Speed: {props.data.wind}m/s</div>
          <div className="humidity humidityValue">
            Humidity: {props.data.humidity}%
          </div>
        </h5>
      </div>
      <div className="col-sm weather-icon">
        <WeatherIcon code={props.data.icon} />
      </div>
    </div>
  );
}
