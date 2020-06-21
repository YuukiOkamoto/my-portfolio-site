import React from 'react';
import { Divider, Image, Link, ListItem, Text } from '@chakra-ui/core';

import Heading from './Heading';
import List from './List';
import InlineCode from '../../MDXComponents/InlineCode';

const MDXComponents = {
  h2: props => <Heading as='h2' fontSize='xl' mt='8' mb='4' {...props} />,
  h3: props => <Heading as='h3' fontSize='md' mt='6' mb='3' {...props} />,
  inlineCode: InlineCode,
  p: props => <Text my='2' fontSize={['sm', 'md']} {...props} />,
  ul: props => <List styleType='disc' {...props} />,
  ol: props => <List styleType='decimal' {...props} />,
  li: props => <ListItem fontSize={['sm', 'md']} {...props} />,
  a: props => <Link color='orange.300' {...props} />,
  hr: Divider,
  thematicBreak: Divider,
  image: props => <Image maxW='100%' {...props} />,
};

export default MDXComponents;
