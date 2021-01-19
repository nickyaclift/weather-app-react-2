import React from "react";
import "./OpenSource.css";
export default function OpenSource() {
  return (
    <div className="open-source">
      <a
        href="https://github.com/nickyaclift/weather-app-react-2.git"
        target="_blank"
        className="git-hub"
        rel="noreferrer"
      >
        Open Source Code{" "}
      </a>
      by{" "}
      <a
        href="https://www.linkedin.com/in/nicky-clift-69392a162/"
        className="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        Nicky Clift
      </a>
    </div>
  );
}
