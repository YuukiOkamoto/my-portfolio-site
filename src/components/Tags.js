import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GiMuscleUp } from 'react-icons/gi';
import { Box, Flex, PseudoBox } from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

const Tag = ({ tag , ...props}) => {
  return (
    <PseudoBox
      as={GatsbyLink}
      to={`/tags/${kebabCase(tag)}/`}
      display='inline-flex'
      alignItems='center'
      border='1px'
      borderColor='orange.400'
      color='orange.400'
      minH='8'
      minW='8'
      px='3'
      maxW='100%'
      rounded='md'
      fontFamily='heading'
      fontWeight='medium'
      ml={[0, 0, 2]}
      mr={[2, 2, 0]}
      mb='2'
      transition='.1s'
      _hover={{
        bg: 'orange.400',
        color: `white`,
      }}
      {...props}
    >
      <Box as={GiMuscleUp} focusable='false' color='currentColor' mr='2' />
      <Box isTruncated as='span'>
        {tag}
      </Box>
    </PseudoBox>
  );
};

const Tags = ({ post, fontSize, ...props }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <Flex
      flexDirection={['row', 'row', 'row-reverse']}
      align='center'
      flexWrap='wrap'
      mt='2'
      fontSize={fontSize}
      {...props}
    >
      {tags.map((tag, i) => (
        <Tag
          key={i}
          tag={tag}
        />
      ))}
    </Flex>
  );
};

export default Tags;
