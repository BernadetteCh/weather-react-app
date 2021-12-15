import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/BernadetteCh?tab=repositories"
        target="_blank"
        rel="noreferrer"
        alt="github-link"
      >
        Open-source Code,
      </a>{" "}
      by Bernadette Christiner and hosted on{" "}
      <a href="https://optimistic-curran-8bd91f.netlify.app">Netlify</a>{" "}
      <p>
        <a href="https://de.vecteezy.com/gratis-vektor/papier">
          3d Vectors by Vecteezy
        </a>
      </p>
    </div>
  );
}
