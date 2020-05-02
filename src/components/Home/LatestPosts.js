import React from 'react';
import { Stack } from '@chakra-ui/core';

import PostCard from './PostCard';

const LatestPosts = ({ posts }) => (
  <Stack spacing={8}>
    {posts.map(({ node: post }) => (
      <PostCard key={post.fields.slug} post={post} />
    ))}
  </Stack>
);

export default LatestPosts;
