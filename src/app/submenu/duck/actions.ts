import { ActionCreators, createActions } from 'reduxsauce';

import { SubmenuStates } from '@app/submenu/duck/constants';
import { IMenuItem } from '@app/submenu/duck/reducer';

export const enum Types {
  SUBMENU_CHANGE_ACTIVE = 'SUBMENU_CHANGE_ACTIVE',
  SUBMENU_REFRESH_ITEMS = 'SUBMENU_REFRESH_ITEMS',
  SUBMENU_INIT = 'SUBMENU_INIT',
}

interface ICreators extends ActionCreators {
  submenuChangeActive: (isActive: SubmenuStates) => { type: Types.SUBMENU_CHANGE_ACTIVE };
  submenuRefreshItems: (menuItems: IMenuItem[]) => { type: Types.SUBMENU_REFRESH_ITEMS };
  submenuInit: (isInit: boolean) => { type: Types.SUBMENU_INIT };
}

const CreatedActions = createActions({
  submenuChangeActive: ['isActive'],
  submenuRefreshItems: ['items'],
  submenuInit: ['isInit'],
});

export const Creators = CreatedActions.Creators as ICreators;
