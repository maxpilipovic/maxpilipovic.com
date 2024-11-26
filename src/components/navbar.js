import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-brand">☔️ Max Pilipovic</Link>
    <div className="navbar-links">
      <Link to="/notes" className="navbar-link">Notes</Link>
      <Link to="/projects" className="navbar-link">Projects</Link>
      <Link to="/aboutme" className="navbar-link">About Me</Link>
      <button id="theme-toggle" className="navbar-button">☕</button>
    </div>
  </nav>
);

export default Navbar;