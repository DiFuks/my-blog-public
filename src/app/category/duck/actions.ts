import { IInfoItem } from '@app/category/duck/reducer';
import { FetchingStatuses, Locales } from '@app/common/constants';

export const enum Types {
  CATEGORY_CHANGE_ACTIVE = 'CATEGORY_CHANGE_ACTIVE',
  CATEGORY_REFRESH_DATA = 'CATEGORY_REFRESH_DATA',
  CATEGORY_REFRESH_FETCH_STATUS = 'CATEGORY_REFRESH_FETCH_STATUS',
}

export const Creators = {
  categoryChangeActive: (url: string, locale: Locales) => ({
    type: Types.CATEGORY_CHANGE_ACTIVE,
    url: url,
    locale: locale,
  } as const),
  categoryRefreshData: (items: IInfoItem[]) => ({
    type: Types.CATEGORY_REFRESH_DATA,
    items: items,
  } as const),
  categoryRefreshFetchStatus: (status: FetchingStatuses) => ({
    type: Types.CATEGORY_REFRESH_FETCH_STATUS,
    status: status,
  } as const),
};
