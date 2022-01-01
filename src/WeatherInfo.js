import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row justify-content-evenly mt-5">
      <div className="col-4 ms-sm-5">
        <section className="temperature">
          <UnitConversion celsius={props.data.temperature} />
        </section>
        <div className="weatherinfo-icon">
          <WeatherIcon code={props.data.icon} color={"white"}/>
        </div>

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
