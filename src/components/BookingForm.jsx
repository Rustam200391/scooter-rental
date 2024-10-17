// src/components/BookingForm.js
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function BookingForm() {
  const { id } = useParams(); // получаем id самоката из URL
  const [user, setUser] = useState({ name: "", date: "" });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику для отправки данных бронирования
    console.log(`User: ${user.name}, Scooter ID: ${id}, Date: ${user.date}`);
    history.push("/user"); // Переход на страницу пользователя после бронирования
  };

  return (
    <div>
      <h2>Book Scooter ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={user.date}
            onChange={(e) => setUser({ ...user, date: e.target.value })}
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
