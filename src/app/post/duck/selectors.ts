import { createSelector } from 'reselect';

import { IRootState } from '@app/reducers';

const getPostData = (state: IRootState) => state.post.data;

export const getPostTitle = createSelector(
  [getPostData],
  postData => postData ? postData.title : 'Загрузка',
);
