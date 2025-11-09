import React from 'react';
import { Link } from 'react-router-dom';

// A simple, inline SVG component for the LinkedIn icon.
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // This function ensures scroll to top
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3 className="logo">Skillence</h3>
                    <p>&copy; {currentYear} Skillence. All Rights Reserved. <br/> Kolkata, West Bengal, India.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
                        <li><Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Connect With Us</h4>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-btn" 
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;