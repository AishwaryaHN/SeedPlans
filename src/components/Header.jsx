import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Centers', path: '/centers' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo */}
        <div className="logo">
          SEED PLAN
        </div>

        {/* Navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn btn-primary donate-btn">
            DONATE NOW
          </button>

          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
