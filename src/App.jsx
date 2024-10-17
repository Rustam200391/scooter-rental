import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScooterList from "./components/ScooterList.js";
import BookingForm from "./components/BookingForm";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route src={<ScooterList />} />
          <Route src={<BookingForm />} />
          <Route src={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
