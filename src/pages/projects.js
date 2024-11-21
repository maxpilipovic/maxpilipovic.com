import React from 'react';
import Layout from '../components/layout';

const ProjectsPage = ({ location }) => (
  <Layout location={location} title="Max Pilipovic">
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Projects</h1>
      <p>This is the Projects page.</p>
    </main>
  </Layout>
);

export default ProjectsPage;