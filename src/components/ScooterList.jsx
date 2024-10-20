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
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {scooters.map((scooter) => (
          <li key={scooter.id} style={{ marginBottom: "10px" }}>
            <span>
              {scooter.model} - ${scooter.price}
            </span>{" "}
            <Link to={`/booking/${scooter.id}`}>
              <button
                style={{
                  marginLeft: "10px",
                  color: "red",
                  boxShadow: "0 0 0 5px lightgreen",
                }}
              >
                Rent Now
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScooterList;
