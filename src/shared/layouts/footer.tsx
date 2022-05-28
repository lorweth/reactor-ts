import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box as="footer" marginTop="100vh" bg="gray.900" textAlign="center" color="white" py={4} px={5}>
      <small>
        &copy; {new Date().getFullYear()} - Made with ❤️ by{' '}
        <a href="https://github.com/virsavik">Virsavik</a>
      </small>
    </Box>
  );
}
