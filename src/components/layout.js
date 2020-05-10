import React　from 'react';
import { Box, Flex } from '@chakra-ui/core';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === rootPath;

  return (
    <Flex direction='column' minH='100vh' mx='auto'>
      <Header isHome={isHome} />
      <Box as='main' flex='1'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
