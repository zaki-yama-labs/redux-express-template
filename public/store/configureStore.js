/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

// eslint-disable-next-line no-underscore-dangle
const __PRODUCTION__ = process.env.NODE_ENV === 'production';

export default function configureStore(initialState) {
  const middlewares = [];
  if (!__PRODUCTION__) {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  if (!__PRODUCTION__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const newRootReducer = require('../reducers').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
