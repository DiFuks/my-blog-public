import { all } from 'redux-saga/effects';

import { saga as postSaga } from '@app/post/duck';
import { saga as submenuSaga } from '@app/submenu/duck';

export function* sagas() {
  yield all([
    postSaga(),
    submenuSaga(),
  ]);
}
