import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="row justify-content-evenly mt-5">
      <div className="col-4 ms-sm-5">
        <section className="temperature">
          <div className="celsius">
            <span className="degree">{props.data.temperature}</span>
            <span className="units">
              <a href="https://www.google.at/" className="celsius-temperature">
                °C
              </a>
            </span>
          </div>
        </section>
        <WeatherIcon code={props.data.icon} />

        <h1>{props.data.citysearch}</h1>
        <h2 id="date">
          <FormattedDate date={props.data.date} />
        </h2>
      </div>
      <div className="col-sm-6">
        <section className="weather_data">
          <li>
            Description:{" "}
            <span className="description">{props.data.description}</span>
          </li>
          <li>
            Humidity:
            <span className="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span className="wind">{props.data.wind}</span>km/h
          </li>
        </section>
      </div>
    </div>
  );
}
