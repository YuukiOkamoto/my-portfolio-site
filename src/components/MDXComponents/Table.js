import React from 'react';
import { Box } from '@chakra-ui/core';

const Table = props => (
  <Box
    as='table'
    d='block'
    textAlign='left'
    mt='32px'
    width='full'
    overflowX='scroll'
    whiteSpace='nowrap'
    {...props}
  />
);

const THead = props => (
  <Box
    as='th'
    bg='blackAlpha.100'
    fontWeight='semibold'
    p='2'
    fontSize='sm'
    whiteSpace='nowrap'
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
    whiteSpace='nowrap'
    {...props}
  />
);

export { THead, TData };
export default Table;
