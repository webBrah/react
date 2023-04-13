import "./Header.css"

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Little Lemon Restaurant</h1>
        </div>
        <div className="nav-menu">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
      </header>
    </>
  );
}
