import React from 'react';
import { Stack, Text } from '@chakra-ui/core';

const Callout = ({
  emoji,
  emojiSize = 'xl',
  bg = 'gray.50',
  children,
  ...props
}) => {

  return (
    <Stack
      isInline
      d='inline-flex'
      spacing='3'
      align='center'
      bg={bg}
      fontSize='sm'
      py='4'
      px='6'
      borderRadius='lg'
      {...props}
    >
      <Text fontSize={emojiSize}>{emoji}</Text>
      <Text wordBreak='break-word'>{children}</Text>
    </Stack>
  );
};

export default Callout;
