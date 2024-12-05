import React from 'react';
import Layout from '../components/layout';
import Resume from '../images/Max_Pilipovic_Resume2024.pdf';
import ProfileImage from '../images/maxandolive.png';
import ProfileImage2 from '../images/maxandryan.jpeg';
import Seo from "../components/seo";

const AboutMePage = ({ data, location }) => {
  const linkStyle = {
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.2s ease-in-out',
  };
  return (
    <Layout location={location} title="Max Pilipovic">
      <Seo title="About" />
        <section>
          <h1 style={{ marginBottom: "0.8rem"}}>About Me</h1>
          <p style={{ marginTop: "0" }}>
            Hi, I’m Max, a Computer Science master’s student and
            <span style={{ color: '#007acc' }}> <b>software engineer</b></span> from
            <span style={{ color: '#007acc' }}> <b>Australia</b></span>. I create 
            <span style={{ color: '#007acc' }}> <b>content</b></span> about cs, and showcase my <span style={{ color: '#007acc' }}> <b>journey</b></span> as a <span style={{ color: '#007acc' }}> <b>swe</b></span>.
          </p>
          <div>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/VAmP2z9PzXE?start=681"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '3rem !important',
            padding: '0 1rem',
            color: '#ffffff',
            }}>
            <a href="mailto:maxpkusa@gmail.com" style={linkStyle}>
              ↗ email me! 📧
            </a>
            <a href="https://linktr.ee/maxpilipovic" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ↗ my social media
            </a>
            <a href="https://example.com/subscribe" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ↗ my resume
            </a>
            <a href="https://www.linkedin.com/in/max-pilipovic/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ↗ connect on linkedin
            </a>
          </div>
        </section>
    </Layout>
  );
};

export default AboutMePage;

