import React, { useState, useRef, useEffect } from 'react';
import { Box, Heading, Input, Stack, Text } from '@chakra-ui/core';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Container from '../components/Container';

const choose_at_random = arrayData => {
  const arrayIndex = Math.floor(Math.random() * arrayData.length);
  return arrayData[arrayIndex];
}

const targetList = [
  {
    name: '大腿四頭筋',
    alphabet: [...'daitaisitoukin'],
  },
  {
    name: '大腿直筋',
    alphabet: [...'daitaityokkinn'],
  },
  {
    name: '内側広筋',
    alphabet: [...'naisokukoukinn'],
  },
  {
    name: '外側広筋',
    alphabet: [...'gaisokukoukinn'],
  },
  {
    name: '内転筋',
    alphabet: [...'naitennkinn'],
  },
  {
    name: 'ハムストリングス',
    alphabet: [...'hamusutorinngusu'],
  },
  {
    name: '半腱様筋',
    alphabet: [...'hannkennyoukinn'],
  },
  {
    name: '半膜様筋',
    alphabet: [...'hannmakuyoukinn'],
  },
  {
    name: 'ヒラメ筋',
    alphabet: [...'hiramekinn'],
  },
  {
    name: '腓腹筋',
    alphabet: [...'hihukukinn'],
  },
  {
    name: '大臀筋',
    alphabet: [...'daidennkinn'],
  },
  {
    name: '小臀筋',
    alphabet: [...'shoudennkinn'],
  },
  {
    name: '大胸筋',
    alphabet: [...'daikyoukin'],
  },
  {
    name: '小胸筋',
    alphabet: [...'shoukyoukin'],
  },
  {
    name: '三角筋',
    alphabet: [...'sannkakukinn'],
  },
  {
    name: '棘上筋',
    alphabet: [...'kyokujoukinn'],
  },
  {
    name: '棘下筋',
    alphabet: [...'kyokukakinn'],
  },
  {
    name: '肩甲下筋',
    alphabet: [...'kennkoukakinn'],
  },
  {
    name: '小円筋',
    alphabet: [...'shouennkinn'],
  },
  {
    name: '広背筋',
    alphabet: [...'kouhaikinn'],
  },
  {
    name: '大円筋',
    alphabet: [...'daiennkinn'],
  },
  {
    name: '脊柱起立筋',
    alphabet: [...'sekityuukiritukinn'],
  },
  {
    name: '上腕二頭筋',
    alphabet: [...'jouwannnitoukinn'],
  },
  {
    name: '上腕三頭筋',
    alphabet: [...'jouwannsanntoukinn'],
  },
  {
    name: '腹直筋',
    alphabet: [...'hukutyokukinn'],
  },
  {
    name: '腓腹筋',
    alphabet: [...'hihukukinn'],
  },
];

const clearedMessageList = [
  'デカいよ',
  'キレてる',
  '冷蔵庫',
  'ナイスバルク',
  '仕上がってるよ',
  '土台が違うよ、土台が',
  'デカいよ！他が見えない',
  'そこまで絞るには眠れない夜もあったろう',
];

const TypingGame = ({ target, onTargetChange, setTargetCleared }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [answerCharCount, setAnswerCharCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const node = inputRef.current;
    if (node) {
      node.focus();
    }
  }, []);

  const handleChange = event => {
    const answerChar = event.target.value;
    const targetChar = target.alphabet[answerCharCount];
    const isCorrect = answerChar === targetChar;
    if (isCorrect) {
      const isTargetCleared =
        target.alphabet[answerCharCount + 1] === undefined;
      if (isTargetCleared) {
        setTargetCleared();
        setAnswerCharCount(0);
        onTargetChange(choose_at_random(targetList));
      } else setAnswerCharCount(answerCharCount + 1);
    }
    setIsInvalid(!isCorrect);
    event.target.value = '';
  };

  return (
    <>
      <Box fontSize='2xl' textAlign='center'>
        {target.name}
      </Box>
      <Box position='relative'>
        <Stack isInline spacing='3' justify='center'>
          {target.alphabet.map((letter, i) => (
            <Box
              key={i}
              as='span'
              color={i < answerCharCount ? 'gray.300' : 'black'}
            >
              {letter}
            </Box>
          ))}
        </Stack>
        <Input
          ref={inputRef}
          position='absolute'
          top='0'
          variant='flushed'
          size='sm'
          isInvalid={isInvalid}
          css={{
            caretColor: 'transparent',
          }}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

const NotFoundPage = ({ location }) => {
  const [target, setTarget] = useState(choose_at_random(targetList));
  const [message, setMessage] = useState('');

  const setTargetCleared = () => {
    setMessage(`${choose_at_random(clearedMessageList)}(^∀^)ᕗ`);
    setTimeout(() => setMessage(''), 700);
  };

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
        <Box mt='16'>
          {message === '' ? (
            <TypingGame
              target={target}
              onTargetChange={setTarget}
              setTargetCleared={setTargetCleared}
            />
          ) : (
            <Text textAlign='center' fontSize='lg'>
              {message}
            </Text>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
