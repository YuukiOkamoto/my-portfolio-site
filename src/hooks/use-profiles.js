import { useStaticQuery, graphql } from 'gatsby';

const useProfiles = () =>
  useStaticQuery(graphql`
    {
      engineerStory: mdx(
        fileAbsolutePath: { regex: "/content/profiles/stories/engineer/" }
      ) {
        body
      }
      muscleStory: mdx(
        fileAbsolutePath: { regex: "/content/profiles/stories/muscle/" }
      ) {
        body
      }
    }
  `);

export default useProfiles;
