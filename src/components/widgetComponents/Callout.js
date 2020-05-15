import React, { useLayoutEffect, useState } from 'react';
import { useColorMode, Stack, Text } from '@chakra-ui/core';

const Callout = ({
  emoji,
  emojiSize = 'xl',
  bg = { light: 'gray.50', dark: 'whiteAlpha.50' },
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();

  // Note: Workaround this bug https://github.com/YuukiOkamoto/my-blog/issues/14
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

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
      visibility={mounted ? 'visible' : 'hidden'}
      {...props}
    >
      <Text fontSize={emojiSize}>{emoji}</Text>
      <Text wordBreak='break-word'>{children}</Text>
    </Stack>
  );
};

export default Callout;
