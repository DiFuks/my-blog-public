import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as httpStatusCodes from 'http-status-codes';

import { Creators, Types } from './actions';
import { DefaultFetchingStatuses } from '@app/common/constants';
import { fetchData } from '@app/common/fetchData';

function* onChangeActive() {
  yield takeEvery(Types.POST_CHANGE_ACTIVE, refreshData);
}

function* refreshData(action: ReturnType<typeof Creators.postChangeActive>) {
  if (action.url === null) {
    return;
  }

  yield put(Creators.postRefreshFetchStatus(DefaultFetchingStatuses.IN_PROGRESS));

  try {
    const response: Response =  yield call(fetchData, `/post/detail/${action.url}`);

    if (response.status !== httpStatusCodes.OK) {
      yield put(Creators.postRefreshFetchStatus(DefaultFetchingStatuses.FAILED));

      return;
    }

    const data = yield response.json();

    yield put(Creators.postRefreshData(data));
  } catch (e) {
    yield put(Creators.postRefreshFetchStatus(DefaultFetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([
    onChangeActive(),
  ]);
}
