import getStore from 'src/configs/store';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

// Get store
const store = getStore();

// Render UI
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
