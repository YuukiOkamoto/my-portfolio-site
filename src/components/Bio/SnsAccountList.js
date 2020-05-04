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
    default: { light: 'blackAlpha.600', dark: 'whiteAlpha.600' },
    hover: {
      twitter: { light: 'blue.300', dark: 'blue.500' },
      github: { light: 'black', dark: 'white'}
}  }

  return (
    <Stack isInline align='center' spacing={1}>
      <Link href={`https://twitter.com/${snsAccounts.twitter}`} isExternal>
        <PseudoBox
          as={FaTwitter}
          size='4'
          color={iconColor.default[colorMode]}
          _hover={{ color: iconColor.hover.twitter[colorMode] }}
          _focus={{ bg: 'transparent' }}
        />
      </Link>
      <Link href={`https://github.com/${snsAccounts.github}`} isExternal>
        <PseudoBox
          as={FaGithub}
          size='4'
          color={iconColor.default[colorMode]}
          _hover={{ color: iconColor.hover.github[colorMode] }}
          _focus={{ bg: 'transparent' }}
        />
      </Link>
    </Stack>
  );
};

export default SnsAccountList;
