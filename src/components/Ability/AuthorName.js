import React from 'react';
import { useTheme, Flex } from '@chakra-ui/core';

const AuthorName = ({ children, ...props }) => {
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
      fontSize='xl'
      fontWeight='bold'
      lineHeight='1.1'
      align='center'
      justify='center'
      w='120px'
      h='30px'
      shadow='sm'
      {...props}
    >
      {children}
    </Flex>
  );
};

export default AuthorName;
