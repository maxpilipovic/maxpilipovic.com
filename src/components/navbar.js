import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-brand"
        onClick={(e) => {
          e.preventDefault();
          handleScrollToTop();
          window.location.href = '/';
        }}
      >
        ☔️ Max Pilipovic
      </Link>
      <div className="navbar-links">
        <Link
          to="/notes"
          className="navbar-link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
            window.location.href = '/notes';
          }}
        >
          Notes
        </Link>
        <Link
          to="/projects"
          className="navbar-link"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
            window.location.href = '/projects';
          }}
        >
          Projects
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
          About Me
        </Link>
        <button id="theme-toggle" className="navbar-button">☕</button>
      </div>
    </nav>
  );
};

export default Navbar;