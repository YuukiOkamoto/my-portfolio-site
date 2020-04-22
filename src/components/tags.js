import React from 'react';

import kebabCase from 'lodash/kebabCase';

import { Link } from 'gatsby';

export default ({ post }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <ul
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        listStyle: `none`,
      }}
    >
      {tags.map((tag, i) => (
        <li
          key={i}
          style={{
            padding: `5px`,
          }}
        >
          <Link
            to={`tags/${kebabCase(tag)}`}
            style={{
              boxShadow: `none`,
            }}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};
