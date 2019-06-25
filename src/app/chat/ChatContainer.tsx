import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';

import { Creators } from './duck/actions';
import { Chat } from './Chat';

const mapStateToProps = (state: IRootState) => ({
  id: state.chat.id,
  messages: state.chat.messages,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  requestId: () => dispatch(Creators.chatRequestId()),
  sendMessage: (id: string, text: string) => dispatch(Creators.chatSendMessage(id, text)),
  chatInit: (id: string) => dispatch(Creators.chatInit(id)),
});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);

export { ChatContainer as default };
