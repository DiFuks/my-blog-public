import { combineEpics } from 'redux-observable';

import { epic as categoryEpic } from '@app/category/duck/epic';

export const epics = combineEpics(
  categoryEpic,
);
