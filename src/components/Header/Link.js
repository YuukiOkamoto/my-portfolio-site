import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useTheme, Link as ChakraLink } from '@chakra-ui/core';

const Link = props => {
  const { colors } = useTheme();

  return (
    <ChakraLink
      as={GatsbyLink}
      d='block'
      transition='opacity, color 0.15s ease-out'
      _hover={{
        borderBottom: '1px solid',
        borderImage: `linear-gradient(to right, ${colors.orange[200]}, ${colors.orange[400]}) 1 / 0 0 1px / 0.2em`,
        opacity: 0.8,
      }}
      px='2'
      {...props}
    />
  );
};

export default Link;
