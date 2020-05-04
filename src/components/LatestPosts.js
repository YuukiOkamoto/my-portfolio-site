import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/core';

import PostCard from './PostCard';

const LatestPosts = ({ posts }) => (
  <Box pt='16' pb='24'>
    <Heading as='h2' size='xl' mb='10'>
      Recent Posts
    </Heading>
    <Stack spacing='20'>
      {posts.map(({ node: post }) => (
        <PostCard key={post.fields.slug} post={post} />
      ))}
    </Stack>
  </Box>
);

export default LatestPosts;
