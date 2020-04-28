import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Bio from '../../components/bio';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Tags from '../../components/tags';
import { MDXWrapper } from './style';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const mdx = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout location={location}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <article>
        <header>
          <h1>{mdx.frontmatter.title}</h1>
          <div
            css={css`
              text-align: right;
            `}
          >
            {mdx.frontmatter.date}
          </div>
          <Tags post={mdx} align='center' />
        </header>
        <MDXProvider components={{ wrapper: MDXWrapper }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
