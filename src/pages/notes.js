import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotesPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.frontmatter.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <Layout location={location} title="Max Pilipovic">
      <Seo title="Notes" />
      <main className="page-container">
        <section>
          <h1 style={{ marginBottom: "0.8rem"}}>Notes</h1>
          <p style={{ marginTop: "0" }}>
            Personal notes about life, articles, and tutorials
          </p>
          {/* Grouped blog list */}
          <div className="blog-list">
            {Object.keys(postsByYear)
              .sort((a, b) => b - a) // Sort years descending
              .map((year) => (
                <div key={year} className="year-group">
                  <h2>{year}</h2>
                  {postsByYear[year].map((post) => (
                    <div key={post.fields.slug} className="blog-item">
                      <a href={post.fields.slug} className="blog-title">
                        {post.frontmatter.title}
                      </a>
                      <span className="blog-date">
                        <b>{post.frontmatter.date}</b>
                      </span>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NotesPage;

export const pageQuery = graphql`
  query {
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