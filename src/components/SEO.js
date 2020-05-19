/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';

import useSiteMetadata from '../hooks/use-site-config';

const SEO = ({ title, description, cover, isArticle, lang, meta }) => {
  const { pathname } = useLocation();

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    siteCover,
    snsAccounts,
  } = useSiteMetadata();

  const formatedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.slice(0, -1)
    : siteUrl;

  const seo = {
    title: title || defaultTitle,
    titleTemplate: defaultTitle,
    description: description || defaultDescription,
    image: `${formatedSiteUrl}${cover || withPrefix(siteCover)}`,
    url: `${formatedSiteUrl}${pathname}`,
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
          name: `og:image`,
          content: seo.image,
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
        {
          name: `twitter:image`,
          content: seo.image,
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
