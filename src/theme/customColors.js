import { theme } from '@chakra-ui/core';

const chakraColors = theme.colors;

const snsColors = {
  twitter: {
    brand: '#1DA1F2',
  },
  facebook: {
    brand: '#3A67A2',
  },
  hatena: {
    brand: '#1A9BE1',
  },
  pocket: {
    brand: '#EC435A',
  },
};

const customColors = {
  ...snsColors,
  headerIcon: {
    light: {
      border: chakraColors.blackAlpha[600],
      bg: chakraColors.black,
      hoverColor: chakraColors.white,
    },
    dark: {
      border: chakraColors.whiteAlpha[600],
      bg: chakraColors.white,
      hoverColor: chakraColors.black,
    },
  },
};

export default customColors;
