import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Heading, Text } from '@chakra-ui/core';

import Tags from './Tags';
import components from './docsComponents/MDXComponents';

const ContentArticle = ({ post }) => {
  return (
    <>
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
    </>
  );
};

export default ContentArticle;
