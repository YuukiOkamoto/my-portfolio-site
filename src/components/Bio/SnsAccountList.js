import React from 'react';
import { Icon, Link, PseudoBox, Stack } from '@chakra-ui/core';

import { FaTwitter, FaGithub } from 'react-icons/fa';

const SnsAccountList = ({ snsAccounts, ...props }) => (
  <Stack isInline align='center' spacing='2' {...props}>
    <Link href={`https://twitter.com/${snsAccounts.twitter}`} isExternal>
      <PseudoBox
        as={FaTwitter}
        size='4'
        opacity='.6'
        transition='.1'
        _hover={{ color: 'twitter.brand', opacity: 1 }}
        _focus={{ bg: 'transparent' }}
      />
    </Link>
    <Link href={`https://github.com/${snsAccounts.github}`} isExternal>
      <PseudoBox
        as={FaGithub}
        size='4'
        opacity='.6'
        transition='.1'
        _hover={{ opacity: 1 }}
        _focus={{ bg: 'transparent' }}
      />
    </Link>
    <Link href={`https://note.com/${snsAccounts.note}`} isExternal mt='-2px' ml='2px'>
      <PseudoBox
        as={Icon}
        name='note'
        size='4'
        opacity='.6'
        transition='.1'
        _hover={{ color: 'note.brand', opacity: 1 }}
        _focus={{ bg: 'transparent' }}
      />
    </Link>
  </Stack>
);

export default SnsAccountList;
