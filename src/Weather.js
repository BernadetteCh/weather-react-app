import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./FormattedDate";
import WeatherInfo from "./WeatherInfo"; //für eine bessere Übersicht hob i die Daten (aktuelle Temperatur, Niederschlag etc.) die im return gerendert werden in des component hingesendet.
import Forecast from "./Forecast";
import kolosseum from "./kolosseum.png";
import londoneye from "./london-eye.png";
import freiheitsstatue from "./freiheitsstatue.png";
import austria from "./austria.png";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false }); //bei default hat es das value loaded:false
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherdata(response) {
    console.log(response);
    setWeather({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      citysearch: response.data.name,
      date: new Date(response.data.dt * 1000), //mit response.data.dt bekomm i die Computerzeit, die muss man mit 1000 multiplizieren und so kraig i die aktuelle Zeit. dann erstell i a component im return , dem diese Berechnung zugewiesen wird und des passiert mit FormattedDate date={weather.date}; newDate des is afoch der Code um zur aktuellen Zeit zu kommen, denn wenn i console.log(response.data.dt) moch erhalt i für dt eine längere Zahl. und mit newDate weiß der PC dass er die aktuelle Zeit ausrechnen muss, weil der PC bzw. JAva rechnet mit Zahlen seid ca 1970.....
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(displayWeatherdata);
    //im APi Url is city der Wert props.defaultCity gegben, damit beim Laden wenn ma noch keiner city sucht schon eine bei default quasi angezeigt wird
  }

  function showNewyork(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(displayWeatherdata);
  }
  function showVienna(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "Vienna";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(displayWeatherdata);
  }
  function showLondon(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(displayWeatherdata);
  }
  function showRome(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "Rome";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(displayWeatherdata);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="input-city"
        type="search"
        placeholder="Enter a City"
        onChange={handleChange}
      />
      <input className="input-submit" type="submit" value="Search" />
    </form>
  );

  let citynavigation = (
    <div>
      <header>
        <div className="row">
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" onClick={showNewyork}>
               <img src={freiheitsstatue} alt="Statue of Liberty" title="NewYork-Statue of Liberty"></img>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" onClick={showVienna}>
              <img src={austria} alt="Vienna" title="Vienna-Austria" ></img>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" onClick={showLondon}>
                <img
                  src={londoneye}
                  alt="london-eye"
                  title="London London-Eye"
                  width={50}
                ></img>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" onClick={showRome}>
                <img src={kolosseum} title="Rome-coliseum" alt="coliseum"></img>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );

  if (weather.loaded) {
    return (
      <div className="weatherinformation">
        <div className="container_hero">
          {citynavigation}
          <WeatherInfo data={weather} />
          <div className="search">{form}</div>
        </div>
        <Forecast coords={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
