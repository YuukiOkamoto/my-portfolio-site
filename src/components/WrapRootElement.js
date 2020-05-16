import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import theme from '../theme'

const WrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {element}
  </ThemeProvider>
);

export default WrapRootElement;
