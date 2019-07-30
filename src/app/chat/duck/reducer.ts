import { ChatMessageTypes, FetchingStatuses, LocalStorageKeys } from '@app/common/constants';
import { localStorageGet } from '@app/common/helpers/localStorageData';

import { Creators, Types } from './actions';

export interface IMessage {
  type: ChatMessageTypes;
  date: string;
  message: string;
}

export interface IState {
  id: string;
  messages: IMessage[];
  isOpen: boolean;
  status: FetchingStatuses;
}

const initState: IState = {
  id: localStorageGet(LocalStorageKeys.CHAT_ID),
  messages: [],
  isOpen: !!localStorageGet(LocalStorageKeys.CHAT_IS_OPEN),
  status: FetchingStatuses.NONE,
};

export type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initState, action: ActionTypes): IState => (
  action.type === Types.CHAT_REFRESH_ID && {
    ...state,
    id: action.id,
  } ||
  action.type === Types.CHAT_REFRESH_MESSAGES && {
    ...state,
    messages: action.messages,
    status: FetchingStatuses.SUCCESS,
  } ||
  action.type === Types.CHAT_TOGGLE && {
    ...state,
    isOpen: action.isOpen,
  } ||
  action.type === Types.CHAT_REFRESH_FETCH_STATUS && {
    ...state,
    status: action.status,
  } ||
  state
);
