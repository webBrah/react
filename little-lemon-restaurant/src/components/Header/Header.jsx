import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Menu', path: '/menu' },
    { title: 'Reservations', path: '/reservations' },
    { title: 'Order Online', path: '/order' },
    { title: 'Login', path: '/login' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src={require('../../assets/nav-logo.png')}
              alt="Little Lemon logo"
              className="nav-image"
            />
          </Link>
        </div>
        <nav className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="hamburger" onClick={toggleMobileMenu}>
              <img
                src={require('../../assets/close.png')}
                alt="Close menu"
                className="close-image"
              />
            </div>
          </div>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={() => setMobileMenuOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <img
              src={require('../../assets/close.png')}
              alt="Close menu"
              className="close-image"
            />
          ) : (
            <img
              src={require('../../assets/hamburger.png')}
              alt="Hamburger menu"
              className="hamburger-image"
            />
          )}
        </div>
      </div>
    </header>
  );
}
