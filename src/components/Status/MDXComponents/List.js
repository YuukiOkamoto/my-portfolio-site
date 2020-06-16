import React from 'react';
import { List as ChakraList } from '@chakra-ui/core';

const List = props => (
  <ChakraList my='2' ml='5' stylePos='outline' spacing='1' {...props} />
);

export default List;
