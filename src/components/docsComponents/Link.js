import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Icon, Link as ChakraLink } from '@chakra-ui/core';
import { FiExternalLink } from 'react-icons/fi';

const Link = ({ color = 'orange.300', children, ...props }) => (
  <>
    {props.isExternal ? (
      <ChakraLink isExternal color={color} {...props}>
        {children}
        <Icon as={FiExternalLink} pb='.15em' />
      </ChakraLink>
    ) : (
      <ChakraLink as={GatsbyLink} to={props.href} color={color} {...props}>
        {children}
      </ChakraLink>
    )}
  </>
);

export default Link;
