import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import {
  useColorMode,
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/core';

import Bio from './Bio';
import Tags from './Tags';
import components from './MDX';

const ContentArticle = ({ post, previous, next }) => {
  const { colorMode } = useColorMode();
  const smallText = { light: 'blackAlpha.700', dark: 'whiteAlpha.700' };
  return (
    <>
      <article>
        <header>
          <Heading as='h1' size='2xl'>
            {post.frontmatter.title}
          </Heading>
          <Text fontSize='sm' color={smallText[colorMode]} textAlign='right'>
            {post.frontmatter.date}
          </Text>
          <Tags post={post} color='orange.300' />
        </header>
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <Divider />
        <Box as='footer' my='6'>
          <Bio />
        </Box>
      </article>
      <nav>
        <Flex wrap='warp' justify='space-between'>
          <Box>
            {previous && (
              <Link as={GatsbyLink} to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </Box>
          <Box>
            {next && (
              <Link as={GatsbyLink} to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </Box>
        </Flex>
      </nav>
    </>
  );
};

export default ContentArticle;
