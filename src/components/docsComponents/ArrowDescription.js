import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/core';
import { TiArrowRightOutline } from 'react-icons/ti';

const ArrowDescription = ({ children: [title, description], ...props }) => (
  <Box py='5' {...props}>
    <Text fontWeight='bold'>{title}</Text>
    <Box mt='2' position='relative' opacity='.9'>
      <Icon
        as={TiArrowRightOutline}
        fontSize={['md', 'xl']}
        position='absolute'
        top={['15%', '10%']}
      />
      <Text ml={[5, 8]}>{description}</Text>
    </Box>
  </Box>
);

export default ArrowDescription;
