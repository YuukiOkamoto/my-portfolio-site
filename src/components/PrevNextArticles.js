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
              to={`/blog${prev.fields.slug}`}
              rel='prev'
              moveTo='left'
            >
              <Flex
                align='center'
                justify={['center', 'center', 'flex-start']}
                opacity='.8'
              >
                <Icon
                  transition='transform .2s'
                  className='chevrons'
                  as={FiChevronsLeft}
                  mr='2'
                />
                {prev.frontmatter.title}
              </Flex>
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
              to={`/blog${next.fields.slug}`}
              rel='next'
              moveTo='right'
            >
              <Flex
                align='center'
                justify={['center', 'center', 'flex-end']}
                opacity='.8'
              >
                {next.frontmatter.title}
                <Icon
                  transition='transform .2s'
                  className='chevrons'
                  as={FiChevronsRight}
                  ml='2'
                />
              </Flex>
            </ChevronsLink>
          </>
        )}
      </Box>
    </SimpleGrid>
  </Box>
);

export default PrevNextArticles;
