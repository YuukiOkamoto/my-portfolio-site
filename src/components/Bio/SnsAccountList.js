import React from 'react';
import {
  Link,
  PseudoBox,
  Stack,
} from '@chakra-ui/core';

import { FaTwitter, FaGithub } from 'react-icons/fa';

const SnsAccountList = ({ snsAccounts }) => (
  <Stack isInline align='center' spacing={1}>
    <Link href={`https://twitter.com/${snsAccounts.twitter}`} isExternal>
      <PseudoBox
        as={FaTwitter}
        size='4'
        color='gray.400'
        _hover={{ color: 'blue.500' }}
        _focus={{ bg: 'transparent' }}
      />
    </Link>
    <Link href={`https://github.com/${snsAccounts.github}`} isExternal>
      <PseudoBox
        as={FaGithub}
        size='4'
        color='gray.400'
        _hover={{ color: 'gray.500' }}
        _focus={{ bg: 'transparent' }}
      />
    </Link>
  </Stack>
);

export default SnsAccountList;
