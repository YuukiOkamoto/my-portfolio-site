import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author {
            name
            summary
          }
          snsAccounts {
            github
            twitter
          }
        }
      }
    }
  `);

  return result.site.siteMetadata;
}

export default useSiteMetadata;