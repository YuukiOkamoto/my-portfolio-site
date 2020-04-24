import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useSiteMetadata from '../hooks/use-site-config';
import { rhythm, scale } from '../utils/typography';

const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const { title } = useSiteMetadata();

  return (
    <header>
      {location.pathname === rootPath ? (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      ) : (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
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
