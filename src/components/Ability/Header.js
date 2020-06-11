import React from 'react';
import Image from 'gatsby-image';
import { Flex, Stack, Text } from '@chakra-ui/core';

import AuthorName from './AuthorName';
import Remarks from './Remarks';
import Timestamp from './Timestamp';
import UniformNumber from './UniformNumber';

const Header = ({ author, avatar, isEngineer }) => (
  <Stack isInline wrap='wrap' spacing='2' my='3' p='2'>
    <Stack
      spacing='3'
      w={['100%', '100%', '240px']}
      flexDirection={['row', 'row', 'colum']}
      flexWrap='wrap'
    >
      <Stack isInline spacing='4' mx='auto'>
        <AuthorName>{author.name.split('@')[0]}</AuthorName>
        <UniformNumber number='29' />
      </Stack>
      <Timestamp isEngineer />
    </Stack>
    <Flex
      flex='1'
      direction={['column', 'column', 'row']}
      align='center'
      my={[2, 2, 0]}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
        alt={author.name}
        css={{
          marginBottom: '0',
          minHeight: '100px',
          minWidth: '100px',
        }}
      />
      <Remarks isEngineer={isEngineer} flex='1' mt={[2, 2, 0]} ml={[0, 0, 2]} />
    </Flex>
  </Stack>
);

export default Header;
