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
    bg={useColorModeValue('gray.200', 'gray.900')}
    h="full"
    {...rest}
  >
    <Box px={3} my={3} display="flex" flexDirection="row" justifyContent="space-between">
      <Button type="button" onClick={toggleVisibility} w="full" maxW={20}>
        <FontAwesomeIcon icon={open ? solid('times') : solid('bars')} />
      </Button>

      <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
        <BrandIcon src={brandIcon} alt="logo" />
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
  items: Array<SidebarItem>;
} & BoxProps;
export default function Sidebar({ title, brandIcon, items, ...rest }: SidebarProps) {
  const drawerSize = useBreakpointValue({ base: 'full', md: 'xs' });
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
            {...rest}
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
