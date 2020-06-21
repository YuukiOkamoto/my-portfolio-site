import { theme } from '@chakra-ui/core';
import customIcons from './iconPaths';
import customColors from './customColors';
import { yuGothic } from './fonts';

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
    heading: `-apple-system, BlinkMacSystemFont, ${yuGothic}, Segoe UI, Helvetica Neue,  メイリオ, meiryo, sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, ${yuGothic}, Segoe UI, Helvetica Neue,  メイリオ, meiryo, sans-serif`,
    pawapuro: `Hiragino Maru Gothic ProN, Libian SC, -apple-system, BlinkMacSystemFont, ${yuGothic}, Segoe UI, Helvetica Neue,  メイリオ, meiryo, sans-serif`,
  },
  lineHeights: {
    shorter: 1.1,
  },
};

export default customTheme;
