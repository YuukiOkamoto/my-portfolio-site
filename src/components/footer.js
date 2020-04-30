import React from 'react';
import { Box, Link } from '@chakra-ui/core';

import Container from './Container';

const Footer = () => (
  <Box as='footer'>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link href='https://www.gatsbyjs.org' isExternal>
        Gatsby
      </Link>
    </Container>
  </Box>
);

export default Footer;
