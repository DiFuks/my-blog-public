import { call, put, takeEvery, all } from 'redux-saga/effects';

import { fetchData } from '@app/common/fetchData';

import { Creators, Types } from './actions';

function* onInit() {
  yield takeEvery(Types.SUBMENU_INIT, refreshData);
}

function* refreshData() {
  try {
    const response = yield call(fetchData, '/post/list');

    const data = yield response.json();

    yield put(Creators.submenuRefreshItems(data));
  } catch (e) {
    yield put(Creators.submenuRefreshItems([]));
  }
}

export function* saga() {
  yield all([
    onInit(),
  ]);
}
