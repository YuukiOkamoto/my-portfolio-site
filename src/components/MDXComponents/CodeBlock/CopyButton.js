import React from 'react';
import { useClipboard, Button as ChakraButton, Icon } from '@chakra-ui/core';
import { RiFileCopyLine } from 'react-icons/ri';

const Button = ({ hasCopied, ...props }) => (
  <ChakraButton
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
  >
    {hasCopied ? 'copied(^∀^)ᕗ' : <Icon as={RiFileCopyLine} />}
  </ChakraButton>
);

const CopyButton = ({ code, ...props }) => {
  const { onCopy, hasCopied } = useClipboard(code);
  return <Button onClick={onCopy} hasCopied={hasCopied} {...props} />;
};

export default CopyButton;
