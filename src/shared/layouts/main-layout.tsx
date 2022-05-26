import { Box, chakra } from '@chakra-ui/react';
import React from 'react';

const StyledContainer = chakra('div', {
  baseStyle: {
    minHeight: '100vh',
    width: '100vw',
  },
});

export default function Main({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
