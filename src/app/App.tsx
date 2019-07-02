import * as React from 'react';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { sagas } from '@app/sagas';
import { BaseRouter } from '@app/baseRouter/BaseRouter';
import { Router } from '@app/pages/Router';
import { Theme } from '@app/common/components/Theme';
import { LayoutContainer as Layout } from '@app/layout/LayoutContainer';

import { createRootReducer } from './reducers';

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

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BaseRouter>
        <Theme>
          <Layout>
            <Router/>
          </Layout>
        </Theme>
      </BaseRouter>
    </ConnectedRouter>
  </Provider>
);
