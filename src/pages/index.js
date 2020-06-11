import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Button, Stack, Text } from '@chakra-ui/core';

import { GiSpellBook } from 'react-icons/gi';

import Ability from '../components/Ability';
import Container from '../components/Container';
import PostCard from '../components/PostCard';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const Section = ({ children, ...props }) => (
  <Box as='section' my='8' {...props}>
    {children}
  </Box>
);

const SectionTitle = ({ children, ...props }) => (
  <Text as='h2' fontSize='4xl' textAlign='center' mb='8' {...props}>
    {children}
  </Text>
);

const ButtonLink = ({ children, icon, ...props }) => (
  <Button
    as={Link}
    rightIcon={icon}
    variantColor='teal'
    variant='outline'
    css={{
      svg: {
        width: '1.5rem',
        height: '1.5rem',
    }
  }}
    {...props}
  >
    {children}
  </Button>
);

const Top = ({ data: { allMdx }, location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Container>
        <Section id='status'>
          <SectionTitle>ステータスオープン！</SectionTitle>
          <Ability />
        </Section>
        <Section id='careers'>
          <SectionTitle>職務経歴</SectionTitle>
        </Section>
        <Section id='developments'>
          <SectionTitle>開発実績</SectionTitle>
        </Section>
        <Section id='blog'>
          <SectionTitle>ブログ</SectionTitle>
          <Stack spacing='20'>
            {allMdx.edges.map(({ node: post }) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </Stack>
          <Box textAlign='center' mt='4'>
            <ButtonLink to='/blog' icon={GiSpellBook} >
              ブログ記事一覧へ
            </ButtonLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 5) {
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`;

export default Top;
