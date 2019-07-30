import { combineEpics, Epic, ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { getJson } from '@app/common/helpers/ajax';

import { Creators, Types } from './actions';
import { ActionTypes, IMenuItem } from './reducer';

const onInit: Epic<ActionTypes> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.submenuInit>>(Types.SUBMENU_INIT),
  switchMap(action =>
    getJson<IMenuItem[]>('/post/categories', {}, action.locale).pipe(
      map(response => Creators.submenuRefreshItems(response)),
      catchError(() => of(Creators.submenuRefreshItems([]))),
    ),
  ),
);

export const epic = combineEpics(
  onInit,
);
