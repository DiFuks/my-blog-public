import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Routes, RoutesNames } from '@app/common/constants';

const Root = React.lazy(() => import('./RootPageContainer'));
const PostPage = React.lazy(() => import('./PostPageContainer'));
const Category = React.lazy(() => import('./CategoryPageContainer'));

export const Router: React.FC = React.memo(() => (
  <Switch>
    <React.Suspense fallback={<div/>}>
      <Route path={Routes.ROOT} exact={true} name={RoutesNames.ROOT} component={Root}/>
      <Route path={Routes.POST} exact={true} name={RoutesNames.POST} component={PostPage}/>
      <Route path={Routes.CATEGORY} exact={true} name={RoutesNames.CATEGORY} component={Category}/>
    </React.Suspense>
  </Switch>
));
