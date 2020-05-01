import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContentArticle from '../../components/contentArticle'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const mdx = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout location={location}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <ContentArticle post={mdx} previous={previous} next={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
