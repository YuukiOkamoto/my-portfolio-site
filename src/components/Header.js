import React, { useLayoutEffect, useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  useColorMode,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  IconButton,
  Stack,
} from '@chakra-ui/core';
import { FiTwitter, FiGithub, FiMoon, FiSun } from 'react-icons/fi';

import Container from './Container';
import useSiteMetadata from '../hooks/use-site-config';

import siteIcon from '../../content/assets/bodybuilding.png';

const Header = ({ isHome }) => {
  const { title, snsAccounts } = useSiteMetadata();
  const { colorMode, toggleColorMode } = useColorMode();

  // Note: Workaround this bug https://github.com/YuukiOkamoto/my-blog/issues/14
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  const HeaderIconButton = ({ bgColor, ...props }) => {
    const borderColors = { light: 'blackAlpha.600', dark: 'whiteAlpha.600' };
    const bgColors = { light: 'black', dark: 'white' };
    const hoverColors = { light: 'white', dark: 'black' };

    return (
      <IconButton
        borderColor={borderColors[colorMode]}
        variant='outline'
        isRound
        _hover={{
          bg: bgColor || bgColors[colorMode],
          color: hoverColors[colorMode],
          opacity: 0.8,
        }}
        _focus={{
          bg: bgColor || bgColors[colorMode],
          boxShadow: 'outline',
          color: hoverColors[colorMode],
          opacity: 0.6,
        }}
        _active={{
          bg: bgColor || bgColors[colorMode],
          color: hoverColors[colorMode],
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
      bgColor={{ light: 'blackAlpha.800', dark: 'whiteAlpha.800'}[colorMode]}
      icon={FiGithub}
      href={`https://github.com/${author}`}
      target='_blank'
      {...props}
    />
  );

  return (
    <Box as='header' visibility={mounted ? 'visible' : 'hidden'}>
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
