import React from 'react';
import { List as ChakraList } from '@chakra-ui/core';

const List = props => (
  <ChakraList my='4' ml='5' stylePos='outline' spacing='3' {...props} />
);

export default List;
