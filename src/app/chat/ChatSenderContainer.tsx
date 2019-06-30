import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';

import { Creators } from './duck/actions';
import { ChatSender } from './ChatSender';

const mapStateToProps = (state: IRootState) => ({
  status: state.chat.status,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendMessage: (id: string, text: string) => dispatch(Creators.chatSendMessage(id, text)),
});

export const ChatSenderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatSender);
