import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link, Icon } from '@chakra-ui/core';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

const ChevronsLink = ({ moveTo, children, ...props }) => (
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
  >
    {moveTo === 'left' && (
      <Icon
        transition='transform .2s'
        className='chevrons'
        as={FiChevronsLeft}
      />
    )}
    {children}
    {moveTo === 'right' && (
      <Icon
        transition='transform .2s'
        className='chevrons'
        as={FiChevronsRight}
      />
    )}
  </Link>
);

export default ChevronsLink;
