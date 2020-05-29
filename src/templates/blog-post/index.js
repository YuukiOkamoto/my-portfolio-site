import React from 'react';
import { graphql } from 'gatsby';
import {
  useDisclosure,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Grid,
  Heading,
  Icon,
  List,
  ListItem,
  Link,
} from '@chakra-ui/core';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';
import ContentArticle from '../../components/ContentArticle';
import PrevNextArticles from '../../components/PrevNextArticles';
import SnsShare from '../../components/SnsShare';

const TOCList = ({ headings, itemMy = '4', ...props }) => (
  <List mt='3' fontSize='sm' {...props}>
    {headings.map(heading => (
      <React.Fragment key={heading.title}>
        <ListItem my={itemMy}>
          <Link href={heading.url}>{heading.title}</Link>
        </ListItem>
        {heading.items && (
          <TOCList
            headings={heading.items}
            itemMy='2'
            ml='3'
            mt='0'
            fontSize='xs'
          />
        )}
      </React.Fragment>
    ))}
  </List>
);

const TOC = ({ data, ...props }) => (
  <Box
    p='3'
    boxShadow='0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
    borderRadius='lg'
    {...props}
  >
    <Heading as='h3' size='md' mt='4'>
      目次
    </Heading>
    <Box overflowY='auto' maxH='70vh'>
      <TOCList headings={data.mdx.tableOfContents.items} />
    </Box>
  </Box>
);

const TOCDrawer = ({ headings, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const chevronTranslate = isOpen ? 15 : 4;
  const iconStyles = {
    size: '6',
    transition: '0.2s ease 0s, transform 0.2s ease 0s',
  };
  return (
    <>
      <Box
        ref={btnRef}
        d={['inline-block', 'inline-block', 'none', 'none']}
        position='fixed'
        bottom='12'
        right='5'
        color='blue.300'
        bg='gray.800'
        borderRadius='50%'
        shadow='0 0 20px rgba(0, 0, 0, 0.3)'
        zIndex='1401'
        onClick={isOpen ? onClose : onOpen}
      >
        <Flex align='flex-start' overflow='hidden' h='64px'>
          <Flex direction='column' alignSelf='center' px='5'>
            <Icon
              as={FiChevronUp}
              transform={`translateY(${isOpen ? 15 : 4}px)`}
              {...iconStyles}
            />
            <Icon
              as={FiChevronDown}
              transform={`translateY(-${isOpen ? 15 : 4}px)`}
              {...iconStyles}
            />
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size='md'
        onClose={onClose}
        finalFocusRef={btnRef}
        {...props}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>目次</DrawerHeader>
          <DrawerBody pb='24' overflowY='auto'>
            <TOCList headings={headings} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { previous: prev, next } = pageContext;
  const mdx = data.mdx;
  const url = `${data.site.siteMetadata.siteUrl}${mdx.fields.slug}`;
  const title = mdx.frontmatter.title;

  return (
    <Layout location={location} position='relative'>
      <SEO
        title={title}
        description={mdx.frontmatter.description || mdx.excerpt}
        cover={mdx.frontmatter.cover?.publicURL}
        isArticle
      />
      <Grid
        mx='auto'
        px='6'
        py='16'
        maxW='containers.xl'
        gap='5'
        gridTemplateColumns={[
          '100%',
          '100%',
          'calc(100% - 200px) 200px',
          'calc(100% - 300px) 300px',
        ]}
        templateAreas={[
          '"article"',
          '"article"',
          '"article aside"',
          '"article aside"',
        ]}
      >
        <Box as='article' gridArea='article'>
          <ContentArticle post={mdx} />
          <SnsShare url={url} title={title} mt='4' />
          <Divider mt='2' />
          <Bio mt='6' />
          <PrevNextArticles prev={prev} next={next} mt='10' />
        </Box>
        <Box as='aside' gridArea='aside' position='relative'>
          <TOC
            data={data}
            position='sticky'
            top='0'
            d={['none', 'none', 'block', 'block']}
          />
        </Box>
      </Grid>
      <TOCDrawer headings={data.mdx.tableOfContents.items} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY年MM月DD日")
        description
        tags
        cover {
          publicURL
        }
      }
      tableOfContents
    }
  }
`;
