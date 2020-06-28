import React, { FC, ComponentProps } from 'react';
import { Box, Divider, Image, Link } from '@chakra-ui/core';

import CodeBlock from './CodeBlock';
import { H2, H3, H4, H5, H6 } from './Heading';
import InlineCode from './InlineCode';
import { Ul, Ol, Li } from './List';
import Paragraph from './Paragraph';
import Quote from './Quote';
import Table, { THead, TData } from './Table';

const MDXComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: (props: FC<ComponentProps<typeof Box>>) => (
    <Box my='6' rounded='sm' {...props} />
  ),
  p: Paragraph,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: (props: FC<ComponentProps<typeof Link>>) => (
    <Link color='orange.300' {...props} />
  ),
  hr: Divider,
  thematicBreak: Divider,
  blockquote: Quote,
  image: (props: FC<ComponentProps<typeof Image>>) => (
    <Image maxW='100%' {...props} />
  ),
  table: Table,
  th: THead,
  td: TData,
};

export default MDXComponents;
