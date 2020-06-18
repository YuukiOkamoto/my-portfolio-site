import React from 'react';
import { graphql } from 'gatsby';
import { Box, Divider, Grid } from '@chakra-ui/core';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';
import ContentArticle from '../../components/ContentArticle';
import PrevNextArticles from '../../components/PrevNextArticles';
import SnsShare from '../../components/SnsShare';
import { TOC, TOCDrawer } from '../../components/TOC';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { previous: prev, next } = pageContext;
  const mdx = data.mdx;
  const url = `${data.site.siteMetadata.siteUrl}${mdx.fields.slug}`;
  const title = mdx.frontmatter.title;
  const headings = data.mdx.tableOfContents.items;

  return (
    <Layout location={location} position='relative'>
      <SEO
        title={title}
        description={mdx.frontmatter.description || mdx.excerpt}
        cover={mdx.frontmatter.cover?.publicURL}
        isArticle
      />
      <Grid
        mx='auto'
        px='6'
        py='16'
        maxW='containers.xl'
        gap='5'
        gridTemplateColumns={[
          '100%',
          '100%',
          'calc(100% - 200px) 200px',
          'calc(100% - 300px) 300px',
        ]}
        templateAreas={[
          '"article"',
          '"article"',
          '"article aside"',
          '"article aside"',
        ]}
      >
        <Box as='article' gridArea='article'>
          <ContentArticle post={mdx} />
          <SnsShare url={url} title={title} mt='4' />
          <Divider mt='2' />
          <Bio mt='6' />
          <PrevNextArticles prev={prev} next={next} mt='10' />
        </Box>
        <Box as='aside' gridArea='aside' position='relative'>
          {headings && (
            <TOC
              headings={headings}
              position='sticky'
              top='12'
              d={['none', 'none', 'block', 'block']}
            />
          )}
        </Box>
      </Grid>
      <TOCDrawer
        headings={data.mdx.tableOfContents.items}
        d={['inline-block', 'inline-block', 'none', 'none']}
      />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
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
        date(formatString: "YYYY年MM月DD日")
        description
        tags
        cover {
          publicURL
        }
      }
      tableOfContents
    }
  }
`;
