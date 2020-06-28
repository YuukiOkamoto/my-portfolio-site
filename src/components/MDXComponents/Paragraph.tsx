import React, { FC, ComponentProps } from 'react';
import { Text } from '@chakra-ui/core';

const Paragraph: FC<ComponentProps<typeof Text>> = props => (
  <Text my='8' fontSize={['sm', 'md']} lineHeight='1.8' {...props} />
);

export default Paragraph;
