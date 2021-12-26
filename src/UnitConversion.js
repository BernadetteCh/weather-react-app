import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="celsius">
        <span className="degree">{props.celsius}</span>
        <span className="units">
          <span className="celsius-temperature">°C | </span>
          <a
            href="/"
            className="fahrenheit-temperature"
            onClick={showFahrenheit}
          >
            F
          </a>
        </span>
      </div>
    );
  } else {
      let fahrenheit = Math.round( (props.celsius * 9) / 5 + 32);
    return (
      <div className="celsius">
        <span className="degree">{fahrenheit}</span>
        <span className="units">
          <a href="/" className="celsius-temperature" onClick={showCelsius}>
            °C
          </a>
          <span href="/" className="fahrenheit-temperature"> | F</span>
        </span>
      </div>
    );
  }
}