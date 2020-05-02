import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import {
  useColorMode,
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  PseudoBox,
  Stack,
  Text,
} from '@chakra-ui/core';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Tags from '../components/Tags';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges;
  const { colorMode } = useColorMode();

  return (
    <Layout location={location}>
      <SEO title='All posts' />
      <Bio mb={8} />
      <Stack spacing={8}>
        {posts.map(({ node: post }) => {
          const title = post.frontmatter.title || post.fields.slug;
          return (
            <PseudoBox
              key={post.fields.slug}
              as='article'
              pb={8}
              borderBottomWidth='1px'
              _last={{ borderBottomWidth: 0 }}
            >
              <Box as='header'>
                <Heading as='h3' mb={1}>
                  <Link
                    as={GatsbyLink}
                    to={post.fields.slug}
                    _hover={{ textDecoration: 'none', color: 'orange.300' }}
                  >
                    {title}
                  </Link>
                </Heading>
                <Flex
                  justify='space-between'
                  color={{ light: 'gray.500', dark: 'gray.400' }[colorMode]}
                >
                  <Flex align='center'>
                    <Icon name='calendar' size={3} mr={2} />
                    <Text as='span' fontSize='xs'>
                      {post.frontmatter.date}
                    </Text>
                  </Flex>
                  <Tags post={post} fontSize='xs' color='orange.300' />
                </Flex>
              </Box>
              <Box as='section' mt={2}>
                <Text
                  color={{ light: 'gray.600', dark: 'gray.300' }[colorMode]}
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                />
              </Box>
            </PseudoBox>
          );
        })}
      </Stack>
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
            date(formatString: "YYYY年MM月DD日")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
