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
        }
      }
    }
  `);

  return result.site.siteMetadata;
}

export default useSiteMetadata;