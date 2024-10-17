// src/components/ScooterList.js
import React from "react";
import { Link } from "react-router-dom";

const scooters = [
  { id: 1, model: "Xiaomi M365", price: 300 },
  { id: 2, model: "Ninebot ES2", price: 350 },
  { id: 3, model: "Razor E300", price: 250 },
];

function ScooterList() {
  return (
    <div>
      <h2>Available Scooters</h2>
      <ul>
        {scooters.map((scooter) => (
          <li key={scooter.id}>
            {scooter.model} - ${scooter.price}
            <Link to={`/booking/${scooter.id}`}> Rent Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScooterList;
