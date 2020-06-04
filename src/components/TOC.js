import React from 'react';
import {
  useDisclosure,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/core';
import { Link } from 'react-scroll';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { css } from '@emotion/core';

const TOCList = ({ headings, itemMy = '4', onDrawerClose, ...props }) => (
  <List mt='3' fontSize='sm' {...props}>
    {headings.map(heading => (
      <React.Fragment key={heading.title}>
        <ListItem my={itemMy}>
          <Link
            to={heading.url.replace('#', '')}
            smooth={true}
            offset={-10}
            duration={800}
            onClick={onDrawerClose && onDrawerClose}
            css={css`
              cursor: pointer;
              &:hover,
              &.active {
                text-decoration: underline;
                opacity: 0.7;
              }
            `}
          >
            {heading.title}
          </Link>
        </ListItem>
        {heading.items && (
          <TOCList
            headings={heading.items}
            itemMy='2'
            onDrawerClose={onDrawerClose}
            ml='3'
            mt='0'
            fontSize='xs'
          />
        )}
      </React.Fragment>
    ))}
  </List>
);

const TOC = ({ data, ...props }) => (
  <Box
    p='3'
    boxShadow='0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
    borderRadius='lg'
    {...props}
  >
    <Heading as='h3' size='md' mt='4'>
      目次
    </Heading>
    <Box overflowY='auto' maxH='70vh'>
      <TOCList headings={data.mdx.tableOfContents.items} />
    </Box>
  </Box>
);

const TOCDrawer = ({ headings, ...props }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  const iconStyles = {
    size: '6',
    transition: '0.2s ease 0s, transform 0.2s ease 0s',
  };
  return (
    <>
      <Box
        ref={btnRef}
        d={['inline-block', 'inline-block', 'none', 'none']}
        position='fixed'
        bottom='12'
        right='5'
        color='blue.300'
        bg='gray.800'
        borderRadius='50%'
        shadow='0 0 20px rgba(0, 0, 0, 0.3)'
        zIndex='1401'
        onClick={onToggle}
      >
        <Flex align='flex-start' overflow='hidden' h='64px'>
          <Flex direction='column' alignSelf='center' px='5'>
            <Icon
              as={FiChevronUp}
              transform={`translateY(${isOpen ? 15 : 4}px)`}
              {...iconStyles}
            />
            <Icon
              as={FiChevronDown}
              transform={`translateY(-${isOpen ? 15 : 4}px)`}
              {...iconStyles}
            />
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size='md'
        onClose={onClose}
        finalFocusRef={btnRef}
        {...props}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>目次</DrawerHeader>
          <DrawerBody pb='24' overflowY='auto'>
            <TOCList headings={headings} onDrawerClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { TOC, TOCList, TOCDrawer };
