import React, { useState } from 'react';
import { mdx } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import * as Chakra from '@chakra-ui/core';
import theme from 'prism-react-renderer/themes/vsDark';
import { RiFileCopyLine } from 'react-icons/ri';

import * as widgetComponents from '../widgetComponents';

const { useClipboard, Box, Button, Icon } = Chakra;

const liveEditorStyle = {
  fontSize: 14,
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  overflow: 'auto',
  backgroundColor: '#2D2D2D',
  whiteSpace: 'nowrap',
};

const liveErrorStyle = {
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
};

const highlightStyle = {
  padding: 20,
  fontSize: 14,
  overflow: 'auto',
  lineHeight: '1.5',
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  backgroundColor: '#2D2D2D',
};

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

const CopyButton = props => (
  <Button
    size='sm'
    position='absolute'
    textTransform='uppercase'
    variantColor='teal'
    fontSize='xs'
    height='4'
    top='0'
    zIndex='1'
    right='.5em'
    {...props}
  />
);

const EditableNotice = props => (
  <Box
    position='absolute'
    width='full'
    top='.25em'
    letterSpacing='wide'
    color='gray.500'
    fontSize='xs'
    fontWeight='bold'
    textAlign='center'
    textTransform='uppercase'
    {...props}
  >
    Editable Example
  </Box>
);

const EditorTitle = ({ title, ...props }) => (
  <Box
    fontFamily='Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace'
    fontSize='sm'
    py='1'
    px='4'
    color='white'
    bg='#444444'
    {...props}
  >
    {title}
  </Box>
);

const CodeBlock = ({
  className,
  live,
  isManual,
  render,
  title,
  children,
  ...props
}) => {
  const [code, setCode] = useState(children.trim());

  const { onCopy, hasCopied } = useClipboard(code);

  const language = className && className.replace('language-', '');

  const liveProviderProps = {
    theme,
    language,
    code,
    transformCode: code => `/** @jsx mdx */ ${code}`,
    scope: {
      ...Chakra,
      ...widgetComponents,
      mdx,
    },
    noInline: isManual,
    ...props,
  };

  const handleCodeChange = newCode => setCode(newCode.trim());

  if (language === 'jsx' && live) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview />
        <Box my='8' rounded='md'>
          {title && <EditorTitle title={title} />}
          <Box position='relative'>
            <LiveEditor
              onChange={handleCodeChange}
              padding={20}
              style={liveEditorStyle}
            />
            <CopyButton onClick={onCopy}>
              {hasCopied ? 'copied(^∀^)ᕗ' : <Icon as={RiFileCopyLine} />}
            </CopyButton>
            <EditableNotice />
          </Box>
        </Box>
        <LiveError style={liveErrorStyle} />
      </LiveProvider>
    );
  }

  return (
    <LiveProvider {...liveProviderProps}>
      {render && <LiveCodePreview />}
      <Box my='8' rounded='md'>
        {title && <EditorTitle title={title} />}
        <Box position='relative'>
          <Highlight
            {...defaultProps}
            theme={theme}
            code={children.trim()}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{ ...style, ...highlightStyle }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
          <CopyButton onClick={onCopy}>
            {hasCopied ? 'copied(^∀^)ᕗ' : <Icon as={RiFileCopyLine} />}
          </CopyButton>
        </Box>
      </Box>
      {render && <LiveError style={liveErrorStyle} />}
    </LiveProvider>
  );
};

export default CodeBlock;
