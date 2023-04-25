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
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order</li>
            <li>Login</li>
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
