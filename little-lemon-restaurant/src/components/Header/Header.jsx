import './Header.css';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Little Lemon Restaurant</h1>
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
      </header>
    </>
  );
}
