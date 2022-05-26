import { Box, chakra, Heading, styled, Text } from '@chakra-ui/react';
import React from 'react';

const StyledImg = chakra('img', {
  baseStyle: {
    width: '250px',
    height: 'auto',
    maxWidth: '250px',
  },
});

export default function WelcomePage() {
  return (
    <Box
      as="div"
      display="flex"
      flexDirection={{ base: 'row', xs: 'column' }}
      p={5}
      borderRadius="lg"
    >
      <StyledImg src="/img/apple-icon.png" alt="greeting-img" />
      <Box as="div" display="flex" flexDirection="column" justifyContent="center" p={5}>
        <Heading as="h1" size="3xl" fontWeight="bold" color="blue.400">
          Welcome to reactor-ts template
        </Heading>
        <Text as="p" fontSize="lg" color="gray.500" mt={3}>
          This is a template for reactor-ts template.
        </Text>
      </Box>
    </Box>
  );
}
