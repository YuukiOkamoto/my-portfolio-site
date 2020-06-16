import React from 'react';
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

const StoryModal = ({ isOpen, onClose, story, ...props }) => (
  <SlideIn in={isOpen} {...props}>
    {styles => (
      <Modal onClose={onClose} isOpen={true} scrollBehavior='inside'>
        <ModalOverlay opacity={styles.opacity} />
        <ModalContent pb={5} {...styles}>
          <ModalHeader>Story</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MDXRenderer>{story.body}</MDXRenderer>
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
