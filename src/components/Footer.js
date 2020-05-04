import React from 'react';
import { Box, Icon, Link, Stack, Text } from '@chakra-ui/core';
import { MdCopyright } from 'react-icons/md';

import Container from './Container';

const Footer = () => (
  <Box as='footer' py='1'>
    <Container>
      <Stack isInline spacing='4' justify='center'>
        <Text fontSize='xs'>
          Made with{` `}
          <Link href='https://www.gatsbyjs.org/' isExternal>
            Gatsby
          </Link>
          &{' '}
          <Link href='https://chakra-ui.com/' isExternal>
            ChakraUi
          </Link>
        </Text>
        <Text fontSize='xs'>
          <Icon transform='translateY(-2px)' as={MdCopyright} />{' '}
          Yuuki Okamoto &bull; {new Date().getFullYear()}
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
