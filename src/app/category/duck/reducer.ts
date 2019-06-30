import { FetchingStatuses } from '@app/common/constants';
import { Creators, Types } from './actions';

export interface IInfoItem {
  url: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export interface IState {
  items: IInfoItem[];
  url: string;
  fetchStatus: FetchingStatuses;
}

const initialState: IState = {
  items: [],
  url: null,
  fetchStatus: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState => (
  action.type === Types.CATEGORY_CHANGE_ACTIVE && {
    ...state,
    url: action.url,
  } ||
  action.type === Types.CATEGORY_REFRESH_DATA && {
    ...state,
    items: action.items,
    fetchStatus: FetchingStatuses.SUCCESS,
  } ||
  action.type === Types.CATEGORY_REFRESH_FETCH_STATUS && {
    ...state,
    fetchStatus: action.status,
  } ||
  state
);
