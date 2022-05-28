import React from 'react';
import { Box, chakra } from '@chakra-ui/react';

const Paper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    p: 5,
    borderRadius: 'lg',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'md',
  },
  shouldForwardProp(props) {
    return true;
  },
});

export default Paper;
