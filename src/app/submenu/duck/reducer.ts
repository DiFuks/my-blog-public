import { FetchingStatuses } from '@app/common/constants';

import { SubmenuStates } from './constants';
import { Creators, Types } from './actions';

export interface IMenuItem {
  url: string;
  title: string;
}

export interface IState {
  isActive: SubmenuStates;
  items: IMenuItem[];
  isInit: boolean;
  fetchStatus: FetchingStatuses;
}

const initialState: IState = {
  isActive: SubmenuStates.INIT,
  items: [],
  isInit: false,
  fetchStatus: FetchingStatuses.NONE,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState => (
  action.type === Types.SUBMENU_CHANGE_ACTIVE && {
    ...state,
    isActive: action.isActive,
  } ||
  action.type === Types.SUBMENU_REFRESH_ITEMS && {
    ...state,
    items: action.items,
    fetchStatus: FetchingStatuses.SUCCESS,
  } ||
  action.type === Types.SUBMENU_INIT && {
    ...state,
    isInit: action.isInit,
  } ||
  state
);
