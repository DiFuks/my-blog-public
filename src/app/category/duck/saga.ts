import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as httpStatusCodes from 'http-status-codes';

import { fetchData } from '@app/common/helpers/fetchData';
import { FetchingStatuses } from '@app/common/constants';
import { Creators, Types } from './actions';

function* onInit() {
  yield takeEvery(Types.CATEGORY_CHANGE_ACTIVE, refreshData);
}

function* refreshData(action: ReturnType<typeof Creators.categoryChangeActive>) {
  if (action.url === null) {
    return;
  }

  yield put(Creators.categoryRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    const response = yield call(fetchData, `/post/listByCategory/${action.url}`, {}, action.locale);

    if (response.status !== httpStatusCodes.OK) {
      yield put(Creators.categoryRefreshFetchStatus(FetchingStatuses.FAILED));

      return;
    }

    const data = yield response.json();

    yield put(Creators.categoryRefreshData(data));
  } catch (e) {
    yield put(Creators.categoryRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([
    onInit(),
  ]);
}
