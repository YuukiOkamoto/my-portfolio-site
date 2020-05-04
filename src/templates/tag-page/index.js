import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import { useColorMode, Box, Heading, Stack, Text } from '@chakra-ui/core';
import { FaHashtag } from 'react-icons/fa';

import PostCard from '../../components/PostCard';
import Container from '../../components/Container';

const TagPageTemplate = ({ pageContext, data, location }) => {
  const { colorMode } = useColorMode();
  const { tag } = pageContext;
  const { edges: posts, totalCount } = data.allMdx;

  return (
    <Layout location={location}>
      <SEO
        title={`${tag}タグ記事一覧`}
        description={`${tag}タグを含む記事の一覧です。`}
      />
      <Container>
        <Box pt='16' pb='24'>
          <Box
            mb='10'
            textAlign='center'
            color={
              { light: 'blackAlpha.700', dark: 'whiteAlpha.700' }[colorMode]
            }
          >
            <Heading as='h1' size='xl' mb='6'>
              <Stack isInline spacing='3' d='flex' justify='center'>
                <Box
                  as={FaHashtag}
                  fill={
                    { light: 'blackAlpha.500', dark: 'whiteAlpha.500' }[
                      colorMode
                    ]
                  }
                />
                <Text as='span'>{tag}</Text>
              </Stack>
            </Heading>
            <Text fontSize='sm' pl='5'>{totalCount}件の投稿があります</Text>
          </Box>
          <Stack spacing='20'>
            {posts.map(({ node: post }) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 500)
          fields {
            slug
            readingTime {
              text
            }
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

export default TagPageTemplate;
