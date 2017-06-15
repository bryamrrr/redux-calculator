import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';

import Calculator from './components/calculator';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(),
);

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>
  , document.querySelector('.container'));
