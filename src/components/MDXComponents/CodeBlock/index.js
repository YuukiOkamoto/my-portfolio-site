import React, { useState } from 'react';
import { mdx } from '@mdx-js/react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import * as Chakra from '@chakra-ui/core';
import theme from 'prism-react-renderer/themes/vsDark';

import * as widgetComponents from '../../widgetComponents';

import EditableHighlight from './EditableHighlight';
import Highlight from './Highlight';

const { Box } = Chakra;

const LiveCodeError = props => (
  <Box
    as={LiveError}
    fontFamily='Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace'
    overFlowX='auto'
    color='white'
    bg='red.500'
    {...props}
  />
);

const LiveCodePreview = props => (
  <Box
    as={LivePreview}
    fontFamily='body'
    mt='5'
    p='3'
    border='1px'
    borderColor='inherit'
    rounded='md'
    {...props}
  />
);

const LiveCodeProvider = ({ language, code, isManual, ...props }) => (
  <LiveProvider
    theme={theme}
    language={language}
    code={code}
    transformCode={code => `/** @jsx mdx */ ${code}`}
    scope={{
      ...Chakra,
      ...widgetComponents,
      mdx,
    }}
    noInline={isManual}
    {...props}
  />
);

const CodeBlock = ({
  className,
  live,
  isManual,
  demo,
  title,
  line,
  children,
  ...props
}) => {
  const [code, setCode] = useState(children.trim());

  const language = className && className.replace('language-', '');

  if (language === 'jsx' && live) {
    return (
      <LiveCodeProvider
        language={language}
        code={code}
        isManual={isManual}
        {...props}
      >
        <LiveCodePreview />
        <EditableHighlight code={code} setCode={setCode} title={title} />
        <LiveCodeError />
      </LiveCodeProvider>
    );
  }

  if (demo) {
    return (
      <LiveCodeProvider
        language={language}
        code={code}
        isManual={isManual}
        {...props}
      >
        <LiveCodePreview />
        <Highlight title={title} code={code} language={language} line={line} />
      </LiveCodeProvider>
    );
  }

  return (
    <Highlight title={title} code={code} language={language} line={line} />
  );
};

export default CodeBlock;
