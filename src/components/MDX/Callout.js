import React, { useEffect, useState } from 'react';
import { useColorMode, Stack, Text } from '@chakra-ui/core';

const Callout = ({ emoji, children, ...props }) => {
  const { colorMode } = useColorMode();

  // Note: Workaround this bug https://github.com/YuukiOkamoto/my-blog/issues/14
  const [bg, setBg] = useState('');
  useEffect(() => {
    setBg({ light: 'gray.100', dark: 'gray.700' }[colorMode]);
  }, [colorMode]);

  return (
    <Stack
      isInline
      d='inline-flex'
      spacing='3'
      align='center'
      bg={bg}
      py='2'
      px='4'
      borderRadius='lg'
      {...props}
    >
      <Text fontSize='3xl'>{emoji}</Text>
      <Text wordBreak='break-word'>
        {children}
      </Text>
    </Stack>
  );
};

export default Callout;
