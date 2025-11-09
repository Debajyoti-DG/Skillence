import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // <-- This is the fix
    setMenuOpen(false); // This closes the mobile menu
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={handleLinkClick}>Skillence</Link>
      <nav>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
          <li><NavLink to="/services" onClick={handleLinkClick}>Services</NavLink></li>
          <li><NavLink to="/portfolio" onClick={handleLinkClick}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;