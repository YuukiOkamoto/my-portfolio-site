import React from 'react';
import { css } from '@emotion/core';

import { rhythm } from '../utils/typography';

import ResetCSS from './reset-css';
import Header from './header';
import Footer from './footer';

const Layout = ({ location, children }) => (
  <>
    <ResetCSS />
    <div
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: ${rhythm(32)};
        padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
      `}
    >
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
