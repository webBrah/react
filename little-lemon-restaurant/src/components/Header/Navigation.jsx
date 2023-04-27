import { Link } from 'react-router-dom';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Menu', path: '/menu' },
    { title: 'Reservations', path: '/reservations' },
    { title: 'Order Online', path: '/order' },
    { title: 'Login', path: '/login' }
  ];

  return (
    <nav className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
      <ul>
        {links.map(link => (
          <li key={link.path}>
            <Link to={link.path} onClick={() => setMobileMenuOpen(false)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
