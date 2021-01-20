import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>

        <div className="weather col-sm-6">
          <h5>
            <WeatherTemperature temperature={props.data.temperature} />
            <div className="weather-description text-capitalize">
              {props.data.description}
            </div>
            <div className="windSpeed">Wind Speed: {props.data.wind}m/s</div>
            <div className="humidity humidityValue">
              Humidity: {props.data.humidity}%
            </div>
          </h5>
        </div>
        <div className="col-sm-1">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
    </div>
  );
}
