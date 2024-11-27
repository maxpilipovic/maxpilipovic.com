import React from 'react';
import Layout from '../components/layout';
import Resume from '../images/Max_Pilipovic_Resume2024.pdf';
import ProfileImage from '../images/maxandolive.png'
import ProfileImage2 from '../images/maxandryan.jpeg'

const AboutMePage = ({ location }) => (
  <Layout location={location} title="Max Pilipovic">
    <main className="page-container">
    <div>
        <h1>About Me</h1>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '2rem', flexDirection: 'row-reverse' }}>
          <img
            src={ProfileImage}
            alt="Max Pilipovic"
            style={{
              maxWidth: '250px', // Adjust size as needed
              marginLeft: '1.5rem',
              borderRadius: '10px',
            }}
          />
          <p>
            Hi, I’m Max, a Computer Science master’s student and aspiring 
            <span style={{ color: '#007acc' }}> <b>software engineer</b></span>. I’m from 
            <span style={{ color: '#007acc' }}> <b>Australia</b></span>, born and raised, and I take great pride in working hard at everything I do. I created this
            website to showcase my skills, projects, and passions. 
            <span style={{ color: '#007acc' }}> <b>Gaming</b></span> has always been a big part of my life, especially PC gaming. I love competitive FPS shooters like Counter-Strike but also enjoy survival games like DayZ, ArmA, and Minecraft. Beyond 
            <span style={{ color: '#007acc' }}> <b>programming</b></span>, particularly problem-solving, I love working on projects, exploring new technologies, and constantly learning new things. Outside of gaming and coding, I’m a massive 
            <span style={{ color: '#007acc' }}> <b>sports</b></span> fan. I enjoy both playing and watching a variety of sports, which keeps me active and engaged in my free time.
          </p>
        </div>
        <p>
          So! Welcome to my corner of the internet, you can find 
          <a href="/notes" style={{ color: '#007acc', textDecoration: 'none' }}> <b>notes</b></a>, 
          and anything else I want to put out to the world. You can read some of my 
          personal posts or articles. Also, check out my 
          <a href="/projects" style={{ color: '#007acc', textDecoration: 'none' }}> <b>projects</b></a> page to see highlights of my open-source work.
        </p>
        <p>
          My site is strictly personal, it has <b>no ads, no affiliate links, no tracking or analytics, no sponsored points, and no payments.</b> My
          motivation is to have a space to express my thoughts, share my life journey, and create a hub for social media. I hope this inspires
          you to create your space on the internet.
        </p>
        <div style={{ margin: '1rem 0' }}>
        <button
          style={{
            backgroundColor: '#007acc',
            color: '#fff',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
          onClick={() => window.open(Resume, '_blank')}
        >
          Download CV
        </button>
      </div>
      </div>
      <h2>Contact</h2>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li><b>Email:</b> <a href="mailto:maxkpkusa@gmail.com">maxpkusa@gmail.com</a></li>
        <li>
          <a
            href="https://www.youtube.com/@maxpilipovic"
            style={{ textDecoration: 'none', color: '#007acc' }}
          >
            <b>YouTube</b>
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@amused_cs"
            style={{ textDecoration: 'none', color: '#007acc' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>TikTok</b>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MaxPilipovic"
            style={{ textDecoration: 'none', color: '#007acc' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>GitHub</b>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/max-pilipovic/"
            style={{ textDecoration: 'none', color: '#007acc' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>LinkedIn</b>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/max.pilipovic/"
            style={{ textDecoration: 'none', color: '#007acc' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Instagram</b>
          </a>
        </li>
      </ul>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <img
          src={ProfileImage2}
          alt="Contact Illustration"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
      <h2>What I'm Doing Now</h2>
      <i>Updated November 26th 2024</i>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li>Finishing up Fall 24 Semester @ UIS</li>
        <li>Tweaking this website</li>
        <li>Beginning Development of AlumLinx</li>
        <li>Heading home to Australia soon!</li>
        <li>Getting ready for Thanksgiving with gf's family</li>
      </ul>
      <h2>Gaming</h2>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li>Currently playing MC Bedwars</li>
        <li>Little bit of Counter-Strike</li>
        <li>DayZ with friends on weekends</li>
      </ul>
      <h2>Tools</h2>
      <h3>Software</h3>
      <p>
        This website is hosted on 
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'none' }}><b> Netlify </b></a> 
        and uses the 
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'none' }}><b> Gatsby </b></a> 
        SSG framework.
      </p>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li>
          <b>Coding: </b>
          <a 
            href="https://code.visualstudio.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#007acc', textDecoration: 'none' }}
          >
            Visual Studio Code
          </a>
        </li>
        <li>
          <b>Terminal: </b>
          <a 
            href="https://iterm2.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#007acc', textDecoration: 'none' }}
          >
            iTerm2
          </a>
        </li>
      </ul>
      <h3>Hardware</h3>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li><b>Coding PC:</b> <span style={{ color: '#007acc' }}>MacBook Pro 2.3 GHz 8-core Intel Core i9 16GB</span></li>
        <li><b>Gaming PC:</b>
          <ul>
            <li>CPU: <span style={{ color: '#007acc' }}>Intel Core i5-9600K</span></li>
            <li>Motherboard: <span style={{ color: '#007acc' }}>MSI ProSeries Intel Coffee Lake</span></li>
            <li>Memory: <span style={{ color: '#007acc' }}>Corsair Vengeance RGB 16GB</span></li>
            <li>Storage: <span style={{ color: '#007acc' }}>SSD Kingston 240GB</span></li>
            <li>GPU: <span style={{ color: '#007acc' }}>NVIDIA GeForce GTX 1660</span></li>
            <li>PSU: <span style={{ color: '#007acc' }}>Corsair VS Series</span></li>
            <li>Case: <span style={{ color: '#007acc' }}>Corsair Carbide</span></li>
          </ul>
        </li>
        <li>Monitor: <span style={{ color: '#007acc' }}>AOC G2590FX 25" & AOOpen Acer 27HC5R 27" (x2)</span></li>
        <li>Keyboard: <span style={{ color: '#007acc' }}>Durgod Fusion</span></li>
        <li>Microphone: <span style={{ color: '#007acc' }}>Blue Yeti</span></li>
        <li>Headphones: <span style={{ color: '#007acc' }}>Razer BlackShark V2</span></li>
      </ul>
      <h2>Interviews & Podcasts</h2>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li>
          <b>
            <a 
              href="https://www.youtube.com/watch?v=WinTlHM90sc&t=5s" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#007acc' }}
            >
              International Student Athletes with Max Pilipovic
            </a>
          </b>
          <ul>
            <li>
              Join host PGS Joe Palazzolo as they discuss the experience of being an international Student Athlete with Australian Max Pilipovic
              (Eastern Illinois '21). Tune in as Max shares insights on his experience in America as a tennis player, student, and Sigma Pi
              chapter sage.
            </li>
          </ul>
        </li>
      </ul>
    </main>
  </Layout>
);

export default AboutMePage;