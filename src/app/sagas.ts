import { all } from 'redux-saga/effects';

import { saga as postSaga } from '@app/post/duck';

export function* sagas() {
  yield all([
    postSaga(),
  ]);
}
