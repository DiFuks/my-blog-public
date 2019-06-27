import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';

import { Creators } from './duck/actions';
import { Chat } from './Chat';

const mapStateToProps = (state: IRootState) => ({
  id: state.chat.id,
  isOpen: state.chat.isOpen,
  menuNeedHide: state.menu.needHide,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleIsOpen: (isOpen: boolean) => dispatch(Creators.chatToggle(isOpen)),
  requestId: () => dispatch(Creators.chatRequestId()),
  chatInit: (id: string) => dispatch(Creators.chatInit(id)),
});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);

export { ChatContainer as default };
