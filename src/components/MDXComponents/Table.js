import React from 'react';
import { Box } from '@chakra-ui/core';

const Table = props => (
  <Box as='table' textAlign='left' mt='32px' width='full' {...props} />
);

const THead = props => (
  <Box
    as='th'
    bg='blackAlpha.100'
    fontWeight='semibold'
    p='2'
    fontSize='sm'
    {...props}
  />
);

const TData = props => (
  <Box
    as='td'
    p='2'
    borderTopWidth='1px'
    borderColor='inherit'
    fontSize='sm'
    whiteSpace='normal'
    {...props}
  />
);

export { THead, TData };
export default Table;
