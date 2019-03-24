import { call, put, takeEvery, all } from 'redux-saga/effects';

import { Creators, Types } from './actions';
import { IChangeActive } from './reducer';
import { DefaultFetchingStatuses } from '@app/common/constants';

function* onChangeActive() {
  yield takeEvery(Types.POST_CHANGE_ACTIVE, refreshData);
}

function* refreshData(action: IChangeActive) {
  yield put(Creators.postRefreshFetchStatus(DefaultFetchingStatuses.IN_PROGRESS));

  try {
    const response =  yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${action.id}`);
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
