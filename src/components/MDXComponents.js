import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Link,
  Divider,
  Tooltip,
  Icon,
} from '@chakra-ui/core';
import { FiInfo } from 'react-icons/fi';

// export const MDXWrapper = styled.main`
//   .gatsby-code-title {
//     margin-bottom: -0.6rem;
//     padding: 0.5em 1em;
//     font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
//       'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
//       'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
//       monospace;

//     background-color: #444;
//     color: white;
//     z-index: 0;

//     border-top-left-radius: 0.3em;
//     border-top-right-radius: 0.3em;
//   }
//   code {
//     padding: 0;
//   }
//   a.anchor {
//     position: absolute;
//     left: -0.8em;
//   }
// `;

const MDXComponents = {
  h2: props => <Heading {...props} as='h2' size='2xl' mt='6' mb='2' />,
  h3: props => <Heading {...props} as='h3' size='lg' mt='4' mb='1' />,
  h4: props => <Heading {...props} as='h4' size='md' mt='3' mb='1' />,
  h5: props => <Heading {...props} as='h5' size='sm' mt='2' mb='1' />,
  h6: props => <Heading {...props} as='h6' size='xs' mt='1' />,
  p: props => <Text mb='4' fontSize='lg' {...props} />,
  ul: props => (
    <List my='4' styleType='disc' stylePos='inside' spacing='3' {...props} />
  ),
  ol: props => <List my='4' styleType='decimal' spacing='3' {...props} />,
  li: props => <ListItem fontSize='lg' {...props} />,
  a: props => <Link color='orange.700' {...props} />,
  hr: Divider,
  thematicBreak: Divider,
  blockquote: props => (
    <Box
      bg='orange.50'
      py='3'
      px='4'
      my='4'
      borderLeft='5px solid'
      borderColor='orange.300'
    >
      <Text {...props} mb='-16px' />
    </Box>
  ),
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