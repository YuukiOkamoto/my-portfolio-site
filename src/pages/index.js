import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tags from '../components/tags';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout location={location}>
      <SEO title='All posts' />
      <Bio />
      {posts.map(({ node: post }) => {
        const title = post.frontmatter.title || post.fields.slug;
        return (
          <article key={post.fields.slug}>
            <header>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                <Link
                  css={css`
                    text-decoration: none;
                  `}
                  to={post.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                <span>{post.frontmatter.date}</span>
                <Tags post={post} />
              </div>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
