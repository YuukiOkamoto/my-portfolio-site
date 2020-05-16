import React from 'react';
import { useColorMode, Stack, Text } from '@chakra-ui/core';

const Callout = ({
  emoji,
  emojiSize = 'xl',
  bg = { light: 'gray.50', dark: 'whiteAlpha.50' },
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      isInline
      d='inline-flex'
      spacing='3'
      align='center'
      bg={bg[colorMode]}
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
