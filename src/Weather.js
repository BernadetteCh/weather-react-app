import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "Graz",
    temperature: 6,
    description: "cloudy",
    date: "Saturday 10:20",
    humidity: 87,
    wind: 6,
  };
  return (
    <div className="weatherinformation">
      <div className="row justify-content-evenly mt-5">
        <div className="col-4 ms-sm-5">
          <section className="temperature">
            <div id="celsius">
              <span className="degree">{weatherData.temperature}</span>
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

          <img
            src="suncloud.png"
            className="icon"
            alt={weatherData.description}
          />
          <h1>{weatherData.city}</h1>
          <h2 id="date">{weatherData.date}</h2>
        </div>
        <div className="col-sm-6">
          <section className="weather_data">
            <li>
              Description:{" "}
              <span className="description">{weatherData.description}</span>
            </li>
            <li>
              Humidity:
              <span className="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{weatherData.wind}</span>km/h
            </li>
          </section>
        </div>
      </div>

      <div className="search">
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
      </div>
    </div>
  );
}
