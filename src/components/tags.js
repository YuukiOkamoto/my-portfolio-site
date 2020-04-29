import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { FaHashtag } from 'react-icons/fa';
import { Box, Flex, Link, List, ListItem, PseudoBox } from '@chakra-ui/core';

import kebabCase from 'lodash/kebabCase';

const Tags = ({ post, fontSize, color }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <Flex align='center' fontSize={fontSize} color={color}>
      <List display='flex' flex-wrap='wrap'>
        {tags.map((tag, i) => {
          const isLast = i === tags.length - 1;
          return (
            <ListItem key={i}>
              <Link as={GatsbyLink} to={`tags/${kebabCase(tag)}`}>
                <PseudoBox
                  display='flex'
                  alignItems='center'
                  _after={!isLast && { content: "' ,'", mr: 1 }}
                >
                  <Box as={FaHashtag} size={3} mr='2px' />
                  {tag}
                </PseudoBox>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default Tags;
