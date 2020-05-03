import React from 'react';
import { Box } from '@chakra-ui/core';

const Container = ({ children, ...props }) => (
  <Box mx='auto' px='6' maxW='containers.lg' {...props}>
    {children}
  </Box>
);

export default Container;
