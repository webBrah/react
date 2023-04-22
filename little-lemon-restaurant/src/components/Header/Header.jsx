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
          ></img>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Menu</a>
            </li>
            <li>
              <a href="/blog">Reservations</a>
            </li>
            <li>
              <a href="/blog">Order Online</a>
            </li>
            <li>
              <a href="/blog">Login</a>
            </li>
            {/* <li>
              <a href="/book" role="button">Book a table</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
