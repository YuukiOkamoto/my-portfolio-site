import React from 'react';
import {
  Box,
  Divider,
  Image,
  Link,
  ListItem,
} from '@chakra-ui/core';

import CodeBlock from './CodeBlock';
import Heading from './Heading';
import InlineCode from './InlineCode';
import List from './List';
import Paragraph from './Paragraph';
import Quote from './Quote';
import Table, { THead, TData } from './Table';

const MDXComponents = {
  h2: props => <Heading as='h2' size='lg' mt='16' mb='8' py='3' pl='1' borderTop='2px' borderBottom='2px' borderStyle='dotted' {...props} />,
  h3: props => <Heading as='h3' size='md' mt='12' mb='6' py='2' pl='1' borderBottom='1px dotted' {...props} />,
  h4: props => <Heading as='h4' size='sm' mt='6' mb='3' {...props} />,
  h5: props => <Heading as='h5' size='xs' mt='3' mb='2' {...props} />,
  h6: props => <Heading as='h6' size='xs' mt='1' mb='1' {...props} />,
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: props => <Box my='6' rounded='sm' {...props} />,
  p: Paragraph,
  ul: props => <List styleType='disc' {...props} />,
  ol: props => <List styleType='decimal' {...props} />,
  li: props => <ListItem  fontSize={['sm', 'md']} {...props} />,
  a: props => <Link color='orange.300' {...props} />,
  hr: Divider,
  thematicBreak: Divider,
  blockquote: Quote,
  image: props => <Image maxW='100%' {...props} />,
  table: Table,
  th: THead,
  td: TData,
};

export default MDXComponents;
