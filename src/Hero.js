import React from "react";
import "./Hero.css";


export default function Hero() {
  return (
    <div>
      <header>
        <div className="row">
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" id="NewYork">
                NewYork
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" id="Vienna">
                Vienna
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" id="London">
                London
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="city_navigation">
              <a href="https://#/" rel="noreferrer" id="Paris">
                Paris
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
