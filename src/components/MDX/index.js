import React from 'react';
import styled from '@emotion/styled';
import {
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


const Wrapper = styled.main`
  .gatsby-code-title {
    margin-bottom: -0.6rem;
    padding: 0.5em 1em;
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
      monospace;

    background-color: #444;
    color: white;
    z-index: 0;

    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }
  code {
    padding: 0;
  }
`;

const components = {
  wrapper: Wrapper,
  h2: props => <Heading as='h2' size='xl' mt='12' mb='5' {...props} />,
  h3: props => <Heading as='h3' size='lg' mt='9' mb='4' {...props} />,
  h4: props => <Heading as='h4' size='md' mt='6' mb='3' {...props} />,
  h5: props => <Heading as='h5' size='sm' mt='3' mb='2' {...props} />,
  h6: props => <Heading as='h6' size='xs' mt='1' mb='1' {...props} />,
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
