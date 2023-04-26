import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src={require("../../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/book" role="button">Book a table</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
