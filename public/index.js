import 'react-hot-loader/patch';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import App from './containers/App';

import './styles/index.scss';

const store = configureStore();

const rootEl = document.getElementById('root');
const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    setImmediate(() => {
      unmountComponentAtNode(rootEl);
      renderApp();
    });
  });
}
