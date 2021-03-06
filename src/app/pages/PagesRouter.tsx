import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Routes, RoutesNames } from '@app/common/constants';

const Root = React.lazy(() => import('./RootPage'));
const PostPage = React.lazy(() => import('./PostPageContainer'));
const Category = React.lazy(() => import('./CategoryPageContainer'));
const NotFound = React.lazy(() => import('./NotFoundPage'));

export interface IProps {
  basePath: string;
}

export const PagesRouter: React.FC<IProps> = React.memo(({basePath}) => (
  <React.Suspense fallback={<div/>}>
    <Switch>
      <Route path={basePath + Routes.ROOT} exact={true} name={RoutesNames.ROOT} component={Root}/>
      <Route path={basePath + Routes.POST} exact={true} name={RoutesNames.POST} component={PostPage}/>
      <Route path={basePath + Routes.CATEGORY} exact={true} name={RoutesNames.CATEGORY} component={Category}/>
      <Route component={NotFound}/>
    </Switch>
  </React.Suspense>
));
