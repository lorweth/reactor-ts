import React from 'react';
import getStore from './configs/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import getTheme from './configs/uitheme';
import loadIcon from './configs/icon-loader';

// Get store
const store = getStore();

// Get theme
const theme = getTheme();

// load icon
loadIcon();

// Render UI
render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
