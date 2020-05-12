import React from 'react';
import { Box, Icon, Stack, Text } from '@chakra-ui/core';
import { TiArrowRightOutline } from 'react-icons/ti';

const ArrowDescription = ({ children: [title, description], ...props }) => (
  <Box py='5' {...props}>
    <Text fontWeight='bold'>{title}</Text>
    <Stack isInline spacing='2' mt='2' align='center'>
      <Icon as={TiArrowRightOutline} fontSize='xl' />
      <Text opacity='.9'>{description}</Text>
    </Stack>
  </Box>
);

export default ArrowDescription;
