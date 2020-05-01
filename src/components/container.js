import React from 'react';
import { Box } from '@chakra-ui/core';

const Container = ({ children }) => (
  <Box
    m='0 auto'
    py={3}
    px={8}
    width={['100%', '100%', '90%', '50%']}
  >
    {children}
  </Box>
);

export default Container;
