import { theme } from '@chakra-ui/core';
import customIcons from "./iconPaths"
import customColors from './customColors';

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  colors: {
    ...theme.colors,
    ...customColors,
  },
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
