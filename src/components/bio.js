import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <div className="bio-text">
        <h1 style={{marginBottom: '0.8rem' }}>
          Hey, I'm {author?.name}
        </h1>
        <p>
          I am a software engineer from Australia, I make content on different
          platforms. Follow my passion, developing things! 
        </p>
        <p>
          On this site, you can check out my <Link to="/notes">notes</Link>, view
          my <Link to="/projects">projects</Link>, or learn{" "}
          <Link to="/me">about me</Link>.
        </p>
      </div>
        <StaticImage
          src="../images/MaxPilipovicProfile.jpg"
          className="bio-avatar"
          alt="Profile picture"
        />
    </div>
    );
  };

export default Bio;