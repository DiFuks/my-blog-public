import { localStorageGet } from '@app/common/helpers/localStorageData';
import { ChatMessageTypes, LocalStorageKeys } from '@app/common/constants';

import { Creators, Types } from './actions';

export interface IMessage {
  type: ChatMessageTypes;
  date: Date;
  message: string;
}

export interface IState {
  id: string;
  messages: IMessage[];
  isOpen: boolean;
}

const initState: IState = {
  id: localStorageGet(LocalStorageKeys.CHAT_ID),
  messages: [],
  isOpen: !!localStorageGet(LocalStorageKeys.CHAT_IS_OPEN),
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initState, action: ActionTypes): IState => (
  action.type === Types.CHAT_REFRESH_ID && {
    ...state,
    id: action.id,
  } ||
  action.type === Types.CHAT_REFRESH_MESSAGES && {
    ...state,
    messages: action.messages,
  } ||
  action.type === Types.CHAT_TOGGLE && {
    ...state,
    isOpen: action.isOpen,
  } ||
  state
);
