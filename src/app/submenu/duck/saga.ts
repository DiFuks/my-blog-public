import { call, put, takeEvery, all, select } from 'redux-saga/effects';

import { fetchData } from '@app/common/helpers/fetchData';
import { getLocale } from '@app/common/selectors/getLocale';

import { Creators, Types } from './actions';

function* onInit() {
  yield takeEvery(Types.SUBMENU_INIT, refreshData);
}

function* refreshData() {
  try {
    const locale = yield select(getLocale);

    const response = yield call(fetchData, '/post/categories', {}, locale);

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
