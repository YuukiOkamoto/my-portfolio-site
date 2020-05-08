import React from 'react';
import {
  useColorMode,
  Link,
  PseudoBox,
  Stack,
} from '@chakra-ui/core';

import { FaTwitter, FaGithub } from 'react-icons/fa';

const SnsAccountList = ({ snsAccounts }) => {
  const { colorMode } = useColorMode();
  const iconColor = {
    hover: {
      twitter: { light: 'blue.300', dark: 'blue.500' },
      github: { light: 'black', dark: 'white'}
}  }

  return (
    <Stack isInline align='center' spacing='2'>
      <Link href={`https://twitter.com/${snsAccounts.twitter}`} isExternal>
        <PseudoBox
          as={FaTwitter}
          size='4'
          opacity='.6'
          transition='.1'
          _hover={{ color: iconColor.hover.twitter[colorMode], opacity: 1 }}
          _focus={{ bg: 'transparent' }}
        />
      </Link>
      <Link href={`https://github.com/${snsAccounts.github}`} isExternal>
        <PseudoBox
          as={FaGithub}
          size='4'
          opacity='.6'
          transition='.1'
          _hover={{ color: iconColor.hover.github[colorMode], opacity: 1 }}
          _focus={{ bg: 'transparent' }}
        />
      </Link>
    </Stack>
  );
};

export default SnsAccountList;
