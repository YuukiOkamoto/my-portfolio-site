import React from 'react';
import { Box } from '@chakra-ui/core';

const Container = ({ children }) => (
  <Box mx='auto' px={6} maxW='containers.lg'>
    {children}
  </Box>
);

export default Container;
