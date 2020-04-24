import React from 'react';

import { rhythm } from '../utils/typography';

import Header from './header';
import Footer from './footer';

const Layout = ({ location, children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <Header location={location} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
