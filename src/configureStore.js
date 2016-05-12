import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import loggerMiddleware from 'redux-logger';

import reducers from './reducers';

export default function configureStore(initalState) {
  return createStore(reducers, initalState, applyMiddleware(
    promiseMiddleware,
    loggerMiddleware()
  ));
}
