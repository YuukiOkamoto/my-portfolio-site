import React, { useEffect, useRef } from 'react';
import { useDisclosure, Box, Button, Heading, Text } from '@chakra-ui/core';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import TypingGame from '../components/TypingGame';

const NotFoundPage = ({ location }) => {
  const { isOpen, onOpen } = useDisclosure();
  const btnRef = useRef(null);

  useEffect(() => {
    const node = btnRef.current;
    if (node) {
      node.focus();
    }
  }, []);

  return (
    <Layout location={location}>
      <SEO title='404: Not Found' />
      <Container>
        <Heading as='h1' my='10'>
          お探しのページはありません
        </Heading>
        <Text my='6' fontSize='xl' lineHeight='2'>
          一時的にアクセスできない状態か、移動もしくは削除された可能性があります。
          <br />
          このページに訪れるほど勉強熱心なあなたのために
          <br />
          タイピングの練習と筋肉のお勉強ができるゲームをご用意しました！
          <br />
          ご堪能ください(^∀^)ᕗ
        </Text>
        <Box textAlign='center'>
          <Button
            ref={btnRef}
            d={isOpen && 'none'}
            variantColor='orange'
            variant='outline'
            onClick={onOpen}
          >
            スタート(^∀^)ᕗ
          </Button>
        </Box>
        <TypingGame mt='16' isOpen={isOpen} />
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
