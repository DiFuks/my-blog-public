import { all } from 'redux-saga/effects';

import { saga as postSaga } from '@app/post/duck/saga';
import { saga as submenuSaga } from '@app/submenu/duck/saga';

export function* sagas() {
  yield all([
    postSaga(),
    submenuSaga(),
  ]);
}
