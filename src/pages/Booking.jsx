import { useState, useEffect } from "react";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Booking() {

  const [room, setRoom] =
    useState("Luxury Suite");

  const [guests, setGuests] =
    useState(2);

  const [checkIn, setCheckIn] =
    useState("");

  const [checkOut, setCheckOut] =
    useState("");

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("UPI");

  /* ROOM PRICES */

  const roomPrices = {

    "Deluxe Room": 2500,

    "Luxury Suite": 5000,

    "Family Room": 3500,
  };

  /* ROOM IMAGES */

  const roomImages = {

    "Deluxe Room":
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",

    "Luxury Suite":
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200",

    "Family Room":
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  };

  /* TOTAL */

  const total =
    roomPrices[room] * guests;

  /* SAVE BOOKING */

  const handleBooking = () => {

    /* VALIDATION */

    if (!checkIn || !checkOut) {

      toast.error(
        "Please select dates"
      );

      return;
    }

    if (checkOut <= checkIn) {

      toast.error(
        "Check-Out must be after Check-In"
      );

      return;
    }

    /* BOOKING DATA */

    const bookingData = {

      room,

      guests,

      checkIn,

      checkOut,

      paymentMethod,
    };

    /* SAVE TO LOCAL STORAGE */

    localStorage.setItem(
      "hotelBooking",
      JSON.stringify(bookingData)
    );

    toast.success(
      "🎉 Booking Confirmed Successfully!"
    );
  };

  /* LOAD SAVED BOOKING */

  useEffect(() => {

    const savedBooking =
      localStorage.getItem(
        "hotelBooking"
      );

    if (savedBooking) {

      const bookingData =
        JSON.parse(savedBooking);

      setRoom(bookingData.room);

      setGuests(
        bookingData.guests
      );

      setCheckIn(
        bookingData.checkIn
      );

      setCheckOut(
        bookingData.checkOut
      );

      setPaymentMethod(
        bookingData.paymentMethod
      );
    }

  }, []);

  return (

    <>

      <ToastContainer />

      <div
        style={{
          minHeight: "100vh",
          background: "#f1f5f9",
        }}
      >

        {/* HERO SECTION */}

        <div
          style={{
            height: "300px",

            backgroundImage:
              "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200')",

            backgroundSize: "cover",

            backgroundPosition:
              "center",

            display: "flex",

            justifyContent:
              "center",

            alignItems: "center",

            flexDirection: "column",

            color: "white",
          }}
        >

          <h1
            style={{
              fontSize: "55px",

              fontWeight: "bold",
            }}
          >
            Book Your Perfect Stay
          </h1>

          <p
            style={{
              marginTop: "10px",

              fontSize: "20px",
            }}
          >
            Comfortable Rooms.
            Memorable Stay.
          </p>

        </div>

        {/* MAIN SECTION */}

        <div
          style={{
            maxWidth: "1200px",

            margin: "40px auto",

            display: "grid",

            gridTemplateColumns:
              "1fr 1fr",

            gap: "30px",

            padding: "20px",
          }}
        >

          {/* LEFT CARD */}

          <div
            style={{
              background: "white",

              padding: "30px",

              borderRadius: "20px",

              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h1
              style={{
                marginBottom:
                  "30px",

                color: "#0b1730",
              }}
            >
              Booking Details
            </h1>

            {/* ROOM */}

            <label>
              Select Room
            </label>

            <select
              value={room}

              onChange={(e) =>
                setRoom(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "14px",

                marginTop: "10px",

                marginBottom:
                  "20px",

                borderRadius:
                  "10px",

                border:
                  "1px solid #ccc",
              }}
            >

              <option>
                Deluxe Room
              </option>

              <option>
                Luxury Suite
              </option>

              <option>
                Family Room
              </option>

            </select>

            {/* GUESTS */}

            <label>
              Guests
            </label>

            <input
              type="number"

              value={guests}

              min="1"

              onChange={(e) =>
                setGuests(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "14px",

                marginTop: "10px",

                marginBottom:
                  "20px",

                borderRadius:
                  "10px",

                border:
                  "1px solid #ccc",
              }}
            />

            {/* CHECK-IN */}

            <label>
              Check-In Date
            </label>

            <input
              type="date"

              value={checkIn}

              min={
                new Date()
                  .toISOString()
                  .split("T")[0]
              }

              onChange={(e) =>
                setCheckIn(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "14px",

                marginTop: "10px",

                marginBottom:
                  "20px",

                borderRadius:
                  "10px",

                border:
                  "1px solid #ccc",
              }}
            />

            {/* CHECK-OUT */}

            <label>
              Check-Out Date
            </label>

            <input
              type="date"

              value={checkOut}

              min={checkIn}

              onChange={(e) =>
                setCheckOut(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "14px",

                marginTop: "10px",

                marginBottom:
                  "20px",

                borderRadius:
                  "10px",

                border:
                  "1px solid #ccc",
              }}
            />

            {/* PAYMENT */}

            <label>
              Payment Method
            </label>

            <select
              value={
                paymentMethod
              }

              onChange={(e) =>
                setPaymentMethod(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "14px",

                marginTop: "10px",

                marginBottom:
                  "20px",

                borderRadius:
                  "10px",

                border:
                  "1px solid #ccc",
              }}
            >

              <option>
                UPI
              </option>

              <option>
                Card
              </option>

              <option>
                Net Banking
              </option>

            </select>

            {/* BUTTON */}

            <button
              onClick={
                handleBooking
              }
              style={{
                width: "100%",

                padding: "15px",

                background:
                  "#0b1730",

                color: "white",

                border: "none",

                borderRadius:
                  "10px",

                cursor: "pointer",

                fontSize: "18px",

                marginTop: "20px",
              }}
            >
              Confirm Booking
            </button>

          </div>

          {/* RIGHT CARD */}

          <div
            style={{
              background: "white",

              padding: "30px",

              borderRadius: "20px",

              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >

            <h1
              style={{
                marginBottom:
                  "30px",

                color: "#0b1730",
              }}
            >
              Booking Summary
            </h1>

            <img
              src={roomImages[room]}

              alt={room}

              style={{
                width: "100%",

                height: "280px",

                objectFit:
                  "cover",

                borderRadius:
                  "15px",
              }}
            />

            <div
              style={{
                marginTop: "25px",

                lineHeight: "2",

                fontSize: "18px",
              }}
            >

              <p>
                <strong>
                  Room:
                </strong>

                {" "}

                {room}
              </p>

              <p>
                <strong>
                  Guests:
                </strong>

                {" "}

                {guests}
              </p>

              <p>
                <strong>
                  Check-In:
                </strong>

                {" "}

                {checkIn ||
                  "Not Selected"}
              </p>

              <p>
                <strong>
                  Check-Out:
                </strong>

                {" "}

                {checkOut ||
                  "Not Selected"}
              </p>

              <p>
                <strong>
                  Payment:
                </strong>

                {" "}

                {paymentMethod}
              </p>

              <p
                style={{
                  marginTop: "20px",

                  fontSize: "30px",

                  color: "gold",

                  fontWeight:
                    "bold",
                }}
              >
                Total: ₹{total}
              </p>

            </div>

          </div>

        </div>

      </div>

    </>

  );
}

export default Booking;