import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GiMuscleUp } from 'react-icons/gi';
import { Flex, Tag, TagIcon, TagLabel } from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

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
        <Tag
          key={i}
          as={GatsbyLink}
          to={`tags/${kebabCase(tag)}`}
          fontFamily='heading'
          variant='outline'
          variantColor={tagColor}
          ml={[0, 0, 2]}
          mr={[2, 2, 0]}
          mb='2'
        >
          <TagIcon icon={GiMuscleUp} />
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
};

export default Tags;
