import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { TypographyStyle } from 'react-typography';
import typography from './src/utils/typography';
import 'typeface-montserrat';
import 'typeface-merriweather';

import 'prismjs/themes/prism-tomorrow.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <ColorModeProvider>
      <CSSReset />
      <TypographyStyle typography={typography} />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);
