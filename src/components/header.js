import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  useColorMode,
  Box,
  Flex,
  Heading,
  Link,
  IconButton,
} from '@chakra-ui/core';

import Container from './Container';
import useSiteMetadata from '../hooks/use-site-config';

const Header = ({ isHome }) => {
  const { title } = useSiteMetadata();
  const { colorMode, toggleColorMode } = useColorMode();
  const SiteTitle = ({ children }) => (
    <>
      {isHome ? (
        <Heading as='h1' size='2xl'>
          {children}
        </Heading>
      ) : (
        <Heading as='h3' size='lg'>
          {children}
        </Heading>
      )}
    </>
  );

  return (
    <Box as='header' mb='4'>
      <Container>
        <Flex as='header' align='center' justify='space-between' wrap='warp'>
          <SiteTitle>
            <Link as={GatsbyLink} to={`/`} _hover={{ textDecoration: 'none' }}>
              {title}
            </Link>
          </SiteTitle>
          <IconButton
            aria-label='Toggle theme'
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            variant='ghost'
            isRound
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
