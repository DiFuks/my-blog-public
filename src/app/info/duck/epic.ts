import { combineEpics, Epic, ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

import { getJson } from '@app/common/helpers/ajax';
import { IInfoItem } from '@app/category/duck/reducer';

import { ActionTypes } from './reducer';
import { Creators, Types } from './actions';

const onInit: Epic<ActionTypes> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.infoInit>>(Types.INFO_INIT),
  mergeMap(action =>
    getJson<IInfoItem[]>(`/post/shortList`, {}, action.locale).pipe(
      map(response => Creators.infoRefreshItems(response)),
    ),
  ),
);

export const epic = combineEpics(
  onInit,
);
