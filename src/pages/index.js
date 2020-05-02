import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import LatestPosts from '../components/Home/LatestPosts';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout location={location}>
      <SEO title='All posts' />
      <Bio mb={8} />
      <LatestPosts posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
