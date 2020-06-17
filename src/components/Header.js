import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ReactScrollLink } from 'react-scroll';
import {
  useTheme,
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

const ScrollLink = props => {
  const { colors, space } = useTheme();

  return (
    <ReactScrollLink
      smooth={true}
      duration={800}
      offset={-20}
      css={{
        paddingRight: space[2],
        paddingLeft: space[2],
        cursor: 'pointer',
        transition: 'all 0.15s ease-out',
        '&:hover': {
          color: colors.orange[300],
        },
      }}
      {...props}
    />
  );
};

const Header = ({ isHome }) => {
  const { title, snsAccounts } = useSiteMetadata();
  const { breakpoints, colors } = useTheme();

  const mdMask = {};
  mdMask[`@media screen and (min-width: ${breakpoints.md})`] = {
    maskImage: 'none',
  };

  return (
    <Box
      as='header'
      whiteSpace='nowrap'
      position='fixed'
      zIndex='docked'
      w='full'
      bg='white'
    >
      <Container px={[1, 1, 3]} py='2' maxW='containers.xl'>
        <Flex align='center' justify='space-between' wrap='warp'>
          <Link as={GatsbyLink} to={`/`} _hover={{ textDecoration: 'none' }}>
            <Stack isInline align='center' spacing='2' w='max-content'>
              <Image size='8' src={siteIcon} />
              <Heading as={isHome ? 'h1' : 'h3'} fontSize={['md', 'xl', '2xl']}>
                {title}
              </Heading>
            </Stack>
          </Link>
          <Stack
            as='nav'
            isInline
            spacing='3'
            fontSize={['xs', 'sm', 'md']}
            overflowX='auto'
            css={{
              maskImage:
                'linear-gradient(to right, transparent, black 30px, black 90%, transparent)',
              ...mdMask,
            }}
          >
            {isHome ? (
              <Flex align='center'>
                <ScrollLink to={`status`}>ステータス</ScrollLink>
                <ScrollLink to={`careers`}>職務経歴</ScrollLink>
                <ScrollLink to={`muscles`}>筋肉経歴</ScrollLink>
                <ScrollLink to={`developments`}>開発実績</ScrollLink>
                <ScrollLink to={`blog`}>ブログ</ScrollLink>
              </Flex>
            ) : (
              <Flex align='center'>
                <Link
                  as={GatsbyLink}
                  _hover={{ color: colors.orange[300] }}
                  px='2'
                  to={`#status`}
                >
                  ステータス
                </Link>
                <Link
                  as={GatsbyLink}
                  _hover={{ color: colors.orange[300] }}
                  px='2'
                  to={`#careers`}
                >
                  職務経歴
                </Link>
                <Link
                  as={GatsbyLink}
                  _hover={{ color: colors.orange[300] }}
                  px='2'
                  to={`#muscles`}
                >
                  筋肉経歴
                </Link>
                <Link
                  as={GatsbyLink}
                  _hover={{ color: colors.orange[300] }}
                  px='2'
                  to={`#developments`}
                >
                  開発実績
                </Link>
                <Link
                  as={GatsbyLink}
                  _hover={{ color: colors.orange[300] }}
                  px='2'
                  to={`/blog`}
                >
                  ブログ
                </Link>
              </Flex>
            )}
            <SNSButtons pr={[4, 4, 0]} snsAccounts={snsAccounts} />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
