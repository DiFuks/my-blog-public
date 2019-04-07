import { createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Types } from './actions';
import { DefaultFetchingStatuses } from '@app/common/constants';
import { PostTypes } from '@app/common/constants/postTypes';

export type PostContent = Array<{
  'type': PostTypes
  'content': string,
}>;

export interface IPost {
  content: PostContent;
  title: string;
}

export interface IState {
  url: string;
  data: IPost;
  fetchStatus: DefaultFetchingStatuses;
}

export interface IChangeActive extends AnyAction {
  url: string;
}

export interface IRefreshData extends AnyAction {
  data: IPost;
}

export interface IChangeFetchStatus extends AnyAction {
  status: DefaultFetchingStatuses;
}

const initialState: IState = {
  url: null,
  data: null,
  fetchStatus: DefaultFetchingStatuses.NONE,
};

const postChangeActive = (state = initialState, action: IChangeActive): IState => ({
  ...state,
  url: action.url,
});

const postRefreshData = (state = initialState, action: IRefreshData): IState => ({
  ...state,
  data: action.data,
  fetchStatus: DefaultFetchingStatuses.SUCCESS,
});

const postChangeFetchStatus = (state = initialState, action: IChangeFetchStatus): IState => ({
  ...state,
  fetchStatus: action.status,
});

const handlers = {
  [Types.POST_CHANGE_ACTIVE]: postChangeActive,
  [Types.POST_REFRESH_DATA]: postRefreshData,
  [Types.POST_REFRESH_FETCH_STATUS]: postChangeFetchStatus,
};

export const reducer = createReducer(initialState, handlers);
