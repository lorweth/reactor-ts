import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  useDisclosure,
  CSSObject,
  chakra,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';

type AppBarProps = {
  title: string;
  brandIcon: any;
  sx?: CSSObject;
  children?: React.ReactNode;
};

const BrandIcon = chakra('img', {
  baseStyle: {
    width: '3rem',
    heith: 'auto',
  },
});

export default function AppBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} sx={props.sx}>
      <Flex align="center" mr={5}>
        <BrandIcon src="/img/apple-icon.png" alt="logo" />
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          &nbsp; ReactTypeTemplate
        </Heading>
      </Flex>

      <Button display={{ base: 'block', md: ' none' }} onClick={handleToggle}>
        <FontAwesomeIcon icon={solid('bars')} />
      </Button>

      <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        <Button variant="outline" _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}>
          Create account
        </Button>
      </Box>
    </Flex>
  );
}
