import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import LatestPosts from '../components/LatestPosts';

const BlogIndex = ({ data: { featured, latest }, location }) => {
  const featuredPost = featured.edges[0].node;
  const latestPosts = latest.edges;

  return (
    <Layout location={location}>
      <SEO />
      <Hero post={featuredPost} />
      <Container>
        <LatestPosts posts={latestPosts} />
        <Bio mb={8} />
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    featured: allMdx(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
    latest: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`;
