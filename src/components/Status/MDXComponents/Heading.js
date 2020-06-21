import React from 'react';
import { css } from '@emotion/core';
import { Heading as ChakraHeading } from '@chakra-ui/core';

const Heading = props => (
  <ChakraHeading
    fontFamily='pawapuro'
    css={css`
      a.anchor {
        display: none;
      }
    `}
    {...props}
  >
    {props.children}
  </ChakraHeading>
);

export default Heading;
