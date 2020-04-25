import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useSiteMetadata from '../hooks/use-site-config';
import { rhythm, scale } from '../utils/typography';

const Header = ({ isHome }) => {
  const { title } = useSiteMetadata();

  return (
    <header>
      {isHome ? (
        <h1
          css={css`
            font-size: ${scale(1.5).fontSize};
            line-height: ${scale(1.5).lineHeight};
            margin-bottom: ${rhythm(1.5)};
          `}
        >
          <Link
            css={css`
              box-shadow: none;
              color: inherit;
            `}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      ) : (
        <h3
          css={css`
            font-family: Montserrat, sans-serif;
          `}
        >
          <Link
            css={css`
              box-shadow: none;
              color: inherit;
            `}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )}
    </header>
  );
};

export default Header;
