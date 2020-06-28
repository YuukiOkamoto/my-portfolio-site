import React, { FC, ComponentProps } from 'react';
import { Code } from '@chakra-ui/core';

const InlineCode: FC<ComponentProps<typeof Code>> = ({ color = 'orange', ...props }) => {

  return (
    <Code
      px='1'
      variantColor={color}
      {...props}
    />
  );
};

export default InlineCode;
