import * as React from 'react';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer } from '@app/reducers';
import { Routes, RoutesNames } from '@app/common/constants';
import { List, Post, Root } from '@app/common/pages';
import { Theme } from '@app/common/Theme';

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      createSagaMiddleware(),
    ),
  ),
);

export const App: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Theme>
          <Switch>
            <Route path={Routes.ROOT} exact={true} name={RoutesNames.ROOT} component={Root} />
            <Route path={Routes.LIST} exact={true} name={RoutesNames.LIST} component={List} />
            <Route path={Routes.POST} exact={true} name={RoutesNames.POST} component={Post} />
          </Switch>
        </Theme>
      </ConnectedRouter>
    </Provider>
  </React.Fragment>
);
