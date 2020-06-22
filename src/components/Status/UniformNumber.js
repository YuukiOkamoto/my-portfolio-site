import React from 'react';
import { useTheme, Box } from '@chakra-ui/core';
import { css } from '@emotion/core';

const UniformNumber = ({ number, ...props }) => {
  const { colors, shadows } = useTheme();

  return (
    <Box
      position='relative'
      border='1px'
      borderColor='blue.500'
      w='50px'
      h='15px'
      boxShadow='sm'
      css={css`
        &::before,
        &::after {
          content: '';
          position: absolute;
          right: 0;
          left: 0;
          width: 0;
          height: 0;
          margin: auto;
        }
        &::before {
          bottom: -22px;
          border-color: ${colors.blue[500]};
          border-width: 0 40px 21px 0;
          box-shadow: ${shadows.sm};
        }
        &::after {
          bottom: -21px;
          border-color: #fff;
          border-width: 0 38px 22px 0;
        }
      `}
      {...props}
    >
      <Box
        color='blue.600'
        fontSize='2xl'
        fontWeight='bold'
        position='absolute'
        top='-2px'
        textAlign='center'
        w='100%'
        zIndex='1'
      >
        {number}
      </Box>
    </Box>
  );
};

export default UniformNumber;
