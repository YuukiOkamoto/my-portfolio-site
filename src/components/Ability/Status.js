import React from 'react';
import { useTheme, Flex, Text } from '@chakra-ui/core';

import { generateAlphaColors } from '../../theme/colors-utils';

const Grade = ({ value, ...props }) => {
  let grade = {};
  if (value < 30) grade = { value: 'G', color: 'gray.500' };
  else if (value < 40) grade = { value: 'F', color: 'cyan.500' };
  else if (value < 50) grade = { value: 'E', color: 'green.400' };
  else if (value < 60) grade = { value: 'D', color: 'yellow.200' };
  else if (value < 70) grade = { value: 'C', color: 'yellow.500' };
  else if (value < 80) grade = { value: 'B', color: 'red.500' };
  else if (value < 100) grade = { value: 'A', color: 'pink.500' };
  else grade = { value: 'S', color: 'pink.200' };

  return (
    <Text color={grade.color} {...props}>
      {grade.value}
    </Text>
  );
};

const Status = ({ name, value, type, ...props }) => {
  const { colors } = useTheme();

  return (
    <Flex
      isInline
      justify='space-between'
      borderRadius='lg'
      bg='white'
      maxW='200px'
      py='2'
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
        w='80px'
      >
        {name}
      </Flex>
      <Grade value={value} fontSize='xl' fontWeight='bold' />
      <Text color='blue.700' fontSize='xl' fontWeight='bold'>
        {value}
      </Text>
    </Flex>
  );
};

export default Status;
