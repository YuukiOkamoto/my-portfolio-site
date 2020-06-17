import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useTheme, Link as ChakraLink } from '@chakra-ui/core';

const Link = props => {
  const { colors } = useTheme();

  return (
    <ChakraLink
      as={GatsbyLink}
      _hover={{ color: colors.orange[300] }}
      px='2'
      {...props}
    />
  );
};

export default Link;
