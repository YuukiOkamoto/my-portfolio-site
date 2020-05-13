import React from 'react';
import { Box, Icon, Stack } from '@chakra-ui/core';
import { TiArrowRightOutline } from 'react-icons/ti';

const ArrowDescription = ({ children: [title, description], ...props }) => (
  <Box py='5' {...props}>
    <Box fontWeight='bold'>{title}</Box>
    <Stack isInline spacing={['4px', 2]} mt='2' opacity='.9'>
      <Icon
        as={TiArrowRightOutline}
        fontSize={['md', 'xl']}
        mt={['4px', 1]}
      />
      <Box>{description}</Box>
    </Stack>
  </Box>
);

export default ArrowDescription;
