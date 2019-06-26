import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Creators } from './duck/actions';
import { ChatSender } from './ChatSender';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendMessage: (id: string, text: string) => dispatch(Creators.chatSendMessage(id, text)),
});

export const ChatSenderContainer = connect(
  null,
  mapDispatchToProps,
)(ChatSender);
