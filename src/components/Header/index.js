import React from 'react';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/core';

import Nav from './Nav';
import NavDrawer from './NavDrawer';

import Container from '../Container';
import useSiteMetadata from '../../hooks/use-site-config';

const Header = ({ isHome }) => {
  const { title } = useSiteMetadata();

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Box
      as='header'
      whiteSpace='nowrap'
      position='fixed'
      zIndex='docked'
      w='full'
      bg='white'
    >
      <Container px={[1, 1, 3]} py='2' maxW='containers.xl'>
        <Flex align='center' justify='space-between' wrap='warp'>
          <Link as={GatsbyLink} to={`/`} _hover={{ textDecoration: 'none' }}>
            <Stack isInline align='center' spacing='2' w='max-content'>
              <Image
                fixed={logo.childImageSharp.fixed}
                style={{ height: '32px', width: '32px' }}
              />
              <Heading as={isHome ? 'h1' : 'h3'} fontSize={['md', 'xl', '2xl']}>
                {title}
              </Heading>
            </Stack>
          </Link>
          <Nav isHome={isHome} />
        </Flex>
      </Container>
      <NavDrawer d={['inline-block', 'inline-block', 'none', 'none']} />
    </Box>
  );
};

export default Header;
