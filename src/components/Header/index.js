import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Heading, Image, Link, Stack } from '@chakra-ui/core';

import Nav from './Nav';

import Container from '../Container';
import useSiteMetadata from '../../hooks/use-site-config';

import siteIcon from '../../../content/assets/bodybuilding.png';

const Header = ({ isHome }) => {
  const { title } = useSiteMetadata();

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
              <Image size='8' src={siteIcon} />
              <Heading as={isHome ? 'h1' : 'h3'} fontSize={['md', 'xl', '2xl']}>
                {title}
              </Heading>
            </Stack>
          </Link>
          <Nav isHome={isHome} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
