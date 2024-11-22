import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-brand">☔️ Max Pilipovic</Link>
    <div className="navbar-links">
      <Link to="/notes"> Notes</Link>
      <Link to="/projects"> Projects</Link>
      <Link to="/aboutme">About Me</Link>
      <button id="theme-toggle" class="btn">☕</button>
    </div>
  </nav>
);

export default Navbar;