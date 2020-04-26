import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { FaHashtag } from 'react-icons/fa';

import kebabCase from 'lodash/kebabCase';

const Tags = ({ post }) => {
  const { tags } = post.frontmatter;

  if (!tags) return null;

  return (
    <Wrapper>
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          list-style: none;
          margin: 0;
          width: 100%;
        `}
      >
        {tags.map((tag, i) => (
          <li
            key={i}
            css={css`
              padding: 5px;
              &:not(:last-child)::after {
                content: ' ,';
              }
            `}
          >
            <Link
              to={`tags/${kebabCase(tag)}`}
              css={css`
                align-items: center;
                display: flex;
                text-decoration: none;
              `}
            >
              <FaHashtag />
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`

export default Tags;