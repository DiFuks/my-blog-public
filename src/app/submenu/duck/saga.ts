import { call, put, takeEvery, all } from 'redux-saga/effects';

import { fetchData } from '@app/common/helpers/fetchData';

import { Creators, Types } from './actions';

function* onInit() {
  yield takeEvery(Types.SUBMENU_INIT, refreshData);
}

function* refreshData(action: ReturnType<typeof Creators.submenuInit>) {
  try {
    const response = yield call(fetchData, '/post/categories', {}, action.locale);

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
