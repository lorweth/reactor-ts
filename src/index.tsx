import React from 'react';
import getStore from './configs/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// Get store
const store = getStore();

// Render UI
render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
