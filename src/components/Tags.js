import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GiMuscleUp } from 'react-icons/gi';
import { Flex, Tag as ChakraTag, Box, TagLabel } from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

const Tag = ({ tag, plain, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkProps = plain
    ? {}
    : {
        as: GatsbyLink,
        to: `/tags/${kebabCase(tag)}/`,
        transition: '.1s',
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      };

  return (
    <ChakraTag
      fontFamily='heading'
      variant={isHovered ? 'solid' : 'outline'}
      variantColor='orange'
      ml={[0, 0, 2]}
      mr={[2, 2, 0]}
      mb='2'
      {...linkProps}
      {...props}
    >
      <Box as={GiMuscleUp} mr='2' />
      <TagLabel>{tag}</TagLabel>
    </ChakraTag>
  );
};

const Tags = ({ post, fontSize, plain, ...props }) => {
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
        <Tag key={i} tag={tag} plain={plain} />
      ))}
    </Flex>
  );
};

export default Tags;
