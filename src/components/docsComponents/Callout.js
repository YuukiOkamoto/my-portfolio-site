import React, { useLayoutEffect, useState } from 'react';
import { useColorMode, Stack, Text } from '@chakra-ui/core';

const Callout = ({ emoji, children, ...props }) => {
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
      bg={{ light: 'gray.100', dark: 'gray.700' }[colorMode]}
      py='2'
      px='4'
      borderRadius='lg'
      visibility={mounted ? 'visible' : 'hidden'}
      {...props}
    >
      <Text fontSize='3xl'>{emoji}</Text>
      <Text wordBreak='break-word'>{children}</Text>
    </Stack>
  );
};

export default Callout;
