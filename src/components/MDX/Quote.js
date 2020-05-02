import React from 'react';
import { css } from '@emotion/core';
import { useColorMode, Box } from '@chakra-ui/core';

import theme from '../../theme';

const Quote = props => {
  const { colorMode } = useColorMode();
  const text = { light: 'blackAlpha.700', dark: 'whiteAlpha.700' };

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

export default Quote;
