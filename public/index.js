import 'react-hot-loader/patch';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

import configureStore from './store/configureStore';
import App from './containers/App';

import './styles/index.scss';

const store = configureStore();

const rootEl = document.getElementById('root');
const LDS_ROOT = 'assets/lds';

render(
  <AppContainer>
    <Provider store={store}>
      <IconSettings
        standardSprite={`${LDS_ROOT}/icons/standard-sprite/svg/symbols.svg`}
        utilitySprite={`${LDS_ROOT}/icons/utility-sprite/svg/symbols.svg`}
        actionSprite={`${LDS_ROOT}/icons/action-sprite/svg/symbols.svg`}
        doctypeSprite={`${LDS_ROOT}/icons/doctype-sprite/svg/symbols.svg`}
        customSprite={`${LDS_ROOT}/icons/custom-sprite/svg/symbols.svg`}
      >
        <App />
      </IconSettings>
    </Provider>
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <IconSettings
            standardSprite={`${LDS_ROOT}/icons/standard-sprite/svg/symbols.svg`}
            utilitySprite={`${LDS_ROOT}/icons/utility-sprite/svg/symbols.svg`}
            actionSprite={`${LDS_ROOT}/icons/action-sprite/svg/symbols.svg`}
            doctypeSprite={`${LDS_ROOT}/icons/doctype-sprite/svg/symbols.svg`}
            customSprite={`${LDS_ROOT}/icons/custom-sprite/svg/symbols.svg`}
          >
            <App />
          </IconSettings>
        </Provider>
      </AppContainer>,
      rootEl,
    );
  });
}
