import * as React from 'react';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { sagas } from '@app/sagas';
import { Router } from '@app/pages/Router';
import { Theme } from '@app/common/Theme';

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

export const App: React.FunctionComponent<{}> = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Theme>
        <Router/>
      </Theme>
    </ConnectedRouter>
  </Provider>
);
