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
              On this site, you can check out my <Link to="/notes">notes</Link>, view
              my <Link to="/projects">projects</Link>, or learn <Link to="/me">about me</Link>.
            </p>
          </div>
          <StaticImage
            src="../images/MaxPilipovicProfile.jpg"
            className="bio-avatar"
            alt="Profile picture"
          />
        </div>
        <h1 style={{ marginBottom: '0.8rem' }}>Notes</h1>
        <div className="blog-list">
          {posts.map(post => (
            <div key={post.fields.slug} className="blog-item">
              <a href={post.fields.slug} className="blog-title">
                {post.frontmatter.title}
              </a>
              <span className="blog-date"><b>{post.frontmatter.date}</b></span>
            </div>
          ))}
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