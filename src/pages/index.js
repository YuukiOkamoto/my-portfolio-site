import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Container from '../components/Container';
import Hero from '../components/Home/Hero';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import LatestPosts from '../components/Home/LatestPosts';

const BlogIndex = ({ data: { featured, latest }, location }) => {
  const featuredPost = featured.edges[0].node;
  const latestPosts = latest.edges;

  return (
    <Layout location={location}>
      <SEO title='All posts' />
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
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          ...PostData
        }
      }
    }
    latest: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          ...PostData
        }
      }
    }
  }
  fragment PostData on Mdx {
    excerpt(pruneLength: 500)
    fields {
      slug
      readingTime {
        text
      }
    }
    frontmatter {
      date(formatString: "YYYY年MM月DD日")
      title
      description
      tags
    }
  }
`;
