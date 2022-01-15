import React from "react";
import axios from "axios";
import kolosseum from "./kolosseum.png";
import londoneye from "./london-eye.png";
import freiheitsstatue from "./freiheitsstatue.png";
import austria from "./austria.png";
import "./Header.css";

export default function Header(props) {
  function showNewyork(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(props.data);
  }
  function showVienna(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "Vienna";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(props.data);
  }
  function showLondon(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(props.data);
  }
  function showRome(event) {
    event.preventDefault();
    let apikey = "4ccd9ecf2f417deee06840bdb3b5e20a";
    let city = "Rome";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    axios.get(url).then(props.data);
  }
  let citynavigation = (
    <div>
      <header>
        <div className="row">
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" onClick={showNewyork}>
                <img
                  src={freiheitsstatue}
                  alt="Statue of Liberty"
                  title="NewYork-Statue of Liberty"
                ></img>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" onClick={showVienna}>
                <img src={austria} alt="Vienna" title="Vienna-Austria"></img>
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
  return <div>{citynavigation}</div>;
}
