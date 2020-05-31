import React from 'react';
import {
  useDisclosure,
  Box,
  Icon,
  Collapse as ChakraCollapse,
} from '@chakra-ui/core';

const Collapse = ({ children: [summary, ...body], ...props }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box my='6'>
      <Box
        as='span'
        cursor='pointer'
        borderBottom='1px'
        onClick={onToggle}
        {...props}
      >
        {summary}
        <Icon
          aria-hidden
          focusable='false'
          size='1.25em'
          name='chevron-down'
          transform={isOpen ? 'rotate(-180deg)' : null}
          transition='transform 0.2s'
          transformOrigin='center'
        />
      </Box>
      <ChakraCollapse mt={4} isOpen={isOpen}>
        {body}
      </ChakraCollapse>
    </Box>
  );
};

export default Collapse;
