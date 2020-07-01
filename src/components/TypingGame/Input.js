import React, { useState, useRef, useEffect } from 'react';
import { Box, Stack, Input as ChakraInput } from '@chakra-ui/core';

const Input = ({ muscle, setAllCorrectedMessage, shuffleMuscle }) => {
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
    const muscleChar = muscle.alphabet[answerCharCount];
    const isCorrect = answerChar === muscleChar;
    if (isCorrect) {
      const isAllCorrect = muscle.alphabet[answerCharCount + 1] === undefined;
      if (isAllCorrect) {
        setAllCorrectedMessage();
        setAnswerCharCount(0);
        shuffleMuscle();
      } else setAnswerCharCount(answerCharCount + 1);
    }
    setIsInvalid(!isCorrect);
    event.target.value = '';
  };

  return (
    <Box position='relative'>
      <Stack isInline spacing='3' justify='center'>
        {muscle.alphabet.map((letter, i) => (
          <Box
            key={i}
            as='span'
            color={i < answerCharCount ? 'gray.300' : 'black'}
          >
            {letter}
          </Box>
        ))}
      </Stack>
      <ChakraInput
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
  );
};

export default Input;
