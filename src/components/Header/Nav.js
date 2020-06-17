import React from 'react';
import { useTheme, Flex, Stack } from '@chakra-ui/core';

import SNSButtons from './SNSButtons';
import ScrollLink from './ScrollLink';
import Link from './Link';

import useSiteMetadata from '../../hooks/use-site-config';

const Nav = ({ isHome, ...props }) => {
  const { breakpoints } = useTheme();
  const { snsAccounts } = useSiteMetadata();

  const mdMask = {};
  mdMask[`@media screen and (min-width: ${breakpoints.md})`] = {
    maskImage: 'none',
  };

  return (
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
      {...props}
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
          <Link to={`#status`}>ステータス</Link>
          <Link to={`#careers`}>職務経歴</Link>
          <Link to={`#muscles`}>筋肉経歴</Link>
          <Link to={`#developments`}>開発実績</Link>
          <Link to={`/blog`}>ブログ</Link>
        </Flex>
      )}
      <SNSButtons pr={[4, 4, 0]} snsAccounts={snsAccounts} />
    </Stack>
  );
};

export default Nav;
