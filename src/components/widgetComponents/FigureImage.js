import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/core'

const FigureImage = ({ src, alt, caption, ...props }) => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            name
            absolutePath
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = allFile.edges.find(edge => edge.node.relativePath === src);

  return (
    <Box as='figure' w={['full', '70%']} mx='auto' my='4' {...props}>
      <Img fluid={image.node.childImageSharp.fluid} alt={alt} />
      <Box as='figcaption' textAlign='center' color='gray.700' mt='2'>{caption}</Box>
    </Box>
  );
};

export default FigureImage;
