import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Box as="div" p={5}>
      <Outlet />
    </Box>
  );
}
