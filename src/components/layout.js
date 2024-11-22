import React from 'react';
import Navbar from './navbar'; // Import the Navbar component
import { Link } from 'gatsby'; // For Gatsby-specific navigation

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  {/* Wrapper */}
  return (
    <div
      className="global-wrapper"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1.5rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
      data-is-root-path={isRootPath}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer
        style={{
          marginTop: '2rem',
          borderTop: '1px solid #ccc',
          paddingTop: '1rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#888',
        }}
      >
        <nav style={{ marginBottom: '1rem' }}>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <li>
              <a
                href="#youtube"
                style={{ textDecoration: 'none', color: '#007acc' }}
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="#twitch"
                style={{ textDecoration: 'none', color: '#007acc' }}
              >
                Twitch
              </a>
            </li>
            <li>
              <a
                href="#instagram"
                style={{ textDecoration: 'none', color: '#007acc' }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <p>
          &copy; {new Date().getFullYear()} Max Pilipovic. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;