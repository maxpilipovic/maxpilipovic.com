import React from 'react';
import Layout from '../components/layout';
import Resume from '../images/Max_Pilipovic_Resume2024.pdf';
import ProfileImage from '../images/maxandolive.png'
import ProfileImage2 from '../images/maxandryan.jpeg'

const AboutMePage = ({ location }) => (
  <Layout location={location} title="Max Pilipovic">
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
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
            Hi, I’m Max, a Computer Science master’s student and aspiring software engineer. I’m from Australia, born and raised, and I take
            great pride in working hard at everything I do. I created this website to showcase my skills, projects, and passions. Gaming has
            always been a big part of my life, especially PC gaming. I love competitive FPS shooters like Counter-Strike but also enjoy survival
            games like DayZ, ArmA, and Minecraft. Beyond gaming, I have a passion for programming, particularly problem-solving. I love working
            on projects, exploring new technologies, and constantly learning new things. Outside of gaming and coding, I’m a massive sports
            fan. I enjoy both playing and watching a variety of sports, which keeps me active and engaged in my free time.
          </p>
        </div>
        <p>
          So! Welcome to my corner of the internet, you can find 
          <a href="/notes" style={{ color: '#007acc', textDecoration: 'none' }}> notes</a>, 
          and anything else I want to put out to the world. You can read some of my 
          personal posts or articles. Also, check out my 
          <a href="/projects" style={{ color: '#007acc', textDecoration: 'none' }}> projects</a> page to see highlights of my open-source work.
        </p>
        <p>
          My site is strictly personal, it has no ads, no affiliate links, no tracking or analytics, no sponsored points, and no payments. My
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
        <li>Email: <a href="mailto:hello@taniarascia.com">maxpkusa@gmail.com</a></li>
        <li><a href="#newsletter">YouTube</a></li>
        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
        <li><a href="https://bsky.app" target="_blank" rel="noopener noreferrer">Twitch</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
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
      <p>This website is hosted on Netlify and uses the Gatsby SSG framework.</p>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li>Coding: Visual Studio Code</li>
        <li>Terminal: iTerm2</li>
      </ul>
      <h3>Hardware</h3>
      <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
        <li><b>Coding PC:</b> MacBook Pro 2.3 GHz 8-core Intel Core i9 16GB</li>
        <li><b>Gaming PC:</b>
          <ul>
            <li>CPU: Intel Core i5-9600K</li>
            <li>Motherboard: MSI ProSeries Intel Coffee Lake </li>
            <li>Memory: Corsair Vengeance RGB 16GB</li>
            <li>Storage: SSD Kingston 240GB</li>
            <li>GPU: NVIDIA GeForce GTX 1660</li>
            <li>PSU: Corsair VS Series</li>
            <li>Case: Corsair Carbide</li>
          </ul>
        <li>Monitor: AOC G2590FX 25" & AOOpen Acer 27HC5R 27" (x2)</li>
        <li>Keyboard: Durgod Fusion</li>
        <li>Microphone: Blue Yeti</li>
        <li>Headphones: Razer BlackShark V2</li>
        </li>
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