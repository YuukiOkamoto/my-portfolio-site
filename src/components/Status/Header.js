import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Flex, Stack } from '@chakra-ui/core';

import AuthorName from './AuthorName';
import Remarks from './Remarks';
import Timestamp from './Timestamp';
import UniformNumber from './UniformNumber';

const Header = ({ isEngineer }) => {
  const data = useStaticQuery(graphql`
    query {
      engineerProfile: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      muscleProfile: file(relativePath: { eq: "profile-muscle-pic.jpeg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;
  const { engineerProfile, muscleProfile } = data;
  const profile = isEngineer ? engineerProfile : muscleProfile;

  return (
    <Stack isInline wrap='wrap' spacing='2' my='3' p='2'>
      <Stack
        spacing='3'
        w={['100%', '100%', '240px']}
        flexDirection={['row', 'row', 'colum']}
        flexWrap='wrap'
      >
        <Stack isInline spacing='4' mx='auto'>
          <AuthorName>{author.name.split('@')[0]}</AuthorName>
          <UniformNumber number='29' />
        </Stack>
        <Timestamp isEngineer={isEngineer} />
      </Stack>
      <Flex
        flex='1'
        direction={['column', 'column', 'row']}
        align='center'
        my={[2, 2, 0]}
      >
        <Image
          fixed={profile.childImageSharp.fixed}
          alt={author.name}
        />
        <Remarks
          isEngineer={isEngineer}
          flex='1'
          mt={[2, 2, 0]}
          ml={[0, 0, 2]}
        />
      </Flex>
    </Stack>
  );
};

export default Header;
