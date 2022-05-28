import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Text,
  chakra,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  DrawerContent,
  Drawer,
  useMediaQuery,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { DisclosureSidebarContext } from './context';

const BrandIcon = chakra('img', {
  baseStyle: {
    width: '2rem',
    height: 'auto',
  },
});

const CustomNavLink = ({ name, path, icon, open }) => {
  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ListItem
      sx={{
        justifyContent: 'center',
        px: 2.5,
        m: 1,
        borderRadius: 2,
      }}
    >
      <Button as={NavLink} to={path} w="full" variant="solid" colorScheme={match && 'yellow'}>
        <FontAwesomeIcon icon={icon} color="inherit" />
        {open && <Text ml={1}>{name}</Text>}
      </Button>
    </ListItem>
  );
};

export type SidebarItem = {
  name: string;
  icon: IconName;
  path: string;
};

const SidebarContent = ({ open, title, brandIcon, items, toggleVisibility, ...rest }) => (
  <Box
    as="aside"
    flexDirection="column"
    transition="2s ease"
    bg={useColorModeValue('white', 'gray.900')}
    borderRight="1px"
    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    h="full"
    pos="fixed"
    {...rest}
  >
    <Box
      mx={5}
      my={3}
      flexDirection="row"
      justifyContent="space-between"
      display={open ? 'flex' : 'none'}
    >
      <Button type="button" onClick={toggleVisibility}>
        <FontAwesomeIcon icon={solid('times')} />
      </Button>

      <Box display="flex" alignItems="center">
        <BrandIcon src={brandIcon} alt="logo" />
        <Heading as="h5" size="lg" ml={2} display={{ base: 'none', md: 'flex' }}>
          {title}
        </Heading>
      </Box>
    </Box>

    <List>
      {items.map((item, idx) => (
        <CustomNavLink key={idx} open={open} name={item.name} path={item.path} icon={item.icon} />
      ))}
    </List>
  </Box>
);

type SidebarProps = {
  title: string;
  brandIcon: string;
  showDetail: boolean;
  items: Array<SidebarItem>;
} & BoxProps;
export default function Sidebar({ title, brandIcon, items }: SidebarProps) {
  const drawerSize = useBreakpointValue({ base: 'md', md: 'md' });
  return (
    <DisclosureSidebarContext.Consumer>
      {({ open, toggleVisibility }) => (
        <>
          <SidebarContent
            title={title}
            brandIcon={brandIcon}
            items={items}
            open={open}
            toggleVisibility={toggleVisibility}
            display={{ base: 'none', md: 'block' }}
            w={20}
          />
          <Drawer
            autoFocus={false}
            isOpen={open}
            placement="left"
            onClose={toggleVisibility}
            returnFocusOnClose={false}
            onOverlayClick={toggleVisibility}
            size={drawerSize}
          >
            <DrawerContent>
              <SidebarContent
                title={title}
                brandIcon={brandIcon}
                items={items}
                open={open}
                toggleVisibility={toggleVisibility}
                w="full"
              />
            </DrawerContent>
          </Drawer>
        </>
      )}
    </DisclosureSidebarContext.Consumer>
  );
}
