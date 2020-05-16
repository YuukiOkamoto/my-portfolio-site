import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@chakra-ui/core';

const ChevronsLink = ({ path, moveTo, ...props }) => (
  <GatsbyLink to={path}>
    <Link
      as='span'
      fontFamily='heading'
      fontWeight='600'
      _focus={{
        boxShadow: 'none',
      }}
      _hover={{
        color: 'orange.300',
        '& .chevrons': {
          transform: `translateX(${moveTo === 'left' ? '-' : ''}6px)`,
        },
      }}
      {...props}
    ></Link>
  </GatsbyLink>
);

export default ChevronsLink;
