import { createReducer } from 'reduxsauce';

import { IChangeFetchStatus, IRefreshData, Types, IChangeActive } from './actions';
import { DefaultFetchingStatuses } from '@app/common/constants';
import { PostTypes } from '@app/common/constants/postTypes';

export type PostContent = Array<{
  type: PostTypes,
  content: string,
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

export const reducer = createReducer<IState, IChangeActive | IRefreshData | IChangeFetchStatus>({
  url: null,
  data: null,
  fetchStatus: DefaultFetchingStatuses.NONE,
}, {
  [Types.POST_CHANGE_ACTIVE]: (state, action: IChangeActive) => ({
    ...state,
    url: action.url,
  }),
  [Types.POST_REFRESH_DATA]: (state, action: IRefreshData) => ({
    ...state,
    data: action.data,
    fetchStatus: DefaultFetchingStatuses.SUCCESS,
  }),
  [Types.POST_REFRESH_FETCH_STATUS]: (state, action: IChangeFetchStatus) => ({
    ...state,
    fetchStatus: action.status,
  }),
});
