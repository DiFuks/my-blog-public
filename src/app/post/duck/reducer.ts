import { createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Types } from './actions';
import { DefaultFetchingStatuses } from '@app/common/constants';

export interface IState {
  id: number;
  data: object;
  fetchStatus: DefaultFetchingStatuses;
}

export interface IChangeActive extends AnyAction {
  id: number;
}

export interface IRefreshData extends AnyAction {
  data: object;
}

export interface IChangeFetchStatus extends AnyAction {
  status: DefaultFetchingStatuses;
}

const initialState: IState = {
  id: null,
  data: {},
  fetchStatus: DefaultFetchingStatuses.NONE,
};

const postChangeActive = (state = initialState, action: IChangeActive) => ({
  ...state,
  id: action.id,
});

const postRefreshData = (state = initialState, action: IRefreshData) => ({
  ...state,
  data: action.data,
  fetchStatus: DefaultFetchingStatuses.SUCCESS,
});

const postChangeFetchStatus = (state = initialState, action: IChangeFetchStatus) => ({
  ...state,
  fetchStatus: action.status,
});

const handlers = {
  [Types.POST_CHANGE_ACTIVE]: postChangeActive,
  [Types.POST_REFRESH_DATA]: postRefreshData,
  [Types.POST_REFRESH_FETCH_STATUS]: postChangeFetchStatus,
};

export const reducer = createReducer(initialState, handlers);
