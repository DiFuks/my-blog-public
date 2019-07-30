import { combineEpics, Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { getJson, sendJson } from '@app/common/helpers/ajax';
import { localStorageRemove, localStorageSet } from '@app/common/helpers/localStorageData';
import { FetchingStatuses, LocalStorageKeys } from '@app/common/constants';

import { ActionTypes, IMessage } from './reducer';
import { Creators, Types } from './actions';

const onRequest: Epic<ActionTypes> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.chatRequestId>>(Types.CHAT_REQUEST_ID),
  mergeMap(() =>
    getJson<{id: string}>('/bot/getId/').pipe(
      map(response => {
        localStorageSet(LocalStorageKeys.CHAT_ID, response.id);

        return Creators.chatRefreshId(response.id);
      }),
      catchError(() => {
        localStorageRemove(LocalStorageKeys.CHAT_ID);

        return of(Creators.chatRefreshId(null));
      }),
    ),
  ),
);

const onMessageSend: Epic<ActionTypes> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.chatSendMessage>>(Types.CHAT_SEND_MESSAGE),
  mergeMap(action =>
    sendJson('/bot/send/', JSON.stringify({
      id: action.id,
      message: action.message,
    })).pipe(
      map(response => Creators.chatRefreshMessages(response.response)),
      catchError(() => of(Creators.chatRefreshFetchStatus(FetchingStatuses.FAILED))),
    ),
  ),
);

const onChatInit: Epic<ActionTypes> = action$ => action$.pipe(
  ofType<ReturnType<typeof Creators.chatInit>>(Types.CHAT_INIT),
  mergeMap(action =>
    getJson<IMessage[]>(`/bot/getMessages/${action.id}`).pipe(
      map(response => Creators.chatRefreshMessages(response)),
    ),
  ),
);

export const epic = combineEpics(
  onRequest,
  onMessageSend,
  onChatInit,
);
