import { IInfoItem } from '@app/category/duck/reducer';
import { FetchingStatuses } from '@app/common/constants';

export const enum Types {
  CATEGORY_CHANGE_ACTIVE = 'CATEGORY_CHANGE_ACTIVE',
  CATEGORY_REFRESH_DATA = 'CATEGORY_REFRESH_DATA',
  CATEGORY_REFRESH_FETCH_STATUS = 'CATEGORY_REFRESH_FETCH_STATUS',
}

export const Creators = {
  categoryChangeActive: (url: string) => ({
    type: Types.CATEGORY_CHANGE_ACTIVE,
    url: url,
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
