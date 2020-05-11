import React, { useLayoutEffect, useState } from 'react';
import { useColorMode, Box } from '@chakra-ui/core';

const Table = props => (
  <Box as='table' textAlign='left' mt='32px' width='full' {...props} />
);

const THead = props => {
  const { colorMode } = useColorMode();

  // Note: Workaround this bug https://github.com/YuukiOkamoto/my-blog/issues/14
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  const bg = { light: 'blackAlpha.100', dark: 'whiteAlpha.100' };

  return (
    <Box
      as='th'
      bg={bg[colorMode]}
      fontWeight='semibold'
      p='2'
      fontSize='sm'
      visibility={mounted ? 'visible' : 'hidden'}
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
