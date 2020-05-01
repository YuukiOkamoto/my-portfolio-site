import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: 'Roboto Slab, M PLUS 1p',
    body: 'Merriweather, Noto Sans JP',
  },
  lineHeights: {
    shorter: 1.1,
  },
};

export default customTheme;
