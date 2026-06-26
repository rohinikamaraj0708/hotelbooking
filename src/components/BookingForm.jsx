import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ room }) {
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "roomBooking",
      JSON.stringify({
        ...booking,
        room: room.name,
      })
    );

    navigate("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        required
        onChange={(e) =>
          setBooking({ ...booking, name: e.target.value })
        }
      />

      <input
        type="date"
        required
        onChange={(e) =>
          setBooking({ ...booking, checkIn: e.target.value })
        }
      />

      <input
        type="date"
        required
        onChange={(e) =>
          setBooking({ ...booking, checkOut: e.target.value })
        }
      />

      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;