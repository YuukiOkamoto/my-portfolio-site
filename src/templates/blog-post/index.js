import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import ContentArticle from '../../components/ContentArticle';
import Container from '../../components/Container';
import PrevNextArticles from '../../components/PrevNextArticles';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const mdx = data.mdx;
  const { previous: prev, next } = pageContext;

  return (
    <Layout location={location}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <Container py='16'>
        <ContentArticle post={mdx} />
        <PrevNextArticles prev={prev} next={next} mt='10' />
      </Container>
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
