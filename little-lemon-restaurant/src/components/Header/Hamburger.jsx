import React from 'react';
import './Hamburger.css';

export default function Hamburger({ mobileMenuOpen, toggleMobileMenu }) {
  return (
    <div className="hamburger-container" onClick={toggleMobileMenu}>
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
  );
}
