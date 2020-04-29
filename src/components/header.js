import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useColorMode, Flex, Heading, Link, IconButton } from '@chakra-ui/core';

import useSiteMetadata from '../hooks/use-site-config';

const Header = ({ isHome }) => {
  const { title } = useSiteMetadata();
  const { colorMode, toggleColorMode } = useColorMode();
  const headingSize = isHome ? '2xl' : 'lg'

  return (
    <Flex as='header' align='center' justify='space-between' wrap='warp'>
      <Heading as='h1' size={headingSize} mb='8'>
        <Link as={GatsbyLink} to={`/`}>
          {title}
        </Link>
      </Heading>
      <IconButton
        aria-label='Toggle theme'
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        variant='ghost'
        isRound
        onClick={toggleColorMode}
      />
    </Flex>
    // <header>
  );
};

export default Header;
