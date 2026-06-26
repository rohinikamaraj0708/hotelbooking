import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import RoomDetails from "./pages/RoomDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [darkMode, setDarkMode] =
    useState(false);

  return (

    <div
      style={{
        background: darkMode
          ? "#0f172a"
          : "#ffffff",

        color: darkMode
          ? "white"
          : "black",

        minHeight: "100vh",
      }}
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/rooms"
          element={<Rooms />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />
        <Route
        path="/contact"
        element={<Contact />}
      />

        <Route
          path="/room/:id"
          element={<RoomDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </div>
  );
}

export default App;