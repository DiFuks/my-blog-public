import { combineEpics } from 'redux-observable';

import { epic as categoryEpic } from '@app/category/duck/epic';
import { epic as chatEpic } from '@app/chat/duck/epic';
import { epic as infoEpic } from '@app/info/duck/epic';
import { epic as postEpic } from '@app/post/duck/epic';
import { epic as submenuEpic } from '@app/submenu/duck/epic';

export const epics = combineEpics(
  categoryEpic,
  chatEpic,
  infoEpic,
  postEpic,
  submenuEpic,
);
