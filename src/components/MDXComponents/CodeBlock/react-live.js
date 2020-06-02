import React, { useState } from 'react';
import { mdx } from '@mdx-js/react';
import {
  LiveProvider as ReactLiveProvider,
  LiveError as ReactLiveError,
  LivePreview as ReactLivePreview,
} from 'react-live';
import * as Chakra from '@chakra-ui/core';
import theme from 'prism-react-renderer/themes/vsDark';

import * as widgetComponents from '../../widgetComponents';

const { Box } = Chakra;

const LiveError = props => (
  <Box
    as={ReactLiveError}
    fontFamily='Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace'
    overFlowX='auto'
    color='white'
    bg='red.500'
    {...props}
  />
);

const LivePreview = props => (
  <Box
    as={ReactLivePreview}
    fontFamily='body'
    mt='5'
    p='3'
    border='1px'
    borderColor='inherit'
    rounded='md'
    {...props}
  />
);

const LiveProvider = ({ language, code, isManual, ...props }) => (
  <ReactLiveProvider
    theme={theme}
    language={language}
    code={code}
    transformCode={code => `/** @jsx mdx */ ${code}`}
    scope={{
      ...Chakra,
      ...widgetComponents,
      mdx,
      useState,
    }}
    noInline={isManual}
    {...props}
  />
);

export { LiveError, LivePreview, LiveProvider };
