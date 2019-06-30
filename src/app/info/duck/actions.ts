import { IInfoItem } from '@app/category/duck/reducer';

export const enum Types {
  INFO_REFRESH_ITEMS = 'INFO_REFRESH_ITEMS',
  INFO_INIT = 'INFO_INIT',
}

export const Creators = {
  infoInit: (isInit: boolean) => ({
    type: Types.INFO_INIT,
    isInit: isInit,
  } as const),
  infoRefreshItems: (items: IInfoItem[]) => ({
    type: Types.INFO_REFRESH_ITEMS,
    items: items,
  } as const),
};
