import { combineEpics, Epic, ofType } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import * as httpStatusCodes from 'http-status-codes';
import { CallHistoryMethodAction, push } from 'connected-react-router';
import { of } from 'rxjs';

import { FetchingStatuses } from '@app/common/constants';
import { getJson } from '@app/common/helpers/ajax';

import { Creators, Types } from './actions';
import { ActionTypes, IInfoItem } from './reducer';

const onInit: Epic<ActionTypes | CallHistoryMethodAction> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.categoryChangeActive>>(Types.CATEGORY_CHANGE_ACTIVE),
  filter(action => action.url !== null),
  mergeMap(action =>
    getJson<IInfoItem[]>(`/post/listByCategory/${action.url}`).pipe(
      map(response => Creators.categoryRefreshData(response)),
      catchError(e => e.status === httpStatusCodes.NOT_FOUND
        && of(push('404'))
        || of(Creators.categoryRefreshFetchStatus(FetchingStatuses.FAILED)),
      ),
    ),
  ),
);

export const epic = combineEpics(
  onInit,
);
