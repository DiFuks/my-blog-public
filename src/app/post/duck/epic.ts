import { combineEpics, Epic, ofType } from 'redux-observable';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { concat, of } from 'rxjs';
import { CallHistoryMethodAction, push } from 'connected-react-router';
import * as httpStatusCodes from 'http-status-codes';

import { getJson } from '@app/common/helpers/ajax';
import { FetchingStatuses } from '@app/common/constants';

import { ActionTypes, IPost } from './reducer';
import { Creators, Types } from './actions';

const onChangeActive: Epic<ActionTypes | CallHistoryMethodAction> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.postChangeActive>>(Types.POST_CHANGE_ACTIVE),
  filter(action => action.url !== null),
  switchMap(action =>
    concat(
      of(Creators.postRefreshFetchStatus(FetchingStatuses.IN_PROGRESS)),
      getJson<IPost>(`/post/detail/${action.url}`, {}, action.locale).pipe(
        map(response => Creators.postRefreshData(response)),
        catchError(e => of(e.status === httpStatusCodes.NOT_FOUND
          && push('404')
          || Creators.postRefreshFetchStatus(FetchingStatuses.FAILED)),
        ),
      ),
    ),
  ),
);

export const epic = combineEpics(
  onChangeActive,
);
