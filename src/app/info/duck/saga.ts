import { call, put, takeEvery, all, select } from 'redux-saga/effects';

import { getLocale } from '@app/common/selectors/getLocale';
import { fetchData } from '@app/common/helpers/fetchData';
import { Creators, Types } from './actions';

function* onInit() {
  yield takeEvery(Types.INFO_INIT, refreshData);
}

function* refreshData() {
  const locale = yield select(getLocale);

  const response = yield call(fetchData, `/post/shortList`, {}, locale);

  const data = yield response.json();

  yield put(Creators.infoRefreshItems(data));
}

export function* saga() {
  yield all([
    onInit(),
  ]);
}
