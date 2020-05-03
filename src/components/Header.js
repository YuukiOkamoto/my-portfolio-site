import React from 'react';
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
import { FiTwitter, FiGithub } from 'react-icons/fi';

import Container from './Container';
import useSiteMetadata from '../hooks/use-site-config';

import siteIcon from '../../content/assets/bodybuilding.png';

const Header = ({ isHome }) => {
  const { title, snsAccounts } = useSiteMetadata();
  const { colorMode, toggleColorMode } = useColorMode();
  const innerColor = { light: 'black', dark: 'white' };
  const iconColors = {
    color: {
      hover: { light: 'white', dark: 'black' },
    },
    border: { light: 'blackAlpha.600', dark: 'whiteAlpha.600' },
  };

  const HeaderIconButton = ({ colors, ...props }) => (
    <IconButton
      borderColor={colors.border[colorMode]}
      variant='outline'
      isRound
      _hover={{
        bg: colors.bg.hover[colorMode],
        color: colors.color.hover[colorMode],
      }}
      _focus={{ bg: colors.bg.focus[colorMode], boxShadow: 'outline' }}
      _active={{ bg: colors.bg.active[colorMode] }}
      {...props}
    />
  );

  const TwitterButton = ({ author, ...props }) => {
    const twitterColors = {
      ...iconColors,
      bg: {
        hover: { light: 'blue.500', dark: 'blue.400' },
        focus: { light: 'blue.200', dark: 'blue.700' },
        active: { light: 'blue.700', dark: 'blue.200' },
      },
    };

    return (
      <HeaderIconButton
        as={Link}
        aria-label={`Link to my Twitter ${author}`}
        colors={twitterColors}
        icon={FiTwitter}
        href={`https://twitter.com/${author}`}
        target='_blank'
        {...props}
      />
    );
  };

  const GitHubButton = ({ author, ...props }) => {
    const gitHubColors = {
      ...iconColors,
      bg: {
        hover: { light: 'blackAlpha.600', dark: 'whiteAlpha.600' },
        focus: { light: 'blackAlpha.400', dark: 'whiteAlpha.400' },
        active: { light: 'blackAlpha.800', dark: 'whiteAlpha.800' },
      },
    };

    return (
      <HeaderIconButton
        as={Link}
        aria-label={`Link to my GitHub ${author}`}
        colors={gitHubColors}
        icon={FiGithub}
        href={`https://github.com/${author}`}
        target='_blank'
        {...props}
      />
    );
  };

  const ThemeButton = props => {
    const themeColors = {
      ...iconColors,
      bg: {
        hover: { light: 'blackAlpha.600', dark: 'whiteAlpha.600' },
        focus: { light: 'blackAlpha.400', dark: 'whiteAlpha.400' },
        active: { light: 'blackAlpha.800', dark: 'whiteAlpha.800' },
      },
    };

    return (
      <HeaderIconButton
        aria-label='Toggle theme'
        colors={themeColors}
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        {...props}
      />
    );
  };

  return (
    <Box as='header' color={innerColor[colorMode]}>
      <Container px='3' py='2'>
        <Flex as='header' align='center' justify='space-between' wrap='warp'>
          <Link as={GatsbyLink} to={`/`} _hover={{ textDecoration: 'none' }}>
            <Stack isInline align='center' spacing='1'>
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
