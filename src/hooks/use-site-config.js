import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteCover
          author {
            name
            summary
          }
          snsAccounts {
            github
            twitter
            note
          }
        }
      }
    }
  `);

  return result.site.siteMetadata;
}

export default useSiteMetadata;