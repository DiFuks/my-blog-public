import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Routes, RoutesNames } from '@app/common/constants';

import { Root } from './Root';
import { PostPageContainer } from './PostPageContainer';

export const Router: React.FC = React.memo(() => (
  <Switch>
    <Route path={Routes.ROOT} exact={true} name={RoutesNames.ROOT} component={Root} />
    <Route path={Routes.POST} exact={true} name={RoutesNames.POST} component={PostPageContainer} />
  </Switch>
));
