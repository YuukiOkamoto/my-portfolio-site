import { graphql } from 'gatsby';

export const postFields = graphql`
  fragment postFields on Mdx {
    excerpt(pruneLength: 500)
    fields {
      slug
      readingTime {
        text
      }
    }
    frontmatter {
      date(formatString: "YYYY年MM月DD日")
      title
      description
      tags
    }
  }
`;
