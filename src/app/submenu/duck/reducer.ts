import { createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Types } from './actions';
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

export interface IChangeActive extends AnyAction {
  isActive: SubmenuStates;
}

export interface IRefreshItems extends AnyAction {
  items: IMenuItem[];
}

export interface IChangeInit extends AnyAction {
  isInit: boolean;
}

const initialState: IState = {
  isActive: SubmenuStates.INIT,
  items: [],
  isInit: false,
};

const submenuChangeActive = (state = initialState, action: IChangeActive): IState => ({
  ...state,
  isActive: action.isActive,
});

const submenuRefreshItems = (state = initialState, action: IRefreshItems): IState => ({
  ...state,
  items: action.items,
});

const submenuChangeInit = (state = initialState, action: IChangeInit): IState => ({
  ...state,
  isInit: action.isInit,
});

const handlers = {
  [Types.SUBMENU_CHANGE_ACTIVE]: submenuChangeActive,
  [Types.SUBMENU_REFRESH_ITEMS]: submenuRefreshItems,
  [Types.SUBMENU_INIT]: submenuChangeInit,
};

export const reducer = createReducer(initialState, handlers);
