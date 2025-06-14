import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  // State to manage the dropdown menu//
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      {/* Navbar Links */}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className="navbar-link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
            window.location.href = '/';
          }}
        >
          home
        </Link>
        <Link
          to="/notes"
          className="navbar-link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
            window.location.href = '/notes';
          }}
        >
          notes
        </Link>
        <Link
          to="/aboutme"
          className="navbar-link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
            window.location.href = '/aboutme';
          }}
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;