import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { reducer as postReducer } from '@app/post/duck';

export const createRootReducer = (history: History): Reducer => combineReducers({
  router: connectRouter(history),
  post: postReducer,
});
