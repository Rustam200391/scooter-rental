// src/components/UserProfile.js
import React from "react";

function UserProfile() {
  // Пример данных, можно будет заменить на реальные данные
  const bookings = [
    { id: 1, model: "Xiaomi M365", date: "2024-10-05" },
    { id: 2, model: "Ninebot ES2", date: "2024-10-03" },
  ];

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Your Bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.model} - {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
