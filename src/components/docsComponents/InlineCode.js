import React, { useLayoutEffect, useState } from 'react';
import { Code } from '@chakra-ui/core';

const InlineCode = ({ color = 'orange', ...props }) => {
  // Note: Workaround this bug https://github.com/YuukiOkamoto/my-blog/issues/14
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Code
      px='1'
      variant={color}
      visibility={mounted ? 'visible' : 'hidden'}
      {...props}
    />
  );
};

export default InlineCode;
