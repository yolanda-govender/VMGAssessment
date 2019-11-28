import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import data from "./SampleData";

class App extends Component {
  render() {
    return (
      <div>
        {data.vehicle.map(vehicle => {
          return (
            <div>
              <h1> CAR DEMO </h1>
              <h2>{vehicle.vehicle}</h2>
              <ul>
                <img src={vehicle.imageUrl} />
                <li>Model : {vehicle.model}</li>
                <li>Color : {vehicle.color}</li>
                <li>Year : {vehicle.year}</li>
                <li>Mileage: {vehicle.mileage}</li>
                <li>Selling Price : {vehicle.sellingPrice}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
