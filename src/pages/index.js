import * as React from "react";
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title="Max Pilipovic">
      <Seo title="All posts" />
      <main className="page-container">
        {/* Bio Section */}
        <Bio />
        <section>
          <h1 style={{ marginBottom: '0.8rem' }}>Notes</h1>
          <p style={{ marginTop: '0' }}>Personal notes about life, articles and tutorials</p>
          {/* Blog list without bullet points */}
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
      </main>
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