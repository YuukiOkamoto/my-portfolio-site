import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GiMuscleUp } from 'react-icons/gi';
import { Flex, Tag as ChakraTag, TagIcon, TagLabel } from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

const Tag = ({ tag, tagColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ChakraTag
      as={GatsbyLink}
      to={`tags/${kebabCase(tag)}`}
      fontFamily='heading'
      variant={isHovered ? 'solid' : 'outline'}
      variantColor={tagColor}
      ml={[0, 0, 2]}
      mr={[2, 2, 0]}
      mb='2'
      transition='.1s'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TagIcon icon={GiMuscleUp} />
      <TagLabel>{tag}</TagLabel>
    </ChakraTag>
  );
};
const Tags = ({ post, fontSize, tagColor }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <Flex
      flexDirection={['row', 'row', 'row-reverse']}
      align='center'
      flexWrap='wrap'
      mt='2'
      fontSize={fontSize}
    >
      {tags.map((tag, i) => (
        <Tag key={i} tag={tag} tagColor={tagColor} />
      ))}
    </Flex>
  );
};

export default Tags;
