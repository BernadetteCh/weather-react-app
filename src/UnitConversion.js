import React from "react";


export default function UnitConversion(props) {


return(
  <div className="celsius">
        <span className="degree">{props.celsius}</span>
        <span className="units">
          <span className="celsius-temperature">°C </span>
        </span>
      </div>
    );

  /*
  if (unit === "celsius") {
    return (
      <div className="celsius">
        <span className="degree">{props.celsius}</span>
        <span className="units">
          <span className="celsius-temperature">°C | </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="celsius">
        <span className="units">
          <a href="/" className="celsius-temperature" onClick={showCelsius}>
            °C
          </a>
          <span href="/" className="fahrenheit-temperature"> | F</span>
        </span>
      </div>
    );
  }*/
}