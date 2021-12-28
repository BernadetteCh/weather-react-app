import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="weather_forecast">
      <div className="row">
        <div className="col-sm d-flex justify-content-center">
          <div className="forecast">
            <div className="forecast_first">
              <div className="weather-forecast-date">Thursday</div>
              <div className="forecast-icon">
                <WeatherIcon code="01d" size={36} />
              </div>
              <div className="weather-forecast-temperature">5°</div>
            </div>
          </div>
        </div>

        <div className="col-sm d-flex justify-content-center">
          <div className="forecast">
            <div className="forecast_first">
              <div className="weather-forecast-date">Thursday</div>
              <div className="forecast-icon">
                <WeatherIcon code="01d" size={36} />
              </div>
              <div className="weather-forecast-temperature">5°</div>
            </div>
          </div>
        </div>

        <div className="col-sm d-flex justify-content-center">
          <div className="forecast">
            <div className="forecast_first">
              <div className="weather-forecast-date">Thursday</div>
              <div className="forecast-icon">
                <WeatherIcon code="01d" size={36} />
              </div>
              <div className="weather-forecast-temperature">5°</div>
            </div>
          </div>
        </div>

        <div className="col-sm d-flex justify-content-center">
          <div className="forecast">
            <div className="forecast_first">
              <div className="weather-forecast-date">Thursday</div>
              <div className="forecast-icon">
                <WeatherIcon code="01d" size={36} />
              </div>
              <div className="weather-forecast-temperature">5°</div>
            </div>
          </div>
        </div>

        <div className="col-sm d-flex justify-content-center">
          <div className="forecast">
            <div className="forecast_first">
              <div className="weather-forecast-date">Thursday</div>
              <div className="forecast-icon">
                <WeatherIcon code="01d" size={36} />
              </div>
              <div className="weather-forecast-temperature">5°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
