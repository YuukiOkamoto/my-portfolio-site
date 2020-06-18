import React from 'react';
import { useTheme, Box, Flex } from '@chakra-ui/core';
import { css } from '@emotion/core';

const typeColors = {
  good: 'cyan',
  bad: 'red',
  normal: 'green',
  special: 'yellow',
};

const Skill = ({ mainType, subType, children, ...props }) => {
  const { colors } = useTheme();
  const mainColor = typeColors[mainType];
  const subColor = typeColors[subType];

  return (
    <Flex
      d='inline-flex'
      align='center'
      justify='space-evenly'
      position='relative'
      background={`linear-gradient(to bottom,
                  ${colors[mainColor][100]} 0%,
                  ${colors[mainColor][100]} 50%,
                  ${colors[mainColor][200]} 50%,
                  ${colors[mainColor][200]} 100%)`}
      borderRadius='7px'
      h='40px'
      shadow='sm'
      css={css`
        &::before {
          content: '';
          position: absolute;
          top: -1px;
          bottom: -1px;
          left: -1px;
          right: -1px;
          background: linear-gradient(
            to right,
            ${colors[mainColor][400]} 0%,
            ${colors[mainColor][400]} 50%,
            ${colors[subColor ? subColor : mainColor][400]} 50%,
            ${colors[subColor ? subColor : mainColor][400]} 100%
          );
          z-index: -1;
          border-radius: 8px;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          width: 50%;
          height: 40px;
          left: 50%;
          background: linear-gradient(
            to bottom,
            ${colors[subColor ? subColor : mainColor][100]} 0%,
            ${colors[subColor ? subColor : mainColor][100]} 50%,
            ${colors[subColor ? subColor : mainColor][200]} 50%,
            ${colors[subColor ? subColor : mainColor][200]} 100%
          );
          z-index: 1;
          border-radius: 0 8px 8px 0;
        }
      `}
      {...props}
    >
      {[...children].map((s, i) => (
        <Box
          key={i}
          as='span'
          zIndex='2'
          color={colors[mainColor][700]}
          textShadow={`0px 1px 1px ${colors[mainColor][700]}`}
          fontSize='lg'
        >
          {s}
        </Box>
      ))}
    </Flex>
  );
};

export default Skill;
