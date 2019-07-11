import { FetchingStatuses, Locales } from '@app/common/constants';

import { IPost } from './reducer';

export const enum Types {
  POST_CHANGE_ACTIVE = 'POST_CHANGE_ACTIVE',
  POST_REFRESH_DATA = 'POST_REFRESH_DATA',
  POST_REFRESH_FETCH_STATUS = 'POST_REFRESH_FETCH_STATUS',
}

export const Creators = {
  postChangeActive: (url: string, locale: Locales) => ({
    type: Types.POST_CHANGE_ACTIVE,
    url: url,
    locale: locale,
  } as const),
  postRefreshData: (data: IPost) => ({
    type: Types.POST_REFRESH_DATA,
    data: data,
  } as const),
  postRefreshFetchStatus: (status: FetchingStatuses) => ({
    type: Types.POST_REFRESH_FETCH_STATUS,
    status: status,
  } as const),
};
