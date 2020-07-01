import React, { useState, useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/core';

import clearedMessageList from './clearedMessageList';
import muscleList from './muscleList';
import Input from './Input';

const choose_at_random = arrayData => {
  const arrayIndex = Math.floor(Math.random() * arrayData.length);
  return arrayData[arrayIndex];
};

const TypingGame = ({ isOpen, ...props }) => {
  const [message, setMessage] = useState('');
  const [muscle, setMuscle] = useState(choose_at_random(muscleList));
  const inputRef = useRef(null);

  const setAllCorrectedMessage = () => {
    setMessage(`${choose_at_random(clearedMessageList)}(^∀^)ᕗ`);
    setTimeout(() => setMessage(''), 700);
  };

  const shuffleMuscle = () => {
    setMuscle(choose_at_random(muscleList));
  };

  useEffect(() => {
    const node = inputRef.current;
    if (node) {
      node.focus();
    }
  }, [isOpen]);

  return (
    <Box d={isOpen ? 'block' : 'none'} {...props}>
      {message === '' ? (
        <>
          <Box fontSize='2xl' textAlign='center'>
            {muscle.name}
          </Box>
          <Input
            inputRef={inputRef}
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
