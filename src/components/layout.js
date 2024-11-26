import React from 'react';
import Navbar from './navbar'; // Import the Navbar component
import { Link } from 'gatsby'; // For Gatsby-specific navigation
import Footer from './footer'; 

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
      <Footer />
    </div>
  );
};

export default Layout;