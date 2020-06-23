import React from 'react';
import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Stack,
} from '@chakra-ui/core';

import SNSButtons from './SNSButtons';
import ScrollLink from './ScrollLink';
import Link from './Link';

import useSiteMetadata from '../../hooks/use-site-config';

const ListLink = props => (
  <ListItem>
    <ListIcon icon='arm' />
    <Link {...props} p='0'></Link>
  </ListItem>
);

const Nav = ({ isHome, ...props }) => {
  const { snsAccounts } = useSiteMetadata();

  return (
    <Stack as='nav' isInline spacing='3' fontSize='md' {...props}>
      {isHome ? (
        <Flex
          align='center'
          d={['none', 'none', 'inline-block', 'inline-block']}
        >
          <ScrollLink to={`status`}>ステータス</ScrollLink>
          <ScrollLink to={`careers`}>職務経歴</ScrollLink>
          <ScrollLink to={`muscles`}>筋肉経歴</ScrollLink>
          <ScrollLink to={`developments`}>開発実績</ScrollLink>
          <ScrollLink to={`blog`}>ブログ</ScrollLink>
        </Flex>
      ) : (
        <Flex align='center' d={['none', 'none', 'flex', 'flex']}>
          <Popover usePortal trigger='hover'>
            <PopoverTrigger>
              <div>
                <Link to='/'>自己紹介</Link>
              </div>
            </PopoverTrigger>
            <PopoverContent zIndex='dropdown' w='auto'>
              <PopoverArrow />
              <Box py='3' pl='4' pr='6'>
                <List spacing='3'>
                  <ListLink to={`#status`}>ステータス</ListLink>
                  <ListLink to={`#careers`}>職務経歴</ListLink>
                  <ListLink to={`#muscles`}>筋肉経歴</ListLink>
                  <ListLink to={`#developments`}>開発実績</ListLink>
                </List>
              </Box>
            </PopoverContent>
          </Popover>
          <Link to={`/blog`}>ブログ</Link>
        </Flex>
      )}
      <SNSButtons pr={[4, 4, 0]} snsAccounts={snsAccounts} />
    </Stack>
  );
};

export default Nav;
