import React from 'react';
import { css } from '@emotion/core';

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
