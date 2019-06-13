import { DefaultFetchingStatuses } from '@app/common/constants';
import { PostTypes } from '@app/common/constants/postTypes';
import { Creators, Types } from './actions';

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

const initState: IState = {
  url: null,
  data: null,
  fetchStatus: DefaultFetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initState, action: ActionTypes): IState => (
  action.type === Types.POST_CHANGE_ACTIVE && {
    ...state,
    url: action.url,
  } ||
  action.type === Types.POST_REFRESH_DATA && {
    ...state,
    data: action.data,
    fetchStatus: DefaultFetchingStatuses.SUCCESS,
  } ||
  action.type === Types.POST_REFRESH_FETCH_STATUS && {
    ...state,
    fetchStatus: action.status,
  } ||
  state
);
