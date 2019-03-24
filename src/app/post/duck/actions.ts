import { ActionCreators, createActions } from 'reduxsauce';

import { DefaultFetchingStatuses } from '@app/common/constants';

export const enum Types {
  POST_CHANGE_ACTIVE = 'POST_CHANGE_ACTIVE',
  POST_REFRESH_DATA = 'POST_REFRESH_DATA',
  POST_REFRESH_FETCH_STATUS = 'POST_REFRESH_FETCH_STATUS',
}

interface ICreators extends ActionCreators {
  postChangeActive: (id: number) => { type: Types.POST_CHANGE_ACTIVE };
  postRefreshData: (data: object) => { type: Types.POST_REFRESH_DATA };
  postRefreshFetchStatus: (status: DefaultFetchingStatuses) => { type: Types.POST_REFRESH_FETCH_STATUS };
}

const CreatedActions = createActions({
  postChangeActive: ['id'],
  postRefreshData: ['data'],
  postRefreshFetchStatus: ['status'],
});

export const Creators = CreatedActions.Creators as ICreators;
