import React from 'react';
import {useColorMode, Box, Flex } from '@chakra-ui/core';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, children }) => {
   const { colorMode } = useColorMode();
  const rootPath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === rootPath;
  const bg = {light: 'white', dark: 'gray.800'}

  return (
    <Flex direction='column' minH='100vh' mx='auto' bg={bg[colorMode]}>
      <Header isHome={isHome} />
      <Box as='main' flex='1'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
