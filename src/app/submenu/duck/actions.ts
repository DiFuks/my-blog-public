import { createActions } from 'reduxsauce';
import { Action } from 'redux';

import { SubmenuStates } from '@app/submenu/duck/constants';
import { IMenuItem } from '@app/submenu/duck/reducer';

const enum TypesNames {
  SUBMENU_CHANGE_ACTIVE = 'SUBMENU_CHANGE_ACTIVE',
  SUBMENU_REFRESH_ITEMS = 'SUBMENU_REFRESH_ITEMS',
  SUBMENU_INIT = 'SUBMENU_INIT',
}

export interface IChangeActive extends Action<TypesNames.SUBMENU_CHANGE_ACTIVE> {
  isActive: SubmenuStates;
}

export interface IRefreshItems extends Action<TypesNames.SUBMENU_REFRESH_ITEMS> {
  items: IMenuItem[];
}

export interface IChangeInit extends Action<TypesNames.SUBMENU_INIT> {
  isInit: boolean;
}

export const { Types, Creators } = createActions<{
  [TypesNames.SUBMENU_CHANGE_ACTIVE]: string;
  [TypesNames.SUBMENU_REFRESH_ITEMS]: string;
  [TypesNames.SUBMENU_INIT]: string;
}, {
  submenuChangeActive: (isActive: SubmenuStates) => IChangeActive;
  submenuRefreshItems: (menuItems: IMenuItem[]) => IRefreshItems;
  submenuInit: (isInit: boolean) => IChangeInit;
}>({
  submenuChangeActive: ['isActive'],
  submenuRefreshItems: ['items'],
  submenuInit: ['isInit'],
});
