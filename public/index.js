import 'react-hot-loader/patch';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import App from './containers/App';

import './styles/index.scss';

const store = configureStore();

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      rootEl,
    );
  });
}
