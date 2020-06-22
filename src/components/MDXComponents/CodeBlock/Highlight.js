import React, { useState } from 'react';
import PrismHighlight, { defaultProps } from 'prism-react-renderer';
import { useTheme, Box } from '@chakra-ui/core';
import theme from 'prism-react-renderer/themes/vsDark';
import rangeParser from 'parse-numeric-range';

import { generateAlphaColors } from '../../../theme/colors-utils';

import CopyButton from './CopyButton';
import Title from './Title';

const highlightStyle = {
  backgroundColor: '#2D2D2D',
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  fontSize: [12, 14],
  overflow: 'auto',
  py: 5,
  float: 'left',
  minWidth: 'full',
};

const calculateLinesToHighlight = meta => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strLineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strLineNumbers);
    return index => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const Line = ({ shouldHighlight, ...props }) => {
  const highlightProps = shouldHighlight && {
    d: 'block',
    bg: 'gray.700',
    borderLeftWidth: '.5rem',
    borderLeftColor: 'purple.200',
    px: '3',
  };
  return <Box d='table-cell' px='5' {...props} {...highlightProps} />;
};

const Word = ({ focusedWord, setFocusedWord, content, tokenProps }) => {
  const [delayHandler, setDelayHandler] = useState(null);
  const { colors } = useTheme();

  const orangeAlpha = generateAlphaColors(colors.orange[100]);

  const handleMouseEnter = word => {
    setDelayHandler(
      setTimeout(() => {
        setFocusedWord(word);
      }, 500)
    );
  };

  const handleMouseLeave = () => {
    setFocusedWord('');
    clearTimeout(delayHandler);
  };

  const shouldHighlighted = word => focusedWord === word && word.length > 1;

  return (
    <Box
      as='span'
      bg={shouldHighlighted(content) && orangeAlpha[400]}
      onMouseEnter={() => handleMouseEnter(content)}
      onMouseLeave={handleMouseLeave}
      {...tokenProps}
    />
  );
};

const Highlight = ({ title, code, language, line }) => {
  const [focusedWord, setFocusedWord] = useState('');

  const shouldHighlightLine = calculateLinesToHighlight(line);

  return (
    <Box my='8' mx={['-24px', '-24px', '0']} rounded='md'>
      {title && <Title>{title}</Title>}
      <Box position='relative'>
        <PrismHighlight
          {...defaultProps}
          theme={theme}
          code={code}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Box overflowX='auto'>
              <Box
                as='pre'
                className={className}
                {...highlightStyle}
                style={{ ...style }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    <Line shouldHighlight={shouldHighlightLine(i)}>
                      {line.map((token, key) => (
                        <Word
                          key={key}
                          focusedWord={focusedWord}
                          setFocusedWord={setFocusedWord}
                          content={token.content.trim()}
                          tokenProps={getTokenProps({ token, key })}
                        />
                      ))}
                    </Line>
                  </div>
                ))}
              </Box>
            </Box>
          )}
        </PrismHighlight>
        <CopyButton code={code} />
      </Box>
    </Box>
  );
};

export default Highlight;
