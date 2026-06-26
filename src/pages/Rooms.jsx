import "./Rooms.css";

import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Rooms() {

  const navigate = useNavigate();

  const allRooms = [

    {
      id: 1,
      name: "Deluxe Room",
      type: "Deluxe",
      price: 2500,
      guests: 2,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },

    {
      id: 2,
      name: "Luxury Suite",
      type: "Suite",
      price: 5000,
      guests: 4,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },

    {
      id: 3,
      name: "Family Room",
      type: "Family",
      price: 3500,
      guests: 5,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },

    {
      id: 4,
      name: "Premium Suite",
      type: "Suite",
      price: 7000,
      guests: 3,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },

  ];

  const [typeFilter, setTypeFilter] =
    useState("");

  const [priceFilter, setPriceFilter] =
    useState("");

  const [guestFilter, setGuestFilter] =
    useState("");

  const filteredRooms = allRooms.filter(
    (room) => {

      return (

        (typeFilter === "" ||
          room.type === typeFilter) &&

        (priceFilter === "" ||
          room.price <= Number(priceFilter)) &&

        (guestFilter === "" ||
          room.guests >= Number(guestFilter))

      );
    }
  );

  return (

    <div className="rooms-page">

      <h1>Our Hotel Rooms</h1>

      {/* FILTER SECTION */}

      <div className="filter-section">

        <select
          onChange={(e) =>
            setTypeFilter(e.target.value)
          }
        >

          <option value="">
            All Room Types
          </option>

          <option value="Deluxe">
            Deluxe
          </option>

          <option value="Suite">
            Suite
          </option>

          <option value="Family">
            Family
          </option>

        </select>

        <select
          onChange={(e) =>
            setPriceFilter(e.target.value)
          }
        >

          <option value="">
            Price Range
          </option>

          <option value="3000">
            Under ₹3000
          </option>

          <option value="5000">
            Under ₹5000
          </option>

          <option value="8000">
            Under ₹8000
          </option>

        </select>

        <select
          onChange={(e) =>
            setGuestFilter(e.target.value)
          }
        >

          <option value="">
            Guests Count
          </option>

          <option value="2">
            2 Guests
          </option>

          <option value="4">
            4 Guests
          </option>

          <option value="5">
            5 Guests
          </option>

        </select>

      </div>

      {/* ROOMS */}

      <div className="rooms-grid">

        {filteredRooms.map((room) => (

          <div
            className="room-box"
            key={room.id}
          >

            <img
              src={room.image}
              alt={room.name}
            />

            <div className="room-info">

              <h2>{room.name}</h2>

              <p>
                ₹{room.price} / Night
              </p>

              <p>
                Guests: {room.guests}
              </p>

              <button
                onClick={() =>
                  navigate("/booking")
                }
              >
                Book Now
              </button>

            </div>

          </div>

        ))}

      </div>

      <Footer />

    </div>
  );
}

export default Rooms;