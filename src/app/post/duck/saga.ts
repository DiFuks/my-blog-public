import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as httpStatusCodes from 'http-status-codes';
import { push } from 'connected-react-router';

import { FetchingStatuses } from '@app/common/constants';
import { fetchData } from '@app/common/helpers/fetchData';

import { Creators, Types } from './actions';

function* onChangeActive() {
  yield takeEvery(Types.POST_CHANGE_ACTIVE, refreshData);
}

function* refreshData(action: ReturnType<typeof Creators.postChangeActive>) {
  if (action.url === null) {
    return;
  }

  yield put(Creators.postRefreshFetchStatus(FetchingStatuses.IN_PROGRESS));

  try {
    const response: Response = yield call(fetchData, `/post/detail/${action.url}`, {}, action.locale);

    if (response.status === httpStatusCodes.NOT_FOUND) {
      yield put(push('/404'));

      return;
    }

    if (response.status !== httpStatusCodes.OK) {
      yield put(Creators.postRefreshFetchStatus(FetchingStatuses.FAILED));

      return;
    }

    const data = yield response.json();

    yield put(Creators.postRefreshData(data));
  } catch (e) {
    yield put(Creators.postRefreshFetchStatus(FetchingStatuses.FAILED));
  }
}

export function* saga() {
  yield all([
    onChangeActive(),
  ]);
}
