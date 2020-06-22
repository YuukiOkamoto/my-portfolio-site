import React from 'react';
import { useTheme, Flex } from '@chakra-ui/core';

const AuthorName = props => {
  const { colors } = useTheme();
  return (
    <Flex
      background={`linear-gradient(to bottom,
                  ${colors.green[100]} 0%,
                  ${colors.green[100]} 50%,
                  ${colors.green[200]} 50%,
                  ${colors.green[200]} 100%)`}
      border='2px'
      borderColor='green.50'
      borderRadius='lg'
      fontSize='2xl'
      fontWeight='bold'
      lineHeight='1.1'
      align='center'
      justify='center'
      w='150px'
      h='40px'
      shadow='sm'
      {...props}
    />
  );
};

export default AuthorName;
