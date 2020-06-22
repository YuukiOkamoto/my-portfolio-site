import React from 'react';
import { css } from '@emotion/core';
import { useTheme, Heading as ChakraHeading } from '@chakra-ui/core';

const Heading = props => {
  const { colors } = useTheme();

  return (
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
            color: ${colors.orange[300]};
          }
        }
      `}
      {...props}
    />
  );
};

export default Heading;
