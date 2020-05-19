import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@chakra-ui/core';

const ChevronsLink = ({ moveTo, ...props }) => (
  <Link
    as={GatsbyLink}
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
);

export default ChevronsLink;
