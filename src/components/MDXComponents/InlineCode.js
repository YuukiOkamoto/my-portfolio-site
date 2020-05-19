import React from 'react';
import { Code } from '@chakra-ui/core';

const InlineCode = ({ color = 'orange', ...props }) => {

  return (
    <Code
      px='1'
      variant={color}
      {...props}
    />
  );
};

export default InlineCode;
