import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  useColorMode,
  useTheme,
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Text,
} from '@chakra-ui/core';

import { FiStar, FiChevronsRight } from 'react-icons/fi';

const GridBackground = ({ children, ...props }) => {
  const { colors } = useTheme();
  const bg = `linear-gradient(${colors.gray[500]}, ${colors.gray[800]})`;
  const bgBorder = `linear-gradient(0deg, transparent 24%, ${colors.whiteAlpha[200]} 25%, ${colors.whiteAlpha[200]} 26%, transparent 27%, transparent 74%, ${colors.whiteAlpha[200]} 75%, ${colors.whiteAlpha[200]} 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, ${colors.whiteAlpha[200]} 25%, ${colors.whiteAlpha[200]} 26%, transparent 27%, transparent 74%, ${colors.whiteAlpha[200]} 75%, ${colors.whiteAlpha[200]} 76%, transparent 77%, transparent)`;
  return (
    <Box
      backGroundColor='gray.800'
      backgroundImage={bg}
      height='100%'
      width='100%'
      {...props}
    >
      <Box
        backgroundColor='transparent'
        backgroundImage={bgBorder}
        height='100%'
        width='100%'
        backgroundSize='30px 30px'
      >
        {children}
      </Box>
    </Box>
  );
};

const Hero = ({ post }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.800', dark: 'gray.800' };
  return (
    <Box position='relative'>
      <Link
        as={GatsbyLink}
        to={post.fields.slug}
        _hover={{
          '.read-more': {
            color: 'orange.300',
          },
          '.icon': {
            transform: 'translate(6px)',
          },
        }}
      >
        <GridBackground position='absolute' zIndex='hide' />
        <Flex
          minHeight={['lg', null, 'xl']}
          maxW='containers.xl'
          align='center'
          py='10'
          px='6'
          mx='auto'
          color='white'
          position='relative'
        >
          <Grid
            templateAreas={[
              `'subheader' 'title' 'date' 'preview' 'cta'`,
              `'subheader' 'title' 'date' 'preview' 'cta'`,
              `'subheader .' 'title preview' 'date cta'`,
            ]}
            columnGap='10'
            templateRows={['auto', 'auto', 'auto minmax(170px, 1fr)']}
            templateColumns={['1fr', '1fr', '4fr 5fr']}
          >
            <Heading
              gridArea='title'
              size={post.frontmatter.title.length > 30 ? 'xl' : '2xl'}
              mb={[0, 0, 4]}
            >
              {post.frontmatter.title}
            </Heading>
            <Text
              gridArea='subheader'
              d='flex'
              alignItems='center'
              fontFamily='heading'
              fontWeight='600'
              fontSize='sm'
              color='gray.400'
              lineHeight='1'
              mb='2'
            >
              <Icon as={FiStar} mr='1' color='yellow.300' opacity='.6' />
              Featured Post
            </Text>
            <Box gridArea='date' my={[4, 4, 0]}>
              <Box
                d={['none', 'none', 'block']}
                height='1px'
                bg='white'
                width='32'
                mb='4'
              />
              <Text fontWeight='600' fontFamily='heading'>
                {post.frontmatter.date}
              </Text>
            </Box>
            <Box
              gridArea='preview'
              maxHeight='32'
              overflow='hidden'
              css={{
                maskImage:
                  'linear-gradient(to bottom, black 30%, transparent 100%)',
              }}
            >
              <Text>{post.excerpt}</Text>
            </Box>
            <Box
              gridArea='cta'
              borderTop='1px'
              borderColor='white'
              pt='4'
              mt={[5, 5, 0]}
            >
              <Box
                as='span'
                fontFamily='heading'
                fontWeight='600'
                position='relative'
                className='read-more'
              >
                Read more
                <Icon
                  transition='transform .2s'
                  className='icon'
                  as={FiChevronsRight}
                />
              </Box>
            </Box>
          </Grid>
        </Flex>
      </Link>
    </Box>
  );
};

export default Hero;
