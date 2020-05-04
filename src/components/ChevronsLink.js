import React from 'react';
import { Link } from '@chakra-ui/core';

const ChevronsLink = ({ moveTo, ...props }) => (
  <Link
    fontFamily='heading'
    fontWeight='600'
    _focus={{
      boxShadow: 'outline',
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
