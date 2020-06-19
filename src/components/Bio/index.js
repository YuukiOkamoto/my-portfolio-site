import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/core';

import SnsAccountList from './SnsAccountList'

const Bio = props => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          snsAccounts {
            twitter
            github
            note
          }
        }
      }
    }
  `);

  const { author, snsAccounts } = data.site.siteMetadata;
  return (
    <Flex wrap='wrap' {...props}>
      <Flex align='center' justify='center' w={['100%', 'auto']} mb={[4, 0]}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </Flex>
      <Box flex='1' ml='4'>
        <Text fontSize='lg' fontWeight='bold' textAlign={['center', 'left']}>
          {author.name}
        </Text>
        <Text
          fontSize='sm'
          opacity='.8'
        >
          {author.summary}
        </Text>
        <SnsAccountList snsAccounts={snsAccounts} justifyContent={['center', 'left']} />
      </Box>
    </Flex>
  );
};

export default Bio;
