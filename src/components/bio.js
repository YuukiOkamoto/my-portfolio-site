/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import { FaTwitter, FaGithub } from 'react-icons/fa';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          snsAccounts {
            twitter
            github
          }
        }
      }
    }
  `);

  const { author, snsAccounts } = data.site.siteMetadata;
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          css={css`
            margin-bottom: 0;
            min-height: 80px;
            min-width: 80px;
            border-radius: 100%;
          `}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <div
        css={css`
          flex: 1;
          margin-left: 1rem;
        `}
      >
        <div
          css={css`
            font-weight: bold;
          `}
        >
          {author.name}
        </div>
        <div>{author.summary}</div>
        <SnsAccountList snsAccounts={snsAccounts} />
      </div>
    </div>
  );
};

const SnsAccountList = snsAccounts => {
  const icon = css`
    margin-right: 10px;
    &:hover {
      color: hsl(0, 0%, 50%);
    }
  `;

  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
      `}
    >
      <li>
        <a
          css={icon}
          href={`https://twitter.com/${snsAccounts.twitter}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          css={icon}
          href={`https://github.com/${snsAccounts.github}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};

export default Bio;
