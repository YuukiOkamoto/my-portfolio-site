import React from 'react';
import {
  Code,
  Divider,
  Image,
  ListItem,
  Link,
  Text,
} from '@chakra-ui/core';

import Heading from './Heading'
import List from './List'
import Quote from './Quote'
import Table, { THead, TData } from './Table'

const components = {
  h2: props => <Heading as='h2' size='xl' mt='12' mb='5' {...props} />,
  h3: props => <Heading as='h3' size='lg' mt='9' mb='4' {...props} />,
  h4: props => <Heading as='h4' size='md' mt='6' mb='3' {...props} />,
  h5: props => <Heading as='h5' size='sm' mt='3' mb='2' {...props} />,
  h6: props => <Heading as='h6' size='xs' mt='1' mb='1' {...props} />,
  inlineCode: props => <Code variantColor='orange' px='1' {...props} />,
  p: props => <Text my='5' fontSize='md' {...props} />,
  ul: props => <List styleType='disc' {...props} />,
  ol: props => <List styleType='decimal' {...props} />,
  li: props => <ListItem fontSize='md' {...props} />,
  a: props => <Link color='orange.300' {...props} />,
  hr: Divider,
  thematicBreak: Divider,
  blockquote: Quote,
  image: props => <Image maxW='100%' {...props} />,
  table: Table,
  th: THead,
  td: TData,
};

export default components;
