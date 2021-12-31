import React, { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return <ForecastDay forecastday={forecast} />; //erstelle neues property wos die Daten im response.data.daily also a im forecast&(setForecast) san in des neue component für besseren Überblick
  } else {
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
