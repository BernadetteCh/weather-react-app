import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false }); //bei default hat es das value loaded:false

  function displayWeatherdata(response) {
    setWeather({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Saturday 10:20",
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleApi() {
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apikey}`;
    axios.get(url).then(displayWeatherdata);
  }

  let form = (
    <form className="search-form">
      <input
        className="input-city"
        type="text"
        placeholder="Enter City"
        autoComplete="off"
      />
      <input className="input-submit" type="submit" value="Search" />
      <button>Current Location</button>
    </form>
  );

  if (weather.loaded) {
    return (
      <div className="weatherinformation">
        <div className="row justify-content-evenly mt-5">
          <div className="col-4 ms-sm-5">
            <section className="temperature">
              <div className="celsius">
                <span className="degree">{weather.temperature}</span>
                <span className="units">
                  <a
                    href="https://www.google.at/"
                    className="celsius-temperature"
                  >
                    °C
                  </a>
                </span>
              </div>
            </section>

            <img src={weather.icon} className="icon" alt="description" />
            <h1>Paris</h1>
            <h2 id="date">{weather.date}</h2>
          </div>
          <div className="col-sm-6">
            <section className="weather_data">
              <li>
                Description:{" "}
                <span className="description">{weather.description}</span>
              </li>
              <li>
                Humidity:
                <span className="humidity">{weather.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weather.wind}</span>km/h
              </li>
            </section>
          </div>
        </div>
        <div className="search">{form}</div>
      </div>
    );
  } else {
    handleApi();
    return <div>Loading...</div>;
  }
}
