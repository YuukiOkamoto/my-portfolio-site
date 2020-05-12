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
    heading:
      'Roboto, 游ゴシック体, YuGothic, 游ゴシック Medium, Yu Gothic Medium, 游ゴシック, Yu Gothic, Noto Sans JP',
    body:
      'Roboto, 游ゴシック体, YuGothic, 游ゴシック Medium, Yu Gothic Medium, 游ゴシック, Yu Gothic, Noto Sans JP',
  },
  lineHeights: {
    shorter: 1.1,
  },
};

export default customTheme;
