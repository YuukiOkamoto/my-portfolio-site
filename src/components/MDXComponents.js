import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  useColorMode,
  Box,
  Divider,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Link,
  Text,
  Tooltip,
} from '@chakra-ui/core';
import { FiInfo } from 'react-icons/fi';

import theme from '../theme';

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

const DocsHeading = props => (
  <Heading
    css={css`
      &:hover {
        a.anchor svg {
          visibility: visible;
        }
      }
      a.anchor {
        color: inherit;
        float: left;
        padding-right: 4px;
        margin-left: -20px;

        svg {
          visibility: hidden;
          fill: currentColor;
        }

        &:hover {
          color: ${theme.colors.orange[300]};
        }
      }
    `}
    {...props}
  >
    {props.children}
  </Heading>
);

const Quote = props => {
  const { colorMode } = useColorMode();
  const text = { light: 'gray.500', dark: 'gray.400' };
  const mark = { light: 'gray.300', dark: 'gray.600' };
  return (
    <Box
      as='blockquote'
      boxSizing='content-box'
      color={text[colorMode]}
      my={6}
      py={3}
      pl={8}
      pr={4}
      position='relative'
      css={css`
        &::before {
          content: '\\201C';
          font-family: 'YuGothic';
          position: absolute;
          font-size: ${theme.fontSizes['6xl']};
          line-height: 1;
          top: 0;
          left: 0;
          color: ${mark[colorMode]};
        }
        p {
          font-size: ${theme.fontSizes.sm};
        }
        > *:first-of-type {
          margin-top: 0;
        }
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const MDXComponents = {
  wrapper: Wrapper,
  h2: props => <DocsHeading {...props} as='h2' size='xl' mt='12' mb='5' />,
  h3: props => <DocsHeading {...props} as='h3' size='lg' mt='9' mb='4' />,
  h4: props => <DocsHeading {...props} as='h4' size='md' mt='6' mb='3' />,
  h5: props => <DocsHeading {...props} as='h5' size='sm' mt='3' mb='2' />,
  h6: props => <DocsHeading {...props} as='h6' size='xs' mt='1' mb='1' />,
  p: props => <Text my='5' fontSize='md' {...props} />,
  ul: props => (
    <List
      my='4'
      styleType='disc'
      stylePos='inside'
      spacing='3'
      {...props}
    />
  ),
  ol: props => <List my='4' styleType='decimal' spacing='3' {...props} />,
  li: props => <ListItem fontSize='md' {...props} />,
  a: props => <Link color='orange.300' {...props} />,
  hr: Divider,
  thematicBreak: Divider,
  blockquote: Quote,
  image: props => <Image maxW='100%' {...props} />,
  table: props => (
    <Box
      as='table'
      border='1px solid'
      borderColor='gray.300'
      bg='red.400'
      my='4'
      mx='auto'
      {...props}
    />
  ),
  tr: props => <Box as='tr' bg='red' mb='2' {...props} />,
  td: props => <Box as='td' bg='gray.50' px='4' py='3' {...props} />,
  th: props => (
    <Box
      as='td'
      bg='gray.100'
      px='4'
      py='3'
      fontWeight='bold'
      borderBottom='1px'
      borderColor='gray.300'
      {...props}
    />
  ),
  Tooltip: props => (
    <Tooltip hasArrow {...props}>
      <Box d='inline'>
        {props.children} <Icon as={FiInfo} />
      </Box>
    </Tooltip>
  ),
};

export default MDXComponents;
