import { Box, chakra, Heading, styled, Text } from '@chakra-ui/react';
import React from 'react';
import Paper from '../shared/components/Paper';

const StyledImg = chakra('img', {
  baseStyle: {
    width: '250px',
    height: 'auto',
    maxWidth: '250px',
  },
});

export default function WelcomePage() {
  return (
    <Paper flexDirection={{ base: 'column', md: 'row' }}>
      <Box display="flex" flexDir="row" justifyContent="center">
        <StyledImg src="/assets/img/brand-icon.svg" alt="greeting-img" />
      </Box>
      <Box as="div" p={5}>
        <Heading as="h1" size="3xl" fontWeight="bold" color="blue.400">
          Welcome to reactor-ts template
        </Heading>
        <Text as="p" fontSize="lg" color="gray.500" mt={3}>
          This is a template for reactor-ts template.
        </Text>
      </Box>
    </Paper>
  );
}
