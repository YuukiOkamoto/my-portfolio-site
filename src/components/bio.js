import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import {
  Avatar,
  Box,
  Flex,
  Link,
  List,
  ListItem,
  PseudoBox,
  Text,
} from '@chakra-ui/core';

import { FaTwitter, FaGithub } from 'react-icons/fa';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
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
          }
        }
      }
    }
  `);

  const { author, snsAccounts } = data.site.siteMetadata;
  return (
    <Flex>
      <Flex align='center'>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          css={css`
            margin-bottom: 0;
            min-height: 80px;
            min-width: 80px;
            border-radius: 100%;
          `}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </Flex>
      <Box flex='1' ml='4'>
        <Text fontSize='lg' fontWeight='bold'>
          {author.name}
        </Text>
        <Text fontSize='sm'>{author.summary}</Text>
        <SnsAccountList snsAccounts={snsAccounts} />
      </Box>
    </Flex>
  );
};

const SnsAccountList = ({ snsAccounts }) => (
  <List display='flex' flexWrap='wrap' m='0'>
    <ListItem mr='1'>
      <Link href={`https://twitter.com/${snsAccounts.twitter}`} isExternal>
        <PseudoBox
          as={FaTwitter}
          size='4'
          color='gray.400'
          _hover={{ color: 'blue.500' }}
          _focus={{ bg: 'transparent' }}
        />
      </Link>
    </ListItem>
    <ListItem mr='1'>
      <Link href={`https://github.com/${snsAccounts.github}`} isExternal>
        <PseudoBox
          as={FaGithub}
          size='4'
          color='gray.400'
          _hover={{ color: 'gray.500' }}
          _focus={{ bg: 'transparent' }}
        />
      </Link>
    </ListItem>
  </List>
);

export default Bio;
