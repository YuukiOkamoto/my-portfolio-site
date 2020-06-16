import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SlideIn,
} from '@chakra-ui/core';

import MDXComponents from './MDXComponents'

const StoryModal = ({ isOpen, onClose, story, ...props }) => (
  <SlideIn in={isOpen} {...props}>
    {styles => (
      <Modal onClose={onClose} isOpen={true} scrollBehavior='inside'>
        <ModalOverlay opacity={styles.opacity} />
        <ModalContent pb={5} {...styles}>
          <ModalHeader>Story</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MDXProvider components={MDXComponents}>
              <MDXRenderer>{story.body}</MDXRenderer>
            </MDXProvider>
          </ModalBody>
        </ModalContent>
        <ModalFooter>
          <Button>Close</Button>
        </ModalFooter>
      </Modal>
    )}
  </SlideIn>
);

export default StoryModal;
