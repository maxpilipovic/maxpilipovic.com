import React, { useEffect } from 'react';
import Navbar from './navbar'; // Import the Navbar component
import Footer from './footer';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  // Scroll to top on page load or route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div
      className="global-wrapper"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 1.5rem 0', // Adjust padding for the fixed navbar
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
      data-is-root-path={isRootPath}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ marginTop: '1rem' }}>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;