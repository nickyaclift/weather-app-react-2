import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import OpenSource from "./OpenSource";
export default function Container() {
  return (
    <div className="container">
      <div className="card text-dark bg-light mb-3">
        <Weather defaultCity="London" />
        <OpenSource />
      </div>
    </div>
  );
}
