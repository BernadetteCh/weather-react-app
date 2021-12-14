import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showTemperature(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiKey = "fb5a52a1b1d04da9188f79aaf5843917";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);

  return <h2>From React ! </h2>;
}
