import React, { FC, ComponentProps } from 'react';
import { List as ChakraList, ListItem } from '@chakra-ui/core';

const List: FC<ComponentProps<typeof ChakraList>> = props => (
  <ChakraList my='4' ml='5' stylePos='outside' spacing='3' {...props} />
);

const Ul: FC<ComponentProps<typeof List>> = props => (
  <List styleType='disc' {...props} />
);

const Ol: FC<ComponentProps<typeof List>> = props => (
  <List styleType='decimal' {...props} />
);

const Li: FC<ComponentProps<typeof ListItem>> = props => (
  <ListItem fontSize={['sm', 'md']} {...props} />
);

export { Ul, Ol, Li };
export default List;
