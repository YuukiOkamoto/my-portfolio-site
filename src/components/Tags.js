import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { FaHashtag } from 'react-icons/fa';
import {
  useColorMode,
  Box,
  Flex,
  Link,
  Stack,
  PseudoBox,
} from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

const Tags = ({ post, fontSize, color }) => {
  const { colorMode } = useColorMode();
  const { tags } = post.frontmatter;
  const comma = {
    content: '","',
    color: { light: 'blackAlpha.500', dark: 'whiteAlpha.500' }[colorMode],
  };

  if (!tags) return null;

  return (
    <Flex align='center' fontSize={fontSize} color={color}>
      <Stack isInline align='center' spacing={1}>
        {tags.map((tag, i) => {
          const isLast = i === tags.length - 1;
          return (
            <Link key={i} as={GatsbyLink} to={`tags/${kebabCase(tag)}`}>
              <PseudoBox
                display='flex'
                alignItems='center'
                _after={!isLast && comma}
              >
                <Box as={FaHashtag} size={3} mr='2px' />
                {tag}
              </PseudoBox>
            </Link>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default Tags;
