import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';

import { Creators } from './duck/actions';
import { ChatWindow } from './ChatWindow';

const mapStateToProps = (state: IRootState) => ({
  id: state.chat.id,
  messages: state.chat.messages,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  requestId: () => dispatch(Creators.chatRequestId()),
  chatInit: (id: string) => dispatch(Creators.chatInit(id)),
});

export const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatWindow);
