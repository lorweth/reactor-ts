import React from 'react';
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  chakra,
  Heading,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DisclosureSidebarContext } from './context';

const BrandIcon = chakra('img', {
  baseStyle: {
    width: '2rem',
    height: 'auto',
  },
});

type AppBarProps = {
  title: string;
  brandIcon: string;
} & BoxProps;
export default function AppBar({ title, brandIcon, ...rest }: AppBarProps) {
  return (
    <Box
      as="header"
      bg="gray.800"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      px={5}
      py={3}
      {...rest}
    >
      <DisclosureSidebarContext.Consumer>
        {({ open, toggleVisibility }) => (
          <Box as="div" display="flex" flexDirection="column" justifyContent="center">
            <Button type="button" onClick={toggleVisibility} w={18}>
              <FontAwesomeIcon icon={open ? solid('times') : solid('bars')} />
            </Button>
          </Box>
        )}
      </DisclosureSidebarContext.Consumer>

      <Box display="flex" alignItems="center">
        <BrandIcon src={brandIcon} alt="logo" />
        <Heading as="h5" size="lg" ml={2} display={{ base: 'none', md: 'block' }}>
          {title}
        </Heading>
      </Box>

      <Menu>
        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
          <HStack>
            <Avatar
              size={'sm'}
              src={'https://i.pinimg.com/564x/08/33/7b/08337b0f3707529f5b20fc3691ce0437.jpg'}
            />
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">Virsavik</Text>
              <Text fontSize="xs" color={useColorModeValue('green.500', 'yellow.400')}>
                Admin
              </Text>
            </VStack>
            <Box display={{ base: 'none', md: 'flex' }}>
              <FontAwesomeIcon icon={solid('caret-down')} />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue('white', 'gray.900')}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
