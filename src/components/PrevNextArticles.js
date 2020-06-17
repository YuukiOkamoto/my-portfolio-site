import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/core';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import ChevronsLink from './ChevronsLink';

const PrevNextArticles = ({ prev, next, ...props }) => (
  <Box as='nav' {...props}>
    <SimpleGrid columns={[1, 1, 2]} spacing={[2, 2, 5]}>
      <Box>
        {prev && (
          <>
            <Text
              opacity='.5'
              mb='2'
              ml={[0, 0, 8]}
              textAlign={['center', 'center', 'left']}
            >
              Prev post
            </Text>
            <ChevronsLink
              as={GatsbyLink}
              to={prev.fields.slug}
              rel='prev'
              moveTo='left'
              d='flex'
              justifyContent='flex-start'
              alignItems='center'
            >
              {prev.frontmatter.title}
            </ChevronsLink>
          </>
        )}
      </Box>
      <Box>
        {next && (
          <>
            <Text
              opacity='.5'
              fontSize='sm'
              mb='2'
              mr={[0, 0, 8]}
              textAlign={['center', 'center', 'right']}
            >
              Next post
            </Text>

            <ChevronsLink
              as={GatsbyLink}
              to={next.fields.slug}
              rel='next'
              moveTo='right'
              d='flex'
              justifyContent='flex-end'
              alignItems='center'
            >
              {next.frontmatter.title}
            </ChevronsLink>
          </>
        )}
      </Box>
    </SimpleGrid>
  </Box>
);

export default PrevNextArticles;
