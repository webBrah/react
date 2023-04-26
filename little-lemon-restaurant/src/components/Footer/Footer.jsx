import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-logo">
          <img
            src={require('../../assets/footer-logo.png')}
            alt="Little Lemon logo"
            className="nav-image"
          />
        </div>
        <div className="footer-nav">
          <h3>Menu</h3>
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
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>2395 Maldove Way, Chicago Illinois</p>
          <p>(629)-243-6827</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="social">
          <h3>Social Media</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  );
}
