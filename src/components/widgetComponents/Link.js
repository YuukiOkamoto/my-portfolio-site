import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ChakraLink } from '@chakra-ui/core';

const Link = ({ href, color = 'orange.300', ...props }) => (
  <ChakraLink as={GatsbyLink} to={href} color={color} {...props} />
);

export default Link;
