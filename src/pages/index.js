import React from 'react';
import { Text } from '@chakra-ui/core';

import Ability from '../components/Ability';
import Container from '../components/Container';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const SectionTitle = ({ children, ...props }) => (
  <Text as='h2' fontSize='4xl' textAlign='center' my='8' {...props}>
    {children}
  </Text>
);

const Top = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Container>
        <section id='my-data'>
          <SectionTitle>わたしのデータ</SectionTitle>
          <Ability />
        </section>
        <section id='careers'>
          <SectionTitle>職務経歴</SectionTitle>
        </section>
        <section id='developments'>
          <SectionTitle>開発実績</SectionTitle>
        </section>
      </Container>
    </Layout>
  );
};

export default Top;
