import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import kebabCase from 'lodash/kebabCase';


export default ({ post }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
      `}
    >
      {tags.map((tag, i) => (
        <li
          key={i}
          css={css`
            padding: 5px;
          `}
        >
          <Link
            to={`tags/${kebabCase(tag)}`}
            css={css`
              box-shadow: none;
            `}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};
