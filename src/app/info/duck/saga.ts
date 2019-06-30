import { call, put, takeEvery, all } from 'redux-saga/effects';

import { fetchData } from '@app/common/helpers/fetchData';
import { Creators, Types } from './actions';

function* onInit() {
  yield takeEvery(Types.INFO_INIT, refreshData);
}

function* refreshData() {
  const response = yield call(fetchData, '/post/shortList');

  const data = yield response.json();

  yield put(Creators.infoRefreshItems(data));
}

export function* saga() {
  yield all([
    onInit(),
  ]);
}
