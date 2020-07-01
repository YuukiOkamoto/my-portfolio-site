import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import TypingGame from '../components/TypingGame';

const NotFoundPage = ({ location }) => {

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
        <TypingGame mt='16' />
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
