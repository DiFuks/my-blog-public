import { IMessage } from '@app/chat/duck/reducer';

export const enum Types {
  CHAT_REQUEST_ID = 'CHAT_REQUEST_ID',
  CHAT_REFRESH_ID = 'CHAT_REFRESH_ID',
  CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE',
  CHAT_REFRESH_MESSAGES = 'CHAT_REFRESH_MESSAGES',
  CHAT_INIT = 'CHAT_INIT',
  CHAT_TOGGLE = 'CHAT_TOGGLE',
}

export const Creators = {
  chatRequestId: () => ({
    type: Types.CHAT_REQUEST_ID,
  } as const),
  chatRefreshId: (id: string) => ({
    type: Types.CHAT_REFRESH_ID,
    id: id,
  } as const),
  chatSendMessage: (id: string, text: string) => ({
    type: Types.CHAT_SEND_MESSAGE,
    id: id,
    message: text,
  } as const),
  chatRefreshMessages: (messages: IMessage[]) => ({
    type: Types.CHAT_REFRESH_MESSAGES,
    messages: messages,
  } as const),
  chatInit: (id: string) => ({
    type: Types.CHAT_INIT,
    id: id,
  } as const),
  chatToggle: (isOpen: boolean) => ({
    type: Types.CHAT_TOGGLE,
    isOpen: isOpen,
  } as const),
};
