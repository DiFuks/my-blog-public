import { IInfoItem } from '@app/category/duck/reducer';

import { Creators, Types } from './actions';

export interface IState {
  items: IInfoItem[];
  isInit: boolean;
}

const initialState: IState = {
  items: [],
  isInit: false,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initialState, action: ActionTypes): IState => (
  action.type === Types.INFO_REFRESH_ITEMS && {
    ...state,
    items: action.items,
  } ||
  action.type === Types.INFO_INIT && {
    ...state,
    isInit: action.isInit,
  } ||
  state
);
