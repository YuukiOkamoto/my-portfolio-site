import React, { useState } from 'react';
import { mdx } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Chakra from '@chakra-ui/core';
import theme from 'prism-react-renderer/themes/vsDark';
import { RiFileCopyLine } from 'react-icons/ri';

const { useClipboard, Box, Button, Icon } = Chakra;

const liveEditorStyle = {
  fontSize: 14,
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  overflowX: 'auto',
  backgroundColor: '#2D2D2D',
};

const liveErrorStyle = {
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
};

const LiveCodePreview = props => (
  <Box
    as={LivePreview}
    fontFamily='body'
    mt='5'
    p='4'
    border='1px'
    borderColor='inherit'
    rounded='lg'
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
    height='24px'
    top='.5em'
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
    Editable JSX
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
      mdx,
    },
    noInline: isManual,
    ...props,
  };

  const handleCodeChange = newCode => setCode(newCode.trim());

  if (language === 'jsx' && live) {
    return (
      <LiveProvider {...liveProviderProps}>
        <Box my='8' rounded='md' overflow='hidden' zIndex='1'>
          {title && <EditorTitle title={title} />}
          <Box position='relative' overflow='hidden' zIndex='1'>
            <LiveEditor
              {...{ onChange: handleCodeChange }}
              padding={20}
              style={liveEditorStyle}
            />
            <CopyButton onClick={onCopy}>
              {hasCopied ? (
                'copied(^∀^)ᕗ'
              ) : (
                <Icon as={RiFileCopyLine} fontSize='lg' />
              )}
            </CopyButton>
            <EditableNotice />
          </Box>
        </Box>
        <LiveCodePreview />
        <LiveError style={liveErrorStyle} />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider {...liveProviderProps}>
          <LiveCodePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <Box my='8' rounded='md' overflow='hidden' zIndex='1'>
        {title && <EditorTitle title={title} />}
        <Box position='relative' overflow='hidden' zIndex='1'>
          <LiveEditor padding={20} style={liveEditorStyle} />
          <CopyButton onClick={onCopy}>
            {hasCopied ? (
              'copied(^∀^)ᕗ'
            ) : (
              <Icon as={RiFileCopyLine} fontSize='lg' />
            )}
          </CopyButton>
        </Box>
      </Box>
    </LiveProvider>
  );
};

export default CodeBlock;
