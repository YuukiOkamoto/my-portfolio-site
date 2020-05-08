import React, { useEffect, useState } from 'react';
import { useColorMode, Box, Flex } from '@chakra-ui/core';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === rootPath;

  const { colorMode } = useColorMode();
  const [, setHasRendered] = useState(false);

  // Workaround this bug: https://github.com/chakra-ui/chakra-ui/issues/511
  useEffect(() => {
    if (colorMode === 'dark') setHasRendered(true);
  }, []);

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
