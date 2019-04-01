import { ActionCreators, createActions } from 'reduxsauce';

import { SubmenuStates } from '@app/submenu/duck/constants';

export const enum Types {
  SUBMENU_CHANGE_ACTIVE = 'SUBMENU_CHANGE_ACTIVE',
}

interface ICreators extends ActionCreators {
  submenuChangeActive: (isActive: SubmenuStates) => { type: Types.SUBMENU_CHANGE_ACTIVE };
}

const CreatedActions = createActions({
  submenuChangeActive: ['isActive'],
});

export const Creators = CreatedActions.Creators as ICreators;
