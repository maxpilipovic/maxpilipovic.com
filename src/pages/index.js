import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title="Max Pilipovic">
      <Seo title="All posts" />
      <section>
        <div className="bio">
          <div className="bio-text">
            <h1 style={{ marginBottom: '0.8rem' }}>
              Hey, I'm Max
            </h1>
            <p>
              I am a software engineer from Australia, I make content on different
              platforms. Follow my passion, developing things!
            </p>
            <p>
              On this site, you can check out my <Link to="/notes">notes</Link> or learn about me.
            </p>
          </div>
          <StaticImage
            src="../images/MaxPilipovicProfile.jpg"
            className="bio-avatar"
            alt="Profile picture"
          />
        </div>
        
      </section>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM YYYY")
        }
      }
    }
  }
`;