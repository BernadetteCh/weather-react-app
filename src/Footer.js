import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/BernadetteCh/weather-react-app"
        target="_blank"
        rel="noreferrer"
        alt="github-link"
      >
        Open-source Code,
      </a>{" "}
      by{" "}
      <a
        href="https://lucid-williams-1b13b8.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Bernadette Christiner
      </a>{" "}
      and hosted on{" "}
      <a href="https://app.netlify.com/" target="_blank" rel="noreferrer">
        Netlify
      </a>{" "}
      <p>
        <a href="https://de.vecteezy.com/gratis-vektor/papier">
          3d Vectors by Vecteezy
        </a>
      </p>
    </div>
  );
}
