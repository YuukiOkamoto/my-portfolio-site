import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Box,Flex, Text } from '@chakra-ui/core';
import Img from 'gatsby-image';

import Tags from '../Tags';

const PostLink = ({ to, ...props }) => {
  const result = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              cover {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              tags
              description
              date(formatString: "YYYY年MM月DD日")
            }
            excerpt(pruneLength: 100)
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const mdx = result.allMdx.edges.find(edge => edge.node.fields.slug === to)
    .node;

  console.log(mdx);
  if (!mdx) return null;

  return (
    <Flex justify='center'>
      <Link to={mdx.fields.slug}>

    <Box
      maxW='sm'
      p='2'
      borderWidth='1px'
      rounded='lg'
      overflow='hidden'
      {...props}
    >
        <Img
          fluid={mdx.frontmatter.cover.childImageSharp.fluid}
          alt='post cover'
        />
        <Tags post={mdx} fontSize='xs' />
        <Text textAlign='right'>{mdx.frontmatter.date}</Text>
        <Box p='4'>{mdx.frontmatter.description || mdx.excerpt}</Box>
    </Box>
      </Link>
    </Flex>
  );
};

export default PostLink;
