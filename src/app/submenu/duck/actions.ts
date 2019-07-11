import { SubmenuStates } from './constants';
import { IMenuItem } from './reducer';
import { Locales } from '@app/common/constants';

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
  submenuInit: (locale: Locales) => ({
    type: Types.SUBMENU_INIT,
    locale: locale,
  } as const),
};
