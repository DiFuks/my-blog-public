import { SubmenuStates } from '@app/submenu/duck/constants';
import { IMenuItem } from '@app/submenu/duck/reducer';

export const enum Types {
  SUBMENU_CHANGE_ACTIVE = 'SUBMENU_CHANGE_ACTIVE',
  SUBMENU_REFRESH_ITEMS = 'SUBMENU_REFRESH_ITEMS',
  SUBMENU_INIT = 'SUBMENU_INIT',
}

export const Creators = {
  submenuChangeActive: (isActive: SubmenuStates) => ({
    type: Types.SUBMENU_CHANGE_ACTIVE,
    isActive,
  } as const),
  submenuRefreshItems: (items: IMenuItem[]) => ({
    type: Types.SUBMENU_REFRESH_ITEMS,
    items,
  } as const),
  submenuInit: (isInit: boolean) => ({
    type: Types.SUBMENU_INIT,
    isInit,
  } as const),
};
