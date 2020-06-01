import React from 'react';
import { Box } from '@chakra-ui/core';

const Title = ({ children, ...props }) => (
  <Box
    fontFamily='Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace'
    fontSize='sm'
    py='1'
    px='4'
    color='white'
    bg='#444444'
    overflowX='auto'
    {...props}
  >
    {children}
  </Box>
);

export default Title;
