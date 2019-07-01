import * as React from 'react';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { addLocaleData, IntlProvider } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeRu from 'react-intl/locale-data/ru';

import { Locales } from '@app/common/constants';
import { getLocaleFromDevice } from '@app/common/helpers/getLocaleFromDevice';
import { sagas } from '@app/sagas';
import { Router } from '@app/pages/Router';
import { Theme } from '@app/common/components/Theme';
import { LayoutContainer as Layout } from '@app/layout/LayoutContainer';

import messagesRu from '@translations/ru.json';
import messagesEn from '@translations/en.json';

import { createRootReducer } from './reducers';

addLocaleData([...localeRu, ...localeEn]);

const messages = {
  [Locales.RU]: messagesRu,
  [Locales.EN]: messagesEn,
};

const locale = getLocaleFromDevice();

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(sagas);

export const App: React.FC<{}> = React.memo(() => (
  <IntlProvider
    locale={locale}
    messages={messages[locale]}
  >
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Theme>
          <Layout>
            <Router/>
          </Layout>
        </Theme>
      </ConnectedRouter>
    </Provider>
  </IntlProvider>
));
