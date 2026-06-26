function Confirmation() {
  const data = JSON.parse(localStorage.getItem("roomBooking"));

  return (
    <div className="confirm">
      <h1>Booking Successful ✅</h1>

      <h2>{data.room}</h2>

      <p>Name: {data.name}</p>

      <p>Check-In: {data.checkIn}</p>

      <p>Check-Out: {data.checkOut}</p>
    </div>
  );
}

export default Confirmation;