import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {

function handleForecast(response){
  console.log(response);
}

let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
let lat=props.coords.lat;
let lon=props.coords.lon;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}`;
axios.get(apiUrl).then(handleForecast);



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
