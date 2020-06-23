import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import {
  useDisclosure,
  useTheme,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  List,
  ListItem,
} from '@chakra-ui/core';

const NavDrawerButton = ({ onOpen, ...props }) => (
  <IconButton
    icon='menu'
    position='absolute'
    left='0'
    top='60px'
    shadow='lg'
    size='md'
    borderRadius='0 50% 50% 0'
    css={{ svg: { width: '24px', height: '24px' } }}
    onClick={onOpen}
    {...props}
  />
);

const NavList = ({ navItems, itemMy = '4', onDrawerClose, ...props }) => {
  return (
    <List fontSize={['lg', 'lg', 'sm', 'sm']} {...props}>
      {navItems.map(navItem => (
        <React.Fragment key={navItem.to}>
          <ListItem my={itemMy}>
            <NavLink to={navItem.to} onDrawerClose={onDrawerClose}>
              {navItem.value}
            </NavLink>
            {navItem.navItems && (
              <NavList
                navItems={navItem.navItems}
                fontSize={['sm', 'sm', 'xs', 'xs']}
                itemMy='2'
                ml='3'
                onDrawerClose={onDrawerClose}
              />
            )}
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

const NavLink = ({ to, onDrawerClose, ...props }) => {
  const { colors } = useTheme();

  return (
    <>
      {to[0] === '#' ? (
        <ScrollLink
          to={to.slice(1)}
          smooth={true}
          duration={800}
          offset={-20}
          onClick={onDrawerClose}
          css={{
            '&:hover': { color: colors.orange[300] },
          }}
          {...props}
        />
      ) : (
        <Link
          as={GatsbyLink}
          to={to}
          _hover={{ color: colors.orange[300] }}
          {...props}
        />
      )}
    </>
  );
};

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navData = {
    navItems: [
      {
        to: '/',
        value: '自己紹介',
        navItems: [
          {
            to: '#status',
            value: 'ステータス',
          },
          {
            to: '#careers',
            value: '職務経歴',
          },
          {
            to: '#muscles',
            value: '筋肉経歴',
          },
          {
            to: '#developments',
            value: '開発実績',
          },
        ],
      },
      {
        to: '/blog/',
        value: 'ブログ',
      },
    ],
  };

  return (
    <>
      <NavDrawerButton onOpen={onOpen} />
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody overflow='auto'>
            <NavList navItems={navData.navItems} onDrawerClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
