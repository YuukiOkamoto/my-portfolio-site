import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/core';

import clearedMessageList from './clearedMessageList';
import muscleList from './muscleList';
import Input from './Input';

const choose_at_random = arrayData => {
  const arrayIndex = Math.floor(Math.random() * arrayData.length);
  return arrayData[arrayIndex];
};

const TypingGame = props => {
  const [message, setMessage] = useState('');
  const [muscle, setMuscle] = useState(choose_at_random(muscleList));

  const setAllCorrectedMessage = () => {
    setMessage(`${choose_at_random(clearedMessageList)}(^∀^)ᕗ`);
    setTimeout(() => setMessage(''), 700);
  };

  const shuffleMuscle = () => {
    setMuscle(choose_at_random(muscleList));
  };

  return (
    <Box {...props}>
      {message === '' ? (
        <>
          <Box fontSize='2xl' textAlign='center'>
            {muscle.name}
          </Box>
          <Input
            muscle={muscle}
            setAllCorrectedMessage={setAllCorrectedMessage}
            shuffleMuscle={shuffleMuscle}
          />
        </>
      ) : (
        <Text textAlign='center' fontSize='lg'>
          {message}
        </Text>
      )}
    </Box>
  );
};

export default TypingGame;
