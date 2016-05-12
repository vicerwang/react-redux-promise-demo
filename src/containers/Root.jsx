import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
);
