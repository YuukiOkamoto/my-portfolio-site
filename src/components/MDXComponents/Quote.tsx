import React, { FC, ComponentProps } from 'react';
import { css } from '@emotion/core';
import { Box } from '@chakra-ui/core';

import theme from '../../theme';

const Quote: FC<ComponentProps<typeof Box>> = props => (
  <Box
    as='blockquote'
    boxSizing='content-box'
    opacity={0.7}
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
      }
      p {
        font-size: ${theme.fontSizes.sm};
      }
      > *:first-of-type {
        margin-top: 0;
      }
    `}
    {...props}
  />
);

export default Quote;
