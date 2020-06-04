import React from 'react';
import { LiveEditor } from 'react-live';
import { Box } from '@chakra-ui/core';

import CopyButton from './CopyButton';
import Title from './Title';

const liveEditorStyle = {
  fontSize: 14,
  fontFamily: 'Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace',
  overflow: 'auto',
  backgroundColor: '#2D2D2D',
  whiteSpace: 'nowrap',
};

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

const EditableHighlight = ({ code, setCode, title }) => {
  const handleCodeChange = newCode => setCode(newCode.trim());

  return (
    <Box my='8' mx={['-24px', '-24px', '0']} rounded='md'>
      {title && <Title>{title}</Title>}
      <Box position='relative'>
        <LiveEditor
          onChange={handleCodeChange}
          padding={20}
          style={liveEditorStyle}
        />
        <CopyButton code={code} />
        <EditableNotice />
      </Box>
    </Box>
  );
};

export default EditableHighlight;
