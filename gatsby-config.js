const emoji = require(`remark-emoji`);

module.exports = {
  siteMetadata: {
    title: `筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
    author: {
      name: `岡本 侑貴@筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
      summary: `筋肉バカ。筋トレしてコード書いて、毎日幸せに生きてる。ボディビルのおかげでメンヘラ完治。2021年東京オープンボディビル選手権で最高の身体に仕上げてつよつよエンジニアになる！！`,
    },
    description: `筋肉はちょっとできる、ボディービルダーなエンジニアブログ`,
    siteUrl: `https://kinniku.engineer/`,
    image: `static/default-ogp.jpeg`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-pinterest`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, '600', `700`],
          },
          {
            family: `Noto+Sans+JP`,
            variants: [`400`, '600', `700`],
          },
        ],
      },
    },
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
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
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
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
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
        icon: `content/assets/bodybuilding.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
