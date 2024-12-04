/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

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
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio"> 
    {/* Profile Picture
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/MaxPilipovicProfile.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
      <div className="hero-wrapper">
        {author?.name && <h1 style = {{color: "white", fontSize: "50px", margin: "0"}}> Hey, I'm {author.name}</h1>}
        <p className = "hero-description">
          I am software engineer from Australia, I make content on different platforms.
          Follow my passion
          - developing things! ☂️
        </p>
        <p className = "hero-description">
          On this site, you can check out my {''}
          <Link to="/notes">notes</Link>, or view my {' '}
          <Link to="/projects">projects</Link> or learn{' '}
          <Link to="/me">about me</Link>.
        </p>
        <div className="decoration">
            <StaticImage
              src="../images/MaxPilipovicProfile.jpg"
              className="bio-avatar"
              alt="Profile picture"
            />
        </div>
      </div>
    </div>
  )
}

export default Bio