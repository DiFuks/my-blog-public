import { all, call, put, takeEvery } from 'redux-saga/effects';

import { fetchData } from '@app/common/helpers/fetchData';
import { localStorageRemove, localStorageSet } from '@app/common/helpers/localStorageData';
import { LocalStorageKeys } from '@app/common/constants';

import { Creators, Types } from './actions';
import { IMessage } from '@app/chat/duck/reducer';

function* onRequest() {
  yield takeEvery(Types.CHAT_REQUEST_ID, refreshId);
}

function* onMessageSend() {
  yield takeEvery(Types.CHAT_SEND_MESSAGE, sendMessage);
}

function* onChatInit() {
  yield takeEvery(Types.CHAT_INIT, chatInit);
}

function* refreshId() {
  try {
    const response = yield call(fetchData, '/bot/getId/');

    const data: {id: string} = yield response.json();

    yield put(Creators.chatRefreshId(data.id));

    localStorageSet(LocalStorageKeys.CHAT_ID, data.id);
  } catch (e) {
    yield put(Creators.chatRefreshId(null));

    localStorageRemove(LocalStorageKeys.CHAT_ID);
  }
}

function* sendMessage(action: ReturnType<typeof Creators.chatSendMessage>) {
  const response = yield call(fetchData, '/bot/send/', {
    method: 'POST',
    body: JSON.stringify({
      id: action.id,
      message: action.message,
    }),
  });

  const data: IMessage[] = yield response.json();

  yield put(Creators.chatRefreshMessages(data));
}

function* chatInit(action: ReturnType<typeof Creators.chatInit>) {
  const response = yield call(fetchData, `/bot/getMessages/${action.id}`);

  const data: IMessage[] = yield response.json();

  yield put(Creators.chatRefreshMessages(data));
}

export function* saga() {
  yield all([
    onRequest(),
    onMessageSend(),
    onChatInit(),
  ]);
}
