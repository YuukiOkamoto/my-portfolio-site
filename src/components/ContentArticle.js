import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Box, Divider, Heading, Text } from '@chakra-ui/core';

import Bio from './Bio';
import Tags from './Tags';
import components from './docsComponents/MDXComponents';

const ContentArticle = ({ post }) => {
  return (
    <article>
      <header>
        <Heading as='h1' size='2xl'>
          {post.frontmatter.title}
        </Heading>
        <Text fontSize='sm' opacity='.7' textAlign='right'>
          {post.frontmatter.date}
        </Text>
        <Tags post={post} />
      </header>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
      <Divider />
      <Box as='footer' my='6'>
        <Bio />
      </Box>
    </article>
  );
};

export default ContentArticle;
