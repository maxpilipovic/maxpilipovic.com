import React from 'react';
import netlifyIcon from '../images/netlify.png';
import githubIcon from '../images/githubsir.png';
import gatsbyIcon from '../images/gatsby-icon.png';

// Define the links dynamically
const socialLinks = [
  { url: 'https://linktr.ee/maxpilipovic', label: 'Linktree' },
];

const resourcesLinks = [
  { url: 'https://github.com', label: 'GitHub', icon: githubIcon },
  { url: 'https://www.gatsbyjs.com/', label: 'Gatsby', icon: gatsbyIcon },
  { url: 'https://www.netlify.com/', label: 'Netlify', icon: netlifyIcon },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section for social links */}
      <section>
        <h1>☂️</h1>
        <nav>
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      {/* Section for resources and tools */}
      <section>
        <nav>
          {resourcesLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="footer-button"
            >
              <img src={link.icon} alt={link.label} className="footer-icon" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </section>

      {/* Copyright text */}
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Max Pilipovic. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;