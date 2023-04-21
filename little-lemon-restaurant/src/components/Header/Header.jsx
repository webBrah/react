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
              <a href="/home">Homepage</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/book" role="button">Book a table</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
