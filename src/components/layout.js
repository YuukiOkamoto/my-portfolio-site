import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

import Header from '../components/header';

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
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </footer>
  </div>
);

export default Layout;
