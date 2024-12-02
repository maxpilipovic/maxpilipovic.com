import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

const projectsList = [
  {
    name: 'maxpilipovic.com',
    slug: 'maxpilipovic.com',
    tagline: 'A personal website built from React, Gatsby and Node.js. This website is regulary maintained, feel free to take inspiration, source code is available.',
    date: '2024-02-01',
    url: 'https://maxpilipovic.com',
    writeup: null,
  },
  {
    name: 'AlumLinx',
    slug: 'AlumLinx',
    tagline: 'A networking platform designed to connect alumni and students, fostering mentorship, collaboration, and professional growth within an user-friendly interface.',
    date: '2024-11-11',
    url: 'https://alumlinx.com',
    writeup: null,
  },
];

const ProjectsPage = ({ location }) => {
  useEffect(() => {
    // You can remove the fetch logic as well if not needed elsewhere
  }, []);

  return (
    <Layout location={location} title="Max Pilipovic">
      <main className="page-container">
        <h1 style={{ marginBottom: "0.8rem"}}>Projects</h1>
        <p>
          A collection of open-source projects I’ve worked on, including this
          website, apps, and many other exciting ideas in the future.
        </p>

        <section className="project-list">
          {projectsList.map((project) => (
            <div className="project-box" key={project.slug}>
              {/* Meta section */}
              <div className="project-meta">
                <span className="project-date">{new Date(project.date).getFullYear()}</span>
              </div>

              {/* Content section */}
              <div className="project-content">
                <h2>{project.name}</h2>
                <p>{project.tagline}</p>
              </div>

              {/* Links */}
              <div className="project-links">
                {project.writeup && (
                  <a href={project.writeup} className="button small">
                    Article
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    className="button small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={`https://github.com/maxpilipovic/${project.slug}`}
                  className="button small"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;