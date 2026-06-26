import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  darkMode,
  setDarkMode,
})  {
  return (
    <nav className="navbar">

      <div className="logo-section">

         <div className="logo-icon">

          <img src="/hotel.jpg" alt="Hotel Logo" />

        </div>


        <div className="logo-text">
          <h2>ROOM BOOKING</h2>
          <p>Comfort • Luxury • Memories</p>
        </div>

      </div>

      <ul className="nav-links">
        <li className="active"><Link to="/">Home</Link></li>
        <li> <Link to="/rooms">Rooms</Link></li>
        <li>
          <Link to="/booking">Bookings</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
      </li>
        
      </ul>
      <div className="auth-buttons">

  <a href="/login">
    <button className="login-btn">
      Login
    </button>
  </a>

  <a href="/register">
    <button className="register-btn">
      Register
    </button>
  </a>

</div>
<button
  onClick={() =>
    setDarkMode(!darkMode)
  }
  className="dark-btn"
>

  {darkMode ? "☀️" : "🌙"}

</button>

    </nav>
  );
}

export default Navbar;