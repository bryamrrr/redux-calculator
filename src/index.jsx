import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';

import Calculator from './components/calculator';
import reducers from './reducers';

import { pressValueEpic } from './actions/press-value';


// Epic setup
const rootEpic = combineEpics(
  pressValueEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

// Store setup
const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>
  , document.querySelector('.container'));
