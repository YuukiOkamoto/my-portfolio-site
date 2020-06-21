const emoji = require(`remark-emoji`);

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
    author: {
      name: `岡本 侑貴@筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
      summary: `筋肉バカ。筋トレしてコード書いて、毎日幸せに生きてる。ボディビルにドハマリ。2021年東京オープンボディビル選手権で最高の身体に仕上げてつよつよエンジニアになる！！`,
    },
    description: `筋肉はちょっとできるボディービルダーなエンジニアのサイト`,
    blogDescription: `筋肉はちょっとできるボディービルダーなエンジニアのブログ`,
    siteUrl: `https://kinniku.engineer/`,
    siteCover: `default-cover.jpeg`,
    snsAccounts: {
      twitter: `it_fitness_jp`,
      note: `it_fitness_jp`,
      github: `YuukiOkamoto`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/profiles`,
        name: `profiles`,
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: {
          type: 'service_account',
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
          client_email: process.env.CLIENT_EMAIL,
          client_id: process.env.CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [emoji],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-embedder`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-pinterest`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-166346716-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPosts } }) => {
              return allPosts.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allPosts: allMdx(
                  sort: { fields: frontmatter___date, order: DESC }
                  filter: { fileAbsolutePath: { regex: "/content/blog/" } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "筋肉ﾁｮｯﾄﾃﾞｷﾙ's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
        short_name: `筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
