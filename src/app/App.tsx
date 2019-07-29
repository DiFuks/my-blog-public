import * as React from 'react';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import { BaseRouter } from '@app/baseRouter/BaseRouter';

import { createRootReducer } from './reducers';
import { generateUserSessionToken } from '@app/common/helpers/userSessionTokenManager';
import { epics } from '@app/epics';

const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware,
    ),
  ),
);

epicMiddleware.run(epics);

export const App: React.FC<{}> = () => {
  React.useEffect(() => {
    generateUserSessionToken();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BaseRouter/>
      </ConnectedRouter>
    </Provider>
  );
};
