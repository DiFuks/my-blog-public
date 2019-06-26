import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Routes, RoutesNames } from '@app/common/constants';

const Root = React.lazy(() => import('./RootPageContainer'));
const PostPageContainer = React.lazy(() => import('./PostPageContainer'));

export const Router: React.FC = React.memo(() => (
  <Switch>
    <React.Suspense fallback={<div/>}>
      <Route path={Routes.ROOT} exact={true} name={RoutesNames.ROOT} component={Root}/>
      <Route path={Routes.POST} exact={true} name={RoutesNames.POST} component={PostPageContainer}/>
    </React.Suspense>
  </Switch>
));
