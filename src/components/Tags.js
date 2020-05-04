import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GiBiceps } from 'react-icons/gi';
import { Flex, Stack, Tag, TagIcon, TagLabel } from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

const Tags = ({ post, fontSize, tagColor }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <Flex align='center' fontSize={fontSize}>
      <Stack isInline align='center' spacing={1}>
        {tags.map((tag, i) => (
          <Tag
            key={i}
            as={GatsbyLink}
            to={`tags/${kebabCase(tag)}`}
            variantColor={tagColor}
          >
            <TagIcon icon={GiBiceps} />
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Stack>
    </Flex>
  );
};

export default Tags;
