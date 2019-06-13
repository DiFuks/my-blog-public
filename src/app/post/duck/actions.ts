import { DefaultFetchingStatuses } from '@app/common/constants';
import { IPost } from '@app/post/duck/reducer';

export const enum Types {
  POST_CHANGE_ACTIVE = 'POST_CHANGE_ACTIVE',
  POST_REFRESH_DATA = 'POST_REFRESH_DATA',
  POST_REFRESH_FETCH_STATUS = 'POST_REFRESH_FETCH_STATUS',
}

export const Creators = {
  postChangeActive: (url: string) => ({
    type: Types.POST_CHANGE_ACTIVE,
    url: url,
  } as const),
  postRefreshData: (data: IPost) => ({
    type: Types.POST_REFRESH_DATA,
    data: data,
  } as const),
  postRefreshFetchStatus: (status: DefaultFetchingStatuses) => ({
    type: Types.POST_REFRESH_FETCH_STATUS,
    status: status,
  } as const),
};
