import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import {
  useColorMode,
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  PseudoBox,
  Text,
} from '@chakra-ui/core';

import Tags from '../Tags';

const PostCard = ({ post, ...props }) => {
  const { colorMode } = useColorMode();
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <PseudoBox
      as='article'
      pb={8}
      borderBottomWidth='1px'
      _last={{ borderBottomWidth: 0 }}
      {...props}
    >
      <Box as='header'>
        <Heading as='h3' mb={1}>
          <Link
            as={GatsbyLink}
            to={post.fields.slug}
            _hover={{ textDecoration: 'none', color: 'orange.300' }}
          >
            {title}
          </Link>
        </Heading>
        <Flex
          justify='space-between'
          color={{ light: 'gray.500', dark: 'gray.400' }[colorMode]}
        >
          <Flex align='center'>
            <Icon name='calendar' size={3} mr={2} />
            <Text as='span' fontSize='xs'>
              {post.frontmatter.date}
            </Text>
          </Flex>
          <Tags post={post} fontSize='xs' color='orange.300' />
        </Flex>
      </Box>
      <Box as='section' mt={2}>
        <Text
          color={{ light: 'gray.600', dark: 'gray.300' }[colorMode]}
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
        />
      </Box>
    </PseudoBox>
  );
};

export default PostCard;