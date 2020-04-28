import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { TypographyStyle } from 'react-typography';
import typography from '../utils/typography';

const WrapRootElement = ({ element }) => (
  <ThemeProvider>
    <ColorModeProvider>
      <CSSReset />
      <TypographyStyle typography={typography} />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);

export default WrapRootElement;
