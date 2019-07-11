import { IInfoItem } from '@app/category/duck/reducer';
import { Locales } from '@app/common/constants';

export const enum Types {
  INFO_REFRESH_ITEMS = 'INFO_REFRESH_ITEMS',
  INFO_INIT = 'INFO_INIT',
}

export const Creators = {
  infoInit: (locale: Locales) => ({
    type: Types.INFO_INIT,
    locale: locale,
  } as const),
  infoRefreshItems: (items: IInfoItem[]) => ({
    type: Types.INFO_REFRESH_ITEMS,
    items: items,
  } as const),
};
