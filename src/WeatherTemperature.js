import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [temperatureUnits, setTemperatureUnits] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setTemperatureUnits("Fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setTemperatureUnits("celsius");
  }

  if (temperatureUnits === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.temperature)}°C</span>
        <span className="units">
          <span
            href="#"
            className="change-units"
            id="fahrenheit"
            rel="noreferrer"
            onClick={convertFahrenheit}
          >
            °F
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">
          {Math.round(props.temperature * (9 / 5) + 32)}°F
        </span>
        <span className="units">
          <span
            href="#"
            className="change-units"
            id="celsius"
            rel="noreferrer"
            onClick={convertCelsius}
          >
            °C
          </span>
        </span>
      </div>
    );
  }
}
