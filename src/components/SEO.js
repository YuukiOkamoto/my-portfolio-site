/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const SEO = ({ title, description, image, isArticle, lang, meta }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    snsAccounts,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    titleTemplate: defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={title ? `%s | ${seo.titleTemplate}` : null}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `image`,
          content: seo.image,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: isArticle ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: snsAccounts.twitter,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  isArticle: false,
  lang: `ja`,
  meta: [],
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isArticle: PropTypes.bool,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
        snsAccounts {
          twitter
        }
      }
    }
  }
`;
