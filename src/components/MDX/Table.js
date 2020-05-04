import React from 'react';
import { useColorMode, Box } from '@chakra-ui/core';

const Table = props => (
  <Box as='table' textAlign='left' mt='32px' width='full' {...props} />
);

const THead = props => {
  const { colorMode } = useColorMode();
  const bg = { light: 'blackAlpha.100', dark: 'whiteAlpha.100' };
  return (
    <Box
      as='th'
      bg={bg[colorMode]}
      fontWeight='semibold'
      p='2'
      fontSize='sm'
      {...props}
    />
  );
};

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
