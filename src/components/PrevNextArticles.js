import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  useColorMode,
  Box,
  Flex,
  Grid,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import ChevronsLink from './ChevronsLink';

const PrevNextArticles = ({ prev, next, ...props }) => {
  const { colorMode } = useColorMode();

  const titleColor = { light: 'blackAlpha.700', dark: 'whiteAlpha.700' };
  const subColor = { light: 'blackAlpha.500', dark: 'whiteAlpha.500' };
  return (
    <Box as='nav' {...props}>
      <SimpleGrid columns={[1, 1, 2]} spacing={[2, 2, 5]}>
        <Box>
          {prev && (
            <>
              <Text
                color={subColor[colorMode]}
                fontSize='sm'
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
                color={titleColor[colorMode]}
                moveTo='left'
              >
                <Flex
                  align='center'
                  justify={['center', 'center', 'flex-start']}
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
                color={subColor[colorMode]}
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
                color={titleColor[colorMode]}
                moveTo='right'
              >
                <Flex align='center' justify={['center', 'center', 'flex-end']}>
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
};

export default PrevNextArticles;
