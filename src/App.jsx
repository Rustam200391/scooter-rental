import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScooterList from "./components/ScooterList.jsx";
import BookingForm from "./components/BookingForm.jsx";
import UserProfile from "./components/UserProfile.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ScooterList />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
