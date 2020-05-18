import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  IconButton,
  Stack,
} from '@chakra-ui/core';
import { FiTwitter, FiGithub} from 'react-icons/fi';

import Container from './Container';
import useSiteMetadata from '../hooks/use-site-config';

import siteIcon from '../../content/assets/bodybuilding.png';

const Header = ({ isHome }) => {
  const { title, snsAccounts } = useSiteMetadata();

  const HeaderIconButton = ({ bgColor, ...props }) => {

    return (
      <IconButton
        borderColor='blackAlpha.600'
        variant='outline'
        isRound
        _hover={{
          bg: bgColor || 'black',
          color: 'white',
          opacity: 0.8,
        }}
        _focus={{
          bg: bgColor || 'black',
          boxShadow: 'outline',
          color: 'white',
          opacity: 0.6,
        }}
        _active={{
          bg: bgColor || 'black',
          color: 'white',
          opacity: 0.4,
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
      href={`https://github.com/${author}`}
      target='_blank'
      {...props}
    />
  );

  return (
    <Box as='header'>
      <Container px='3' py='2'>
        <Flex as='header' align='center' justify='space-between' wrap='warp'>
          <Link as={GatsbyLink} to={`/`} _hover={{ textDecoration: 'none' }}>
            <Stack isInline align='center' spacing='2'>
              <Image size='8' src={siteIcon} />
              <Heading as={isHome ? 'h1' : 'h3'} size='lg'>
                {title}
              </Heading>
            </Stack>
          </Link>
          <Stack isInline spacing='1'>
            <TwitterButton author={snsAccounts.twitter} size='sm' />
            <GitHubButton author={snsAccounts.github} size='sm' />
            <NoteButton author={snsAccounts.note} size='sm' />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
