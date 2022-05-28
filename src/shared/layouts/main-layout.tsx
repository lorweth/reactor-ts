import React from 'react';
import { chakra } from '@chakra-ui/react';
import { DisclosureSidebarContext } from './context';

const StyledContainer = chakra('div', {
  baseStyle: {
    minHeight: '100vh',
    width: '100vw',
  },
});

export default function Main({ children }) {
  const [open, setOpen] = React.useState(false);
  const toggleVisibility = () => setOpen(!open);

  return (
    <StyledContainer>
      <DisclosureSidebarContext.Provider value={{ open, toggleVisibility }}>
        {children}
      </DisclosureSidebarContext.Provider>
    </StyledContainer>
  );
}
