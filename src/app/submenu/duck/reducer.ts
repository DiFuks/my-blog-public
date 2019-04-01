import { createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Types } from './actions';
import { SubmenuStates } from '@app/submenu/duck/constants';

export interface IState {
  isActive: SubmenuStates;
}

export interface IChangeActive extends AnyAction {
  isActive: SubmenuStates;
}

const initialState: IState = {
  isActive: SubmenuStates.INIT,
};

const submenuChangeActive = (state = initialState, action: IChangeActive): IState => ({
  ...state,
  isActive: action.isActive,
});

const handlers = {
  [Types.SUBMENU_CHANGE_ACTIVE]: submenuChangeActive,
};

export const reducer = createReducer(initialState, handlers);
