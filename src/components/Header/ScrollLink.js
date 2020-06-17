import React from 'react';
import { Link as ReactScrollLink } from 'react-scroll';
import { useTheme } from '@chakra-ui/core';

const ScrollLink = props => {
  const { colors, space } = useTheme();

  return (
    <ReactScrollLink
      smooth={true}
      duration={800}
      offset={-20}
      css={{
        paddingRight: space[2],
        paddingLeft: space[2],
        cursor: 'pointer',
        transition: 'all 0.15s ease-out',
        '&:hover': {
          color: colors.orange[300],
        },
      }}
      {...props}
    />
  );
};

export default ScrollLink;
