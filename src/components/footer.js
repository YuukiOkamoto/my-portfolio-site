import React from 'react';
import { Box, Link } from '@chakra-ui/core';

const Footer = () => (
  <Box as='footer'>
    © {new Date().getFullYear()}, Built with
    {` `}
    <Link href='https://www.gatsbyjs.org' isExternal>
      Gatsby
    </Link>
  </Box>
);

export default Footer;
