import RoomCard from "../components/RoomCard";

import "../App.css";

function Home() {

  const rooms = [

    {
      id: 1,
      name: "Deluxe Room",
      price: "₹2500 / Night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },

    {
      id: 2,
      name: "Luxury Suite",
      price: "₹5000 / Night",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },

    {
      id: 3,
      name: "Family Room",
      price: "₹3500 / Night",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },

  ];

  return (

    <div>

      {/* HERO SECTION */}

      <section className="hero">

        <h1>
          Luxury Hotel Rooms
        </h1>

        <p>
          Book your dream stay with comfort and luxury
        </p>

      </section>

      {/* ROOMS SECTION */}

      <section className="rooms-section">

        <h2>
          Our Rooms
        </h2>

        <div className="rooms-container">

          {rooms.map((room) => (

            <RoomCard
              key={room.id}
              room={room}
            />

          ))}

        </div>

      </section>

      {/* SERVICES */}

      <section className="services">

        <h2>
          Our Services
        </h2>

        <div className="service-container">

          <div className="service-card">

            <h3>
              Free WiFi
            </h3>

            <p>
              High speed internet available in all rooms.
            </p>

          </div>

          <div className="service-card">

            <h3>
              Swimming Pool
            </h3>

            <p>
              Luxury swimming pool with clean environment.
            </p>

          </div>

          <div className="service-card">

            <h3>
              24/7 Support
            </h3>

            <p>
              Customer support available anytime for guests.
            </p>

          </div>

        </div>

      </section>

      {/* COUNTER SECTION */}

      <div
        style={{
          background: "#0b1730",
          padding: "70px 20px",
          marginTop: "70px",
        }}
      >

        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent:
              "space-around",
            flexWrap: "wrap",
            gap: "30px",
            textAlign: "center",
            color: "white",
          }}
        >

          <div>

            <h1
              style={{
                fontSize: "55px",
                color: "gold",
              }}
            >
              500+
            </h1>

            <p>
              Luxury Rooms
            </p>

          </div>

          <div>

            <h1
              style={{
                fontSize: "55px",
                color: "gold",
              }}
            >
              2000+
            </h1>

            <p>
              Happy Customers
            </p>

          </div>

          <div>

            <h1
              style={{
                fontSize: "55px",
                color: "gold",
              }}
            >
              5★
            </h1>

            <p>
              Star Rating
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <h2>
          ROOM BOOKING
        </h2>

        <p>
          © 2026 All Rights Reserved | Luxury Hotel Booking
        </p>

      </footer>

    </div>
  );
}

export default Home;