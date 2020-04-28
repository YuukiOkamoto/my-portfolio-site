import React from 'react';
import { css } from '@emotion/core';

import { rhythm } from '../utils/typography';

import Header from './header';
import Footer from './footer';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === rootPath;

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          margin-left: auto;
          margin-right: auto;
          max-width: ${rhythm(32)};
          padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
        `}
      >
        <Header isHome={isHome} />
        <main
          css={css`
            flex: 1;
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
