import "./Services.css";

function Services() {
  return (
    <section className="services">

      <h2>Our Services</h2>

      <div className="service-container">

        <div className="service-card">
          <h3>Free WiFi</h3>

          <p>
            High speed internet available in all rooms.
          </p>
        </div>

        <div className="service-card">
          <h3>Swimming Pool</h3>

          <p>
            Luxury swimming pool with clean environment.
          </p>
        </div>

        <div className="service-card">
          <h3>24/7 Support</h3>

          <p>
            Customer support available anytime for guests.
          </p>
        </div>

      </div>

      <footer className="footer">

        <h2>ROOM BOOKING</h2>

        <p>
          © 2026 All Rights Reserved | Luxury Hotel Booking
        </p>

      </footer>

    </section>
  );
}

export default Services;