import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <Link to="/" className="logo">Skillence</Link>
      <nav>
        <button className="nav-toggle" onClick={handleToggle} aria-label="Toggle navigation">
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;