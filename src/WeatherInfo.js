import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="weather col-sm">
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
        <div className="col-sm weather-icon">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
      <Forecast city={props.data.city} />
    </div>
  );
}
