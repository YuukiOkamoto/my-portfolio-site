import React from 'react';
import { Box, IconButton, Link, Stack } from '@chakra-ui/core';
import { FaTwitter, FaFacebookF, FaGetPocket } from 'react-icons/fa';

const SnsIconButton = ({ mr, ...props }) => (
  <Box as='aside' shadow='md' rounded='full' mr={mr}>
    <IconButton
      as={Link}
      isRound
      variant='ghost'
      target='_blank'
      opacity='.8'
      _hover={{
        opacity: 1,
      }}
      _active={{
        opacity: 0.6,
        bg: props.bg,
        shadow: 'none',
      }}
      _focus={{
        opacity: 0.6,
        shadow: 'none',
      }}
      {...props}
    />
  </Box>
);

const SnsShare = ({ url, title, ...props }) => (
  <Stack
    isInline
    spacing='2'
    justify={['center', 'center', 'flex-end']}
    {...props}
  >
    <SnsIconButton
      icon={FaTwitter}
      href={`http://twitter.com/share?url=${url}&text=${title}`}
      color='white'
      bg='twitter.brand'
    />
    <SnsIconButton
      icon={FaFacebookF}
      href={`http://www.facebook.com/sharer.php?u=${url}&amp;t=${title}`}
      color='white'
      bg='facebook.brand'
    />
    <SnsIconButton
      icon='hatenaBookmark'
      href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
      color='white'
      bg='hatena.brand'
    />
    <SnsIconButton
      icon={FaGetPocket}
      href={`http://getpocket.com/edit?url=${url}&title=${title}`}
      color='white'
      bg='pocket.brand'
    />
  </Stack>
);

export default SnsShare;
