import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  //mit props.forecastday erhalte i die Daten. hier erstell i a functin für die max Temperature
  function maxTemperature() {
    let temperature = props.forecastday[0].temp.max;
    return Math.round(temperature);
  }
  //a function für die minimale Temperature
  function minTemperature() {
    let temperature = props.forecastday[0].temp.min;
    return Math.round(temperature);
  }
  //hier für des WeatherIcon wo es sich im response aufhält
  function showIcon() {
    return props.forecastday[0].weather[0].icon;
  }
  //Hier dass es keine nummern sondern wirklich Abkürzungen für de Tage anzagt.
  //mit newDate(); erhalte i des aktuelle Datum.
  //mit getDay(); wird der aktuelle TAg angezeigt bisher aber mit Zahlen vom PC
  //mit dem Array der Abkürzungen geb i den Zahlen eben die richtigen Wochentage
  function showDay() {
    let date = new Date();
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  //die functions hob i für mehr Überblick in den return eingebaut
  return (
    <div className="weather_forecast">
      <div className="row">
        <div className="col-sm d-flex justify-content-center">
          <div className="forecast">
            <div className="forecast_first">
              <div className="weather-forecast-date">{showDay()}</div>
              <div className="forecast-icon">
                <WeatherIcon code={showIcon()} size={36} />
              </div>
              <div className="weather-forecast-temperature">
                <span className="max-temperature">{maxTemperature()}°</span>{" "}
                {""}
                <span className="min-temperature">{minTemperature()}°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
