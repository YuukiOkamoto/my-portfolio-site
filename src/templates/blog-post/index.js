import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import ContentArticle from '../../components/ContentArticle';
import Container from '../../components/Container';
import PrevNextArticles from '../../components/PrevNextArticles';
import SnsShare from '../../components/SnsShare';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { previous: prev, next } = pageContext;
  const mdx = data.mdx;
  const url = `${data.site.siteMetadata.siteUrl}${mdx.fields.slug}`;
  const title = mdx.frontmatter.title;

  return (
    <Layout location={location}>
      <SEO
        title={title}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <Container py='16'>
        <ContentArticle post={mdx} />
        <SnsShare url={url} title={title} />
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
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
