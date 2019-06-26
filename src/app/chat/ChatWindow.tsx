import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';

import { Colors, ScreenWidthBreakpoints } from '@app/common/constants';

import { IMessage } from './duck/reducer';
import { ChatList } from './ChatList';
import { ChatSenderContainer as ChatSender } from './ChatSenderContainer';

export interface IProps {
  id: string;
  requestId: () => void;
  chatInit: (id: string) => void;
  messages: IMessage[];
  onHiddenClick: () => void;
}

export const ChatWindow: React.FC<IProps> = ({id, requestId, chatInit, messages, onHiddenClick}) => {
  React.useEffect(() => {
    if (!id) {
      requestId();
    } else {
      chatInit(id);
    }
  }, []);

  return (
    <ChatStyled>
      <ChatHeadStyled
        className='head'
      >
        <ChatTitleStyled>
          Чат
        </ChatTitleStyled>
        <ChatSubtitleStyled>
          сообщения приходят мне в telegram
        </ChatSubtitleStyled>
        <ChatHideStyled
          onClick={onHiddenClick}
        />
      </ChatHeadStyled>
      <ChatWrapperStyled>
        <ChatListWrapperStyled>
          <ChatList
            messages={messages}
          />
        </ChatListWrapperStyled>
        <ChatSender
          id={id}
        />
      </ChatWrapperStyled>
    </ChatStyled>
  );
};

const ChatStyled = styled(Flex)`
  background: ${Colors.GREY_60};
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const ChatWrapperStyled = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  word-wrap: break-word;
  flex-grow: 1;
  justify-content: space-between;
`;

const ChatHideStyled = styled(Box)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  :hover {
    :before, :after {
      background: ${Colors.WHITE};
    }
  }
  &:after, :before {
    content: "";
    position: absolute;
    width: 1.8rem;
    height: .2rem;
    transform: rotate(45deg);
    transition: background .2s ease;
    top: 1rem;
    background: ${Colors.GREY_160};
  }
  :before {
    right: .2rem;
    transform: rotate(-45deg);
  }
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    width: 3.2rem;
    height: 3rem;
    top: 1.5rem;
    &:after, :before {
      width: 3rem;
      height: .2rem;
    }
  }
`;

const ChatHeadStyled = styled(Box)`
  cursor: move;
`;

const ChatListWrapperStyled = styled(Flex)`
  height: 100%;
  overflow: auto;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChatTitleStyled = styled(Flex)`
  background: ${Colors.GREY_37};
  padding: 1rem 1rem 0;
`;
const ChatSubtitleStyled = styled(Flex)`
  background: ${Colors.GREY_37};
  font-size: 1rem;
  padding: .5rem 1rem 1rem;
`;
