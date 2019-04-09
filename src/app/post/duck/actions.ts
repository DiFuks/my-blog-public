import { createActions } from 'reduxsauce';
import { Action } from 'redux';

import { DefaultFetchingStatuses } from '@app/common/constants';
import { IPost } from '@app/post/duck/reducer';

const enum TypesNames {
  POST_CHANGE_ACTIVE = 'POST_CHANGE_ACTIVE',
  POST_REFRESH_DATA = 'POST_REFRESH_DATA',
  POST_REFRESH_FETCH_STATUS = 'POST_REFRESH_FETCH_STATUS',
}

export interface IChangeActive extends Action<TypesNames.POST_CHANGE_ACTIVE> {
  url: string;
}

export interface IRefreshData extends Action<TypesNames.POST_REFRESH_DATA> {
  data: IPost;
}

export interface IChangeFetchStatus extends Action<TypesNames.POST_REFRESH_FETCH_STATUS> {
  status: DefaultFetchingStatuses;
}

export const { Types, Creators } = createActions<{
  [TypesNames.POST_CHANGE_ACTIVE]: string;
  [TypesNames.POST_REFRESH_DATA]: string;
  [TypesNames.POST_REFRESH_FETCH_STATUS]: string;
}, {
  postChangeActive: (url: string) => IChangeActive;
  postRefreshData: (data: IPost) => IRefreshData;
  postRefreshFetchStatus: (status: DefaultFetchingStatuses) => IChangeFetchStatus;
}>({
  postChangeActive: ['url'],
  postRefreshData: ['data'],
  postRefreshFetchStatus: ['status'],
});
