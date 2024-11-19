import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c35',
    color: 'white',
  }}>
    <h1 style={{ margin: 0 }}>☔️ Max Pilipovic</h1>
    <div>
      <Link to="/notes" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Notes</Link>
      <Link to="/projects" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Projects</Link>
      <Link to="/aboutme" style={{ color: 'white', textDecoration: 'none' }}>About Me</Link>
    </div>
  </nav>
);

export default Navbar;