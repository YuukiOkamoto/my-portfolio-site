import React from 'react';
import { useTheme, Box, Flex } from '@chakra-ui/core';
import { css } from '@emotion/core';

const typeColors = {
  good: 'cyan',
  bad: 'red',
  normal: 'green',
  special: 'yellow',
};

const Skill = ({
  mainType,
  subType,
  h = '45px',
  border = '1px',
  borderRadius = '8px',
  children,
  ...props
}) => {
  const { colors } = useTheme();
  const mainColor = typeColors[mainType];
  const subColor = typeColors[subType];

  const generateBgColor = color =>
    `
      linear-gradient(to bottom,
        ${colors[color][100]} 0%,
        ${colors[color][100]} 50%,
        ${colors[color][200]} 50%,
        ${colors[color][200]} 100%)
    `;

  const subSkillStyle =
    subType &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: ${h};
        right: -${border};
        border: ${border} solid ${colors[subColor][400]};
        border-left: none;
        background: ${generateBgColor(subColor)};
        z-index: 1;
        border-radius: 0 ${borderRadius} ${borderRadius} 0;
      }
    `;

  const Letter = props => (
    <Box
      as='span'
      zIndex='2'
      color={colors[mainColor][700]}
      textShadow={`0px 1px 1px ${colors[mainColor][700]}`}
      fontSize='lg'
      {...props}
    />
  );

  return (
    <Flex
      d='inline-flex'
      align='center'
      justify='space-evenly'
      position='relative'
      background={generateBgColor(mainColor)}
      borderRadius={borderRadius}
      h={h}
      shadow='sm'
      border={border}
      borderColor={colors[mainColor][400]}
      css={subSkillStyle}
      {...props}
    >
      {[...children].map((s, i) => (
        <Letter key={i}>{s}</Letter>
      ))}
    </Flex>
  );
};

export default Skill;
