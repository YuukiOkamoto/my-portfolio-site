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
  const [, setHasRendered] = useState(false);
  useLayoutEffect(() => {
    setHasRendered(true);
  }, []);

  const HeaderIconButton = ({ bgColor, ...props }) => (
    <IconButton
      borderColor={`headerIcon.${colorMode}.border`}
      variant='outline'
      isRound
      _hover={{
        bg: bgColor || `headerIcon.${colorMode}.bg`,
        color: `headerIcon.${colorMode}.hoverColor`,
        opacity: 0.8,
      }}
      _focus={{
        bg: bgColor || `headerIcon.${colorMode}.bg`,
        boxShadow: 'outline',
        color: `headerIcon.${colorMode}.hoverColor`,
        opacity: 0.6,
      }}
      _active={{
        bg: bgColor || `headerIcon.${colorMode}.bg`,
        color: `headerIcon.${colorMode}.hoverColor`,
        opacity: 0.4,
      }}
      {...props}
    />
  );

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

  const GitHubButton = ({ author, ...props }) => (
    <HeaderIconButton
      as={Link}
      aria-label={`Link to my GitHub ${author}`}
      icon={FiGithub}
      href={`https://github.com/${author}`}
      target='_blank'
      {...props}
    />
  );

  const ThemeButton = props => (
    <HeaderIconButton
      aria-label='Toggle theme'
      icon={colorMode === 'light' ? FiMoon : FiSun}
      onClick={toggleColorMode}
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
            <ThemeButton size='sm' />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
