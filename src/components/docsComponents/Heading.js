import React from 'react';
import { css } from '@emotion/core';
import { Heading as ChakraHeading } from '@chakra-ui/core';

import theme from '../../theme';

const Heading = props => (
  <ChakraHeading
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
  </ChakraHeading>
);

export default Heading;
