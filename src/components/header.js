import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Button, useColorMode } from '@chakra-ui/core';

import useSiteMetadata from '../hooks/use-site-config';

const Header = ({ isHome }) => {
  const { title } = useSiteMetadata();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      {isHome ? (
        <h1>
          <Link
            css={css`
              text-decoration: none;
            `}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      ) : (
        <h3>
          <Link
            css={css`
              text-decoration: none;
            `}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )}
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
};

export default Header;
