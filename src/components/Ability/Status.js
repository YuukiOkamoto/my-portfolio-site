import React from 'react';
import { useTheme, Box, Flex } from '@chakra-ui/core';

import { generateAlphaColors } from '../../theme/colors-utils';

const Grade = ({ value, ...props }) => {
  const { colors } = useTheme();

  let grade = {};
  if (value < 30) grade = { value: 'G', color: colors.gray[500] };
  else if (value < 40) grade = { value: 'F', color: colors.cyan[500] };
  else if (value < 50) grade = { value: 'E', color: colors.green[400] };
  else if (value < 60) grade = { value: 'D', color: colors.yellow[200] };
  else if (value < 70) grade = { value: 'C', color: colors.yellow[500] };
  else if (value < 80) grade = { value: 'B', color: colors.red[500] };
  else if (value < 100) grade = { value: 'A', color: colors.pink[500] };
  else grade = { value: 'S', color: colors.pink[200] };

  return (
    <Box
      color={grade.color}
      textShadow={`0px 1px 2px ${grade.color}`}
      {...props}
    >
      {grade.value}
    </Box>
  );
};

const Status = ({ name, value, type, ...props }) => {
  const { colors } = useTheme();

  return (
    <Flex
      justify='space-between'
      borderRadius='lg'
      bg='white'
      shadow='sm'
      py='1'
      pl='2'
      pr='6'
      {...props}
    >
      <Flex
        align='center'
        justify='center'
        border='1px'
        borderColor='gray.300'
        borderRadius='lg'
        boxShadow={`0px -8px 0px 0px ${
          generateAlphaColors(colors.gray[300])[400]
        } inset`}
        color='blue.600'
        fontWeight='bold'
        w='50%'
      >
        {name}
      </Flex>
      <Grade value={value} fontSize='2xl' fontWeight='bold' />
      <Box
        color='blue.700'
        fontSize='2xl'
        fontWeight='bold'
        textAlign='right'
        textShadow={`0px 1px 2px ${colors.blue[[700]]}`}
        w='20%'
      >
        {value}
      </Box>
    </Flex>
  );
};

export default Status;
