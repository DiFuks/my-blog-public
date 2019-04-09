import { createReducer } from 'reduxsauce';

import { IChangeActive, IChangeInit, IRefreshItems, Types } from './actions';
import { SubmenuStates } from '@app/submenu/duck/constants';

export interface IMenuItem {
  url: string;
  title: string;
}

export interface IState {
  isActive: SubmenuStates;
  items: IMenuItem[];
  isInit: boolean;
}

export const reducer = createReducer<IState, IChangeActive | IRefreshItems | IChangeInit>({
  isActive: SubmenuStates.INIT,
  items: [],
  isInit: false,
}, {
  [Types.SUBMENU_CHANGE_ACTIVE]: (state, action: IChangeActive) => ({
    ...state,
    isActive: action.isActive,
  }),
  [Types.SUBMENU_REFRESH_ITEMS]: (state, action: IRefreshItems) => ({
    ...state,
    items: action.items,
  }),
  [Types.SUBMENU_INIT]: (state, action: IChangeInit) => ({
    ...state,
    isInit: action.isInit,
  }),
});
