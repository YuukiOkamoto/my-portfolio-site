import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Grid, Heading, Link, Stack, Text } from '@chakra-ui/core';

import ChevronsLink from './ChevronsLink';
import Tags from './Tags';

const PostCard = ({ post, ...props }) => {
  const path = post.fields.slug;

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
        <Heading as='h3' size='lg' gridArea='title' pl={[0, 0, 6]}>
          <Link
            as={GatsbyLink}
            to={path}
            _hover={{ textDecoration: 'none', color: 'orange.300' }}
          >
            {post.frontmatter.title}
          </Link>
        </Heading>
        <Text
          as='div'
          fontSize='sm'
          opacity='.7'
          fontFamily='heading'
          gridArea='meta'
          justifySelf={['flex-start', 'flex-start', 'flex-end']}
          textAlign={['left', 'left', 'right']}
          pr='6'
        >
          {post.frontmatter.date}
          <br />
          {post.fields.readingTime.text}
          <Tags post={post} fontSize='xs' />
        </Text>
        <Box
          gridArea='preview'
          borderLeft={['none', 'none', '1px']}
          borderColor='blackAlpha.400'
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
            <Text opacity='.7' wordBreak='break-all'>
              {post.excerpt}
            </Text>
          </Box>
          <Box mt='3'>
            <ChevronsLink to={path} moveTo='right'>
              Read more
            </ChevronsLink>
          </Box>
        </Box>
      </Grid>
    </Stack>
  );
};

export default PostCard;
