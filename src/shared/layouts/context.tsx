import React from 'react';

export const DisclosureSidebarContext = React.createContext({
  open: false,
  toggleVisibility: () => {},
});
