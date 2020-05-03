import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  useColorMode,
  Box,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/core';
import { FiChevronsRight } from "react-icons/fi"

import Tags from './Tags';

const PostCard = ({ post, ...props }) => {
  const { colorMode } = useColorMode();
  const textColor = { light: 'blackAlpha.700', dark: 'whiteAlpha.700' };
  const borderColor = { light: 'blackAlpha.400', dark: 'whiteAlpha.400' };

  return (
    <Stack spacing='10' {...props}>
      <Grid
        templateAreas={[
          `"title" "meta" "preview"`,
          `"title" "meta" "preview"`,
          `
            ". title"
            "meta preview"
          `,
        ]}
        rowGap='4'
        templateColumns={['1fr', '1fr', '1fr 3fr']}
      >
        <Heading as='h3' size='lg' gridArea='title' pl={[0, 0, '6']}>
          <Link
            as={GatsbyLink}
            to={post.fields.slug}
            _hover={{ textDecoration: 'none', color: 'orange.300' }}
          >
            {post.frontmatter.title}
          </Link>
        </Heading>
        <Text
          as='div'
          fontSize='sm'
          color={textColor[colorMode]}
          fontFamily='heading'
          gridArea='meta'
          justifySelf={['flex-start', 'flex-start', 'flex-end']}
          textAlign={['left', 'left', 'right']}
          pr='6'
        >
          {post.frontmatter.date}
          <br />
          {post.fields.readingTime.text}
          <Tags post={post} fontSize='xs' color='orange.300' />
        </Text>
        <Box
          gridArea='preview'
          borderLeft={['none', 'none', '1px']}
          borderColor={[null, borderColor[colorMode]]}
          pl={[0, 0, '6']}
        >
          <Box
            maxHeight='32'
            overflow='hidden'
            css={{
              maskImage:
                'linear-gradient(to bottom, black 30%, transparent 100%)',
            }}
          >
            <Text color={textColor[colorMode]} wordBreak='break-all'>
              {post.excerpt}
            </Text>
          </Box>
          <Box mt='3'>
            <Link
              as={GatsbyLink}
              to={post.fields.slug}
              fontFamily='heading'
              fontWeight='600'
              _focus={{
                boxShadow: 'outline',
              }}
              _hover={{
                color: 'orange.300',
                '& > .icon': {
                  transform: 'translateX(6px)',
                },
              }}
            >
              Read more
              <Icon
                transition='transform .2s'
                className='icon'
                as={FiChevronsRight}
              />
            </Link>
          </Box>
        </Box>
      </Grid>
    </Stack>
  );
};

export default PostCard;
