import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //hier einen loop erstellen damit jeder Tag angezeigt wird
  if (loaded) {
    return (
      <div className="weather_forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div
                  className="col-sm d-flex justify-content-center"
                  key={index}
                >
                  <ForecastDay forecastday={dailyForecast} />
                </div>
              );
            }else{
              return null;
            }
          })}
        </div>
      </div>
    ); //erstelle neues property wos die Daten im response.data.daily also a im forecast&(setForecast) san in des neue component für besseren Überblick
  } else {
    let apikey = "fb5a52a1b1d04da9188f79aaf5843917";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
