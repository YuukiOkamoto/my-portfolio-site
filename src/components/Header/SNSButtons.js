import React from 'react';
import { Link, IconButton, Stack } from '@chakra-ui/core';
import { FiTwitter, FiGithub } from 'react-icons/fi';

const HeaderIconButton = ({ bgColor, ...props }) => {
  const invertedColor = {
    bg: bgColor || 'black',
    color: 'white',
  };

  return (
    <IconButton
      borderColor='blackAlpha.600'
      variant='outline'
      isRound
      _hover={{
        opacity: 0.8,
        ...invertedColor,
      }}
      _focus={{
        boxShadow: 'outline',
        opacity: 0.6,
        ...invertedColor,
      }}
      _active={{
        opacity: 0.4,
        ...invertedColor,
      }}
      {...props}
    />
  );
};

const TwitterButton = ({ author, ...props }) => (
  <HeaderIconButton
    as={Link}
    aria-label={`Link to my Twitter ${author}`}
    bgColor='twitter.brand'
    icon={FiTwitter}
    href={`https://twitter.com/${author}`}
    target='_blank'
    {...props}
  />
);

const NoteButton = ({ author, ...props }) => (
  <HeaderIconButton
    as={Link}
    aria-label={`Link to my Note ${author}`}
    bgColor='note.brand'
    icon='note'
    href={`https://note.com/${author}`}
    target='_blank'
    {...props}
  />
);

const GitHubButton = ({ author, ...props }) => (
  <HeaderIconButton
    as={Link}
    aria-label={`Link to my GitHub ${author}`}
    bgColor='blackAlpha.800'
    icon={FiGithub}
    href={`https://github.com/${author}/my-blog`}
    target='_blank'
    {...props}
  />
);

const SNSButtons = ({ snsAccounts, ...props }) => (
  <Stack isInline spacing='1' {...props}>
    <TwitterButton author={snsAccounts.twitter} size='sm' />
    <GitHubButton author={snsAccounts.github} size='sm' />
    <NoteButton author={snsAccounts.note} size='sm' />
  </Stack>
);

export default SNSButtons;
