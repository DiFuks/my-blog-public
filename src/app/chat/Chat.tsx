import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';

import { Colors, Icons } from '@app/common/constants';
import { Icon } from '@app/icon/Icon';

import { IMessage } from './duck/reducer';
import { ChatList } from './ChatList';
import { ChatMover } from './ChatMover';

export interface IProps {
  id: string;
  requestId: () => void;
  sendMessage: (id: string, text: string) => void;
  chatInit: (id: string) => void;
  messages: IMessage[];
}

export const Chat: React.FC<IProps> = ({id, requestId, sendMessage, chatInit, messages}) => {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    if (!id) {
      requestId();
    } else {
      chatInit(id);
    }
  }, []);

  return (
    <ChatMover>
      <ChatStyled>
        <ChatHeadStyled
          className='head'
        >
          <ChatTitleStyled>Чат</ChatTitleStyled>
          <ChatSubtitleStyled>сообщения приходят мне в telegram</ChatSubtitleStyled>
        </ChatHeadStyled>
        <ChatWrapperStyled>
          <ChatListWrapperStyled>
            <ChatList
              messages={messages}
            />
          </ChatListWrapperStyled>
          <TextAreaWrapperStyled>
            <TextAreaStyled
              placeholder='Сообщение'
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            />
            <ButtonStyled onClick={() => {
              sendMessage(id, message);
              setMessage('');
            }}>
              <Icon
                viewBox='0 0 334.5 334.5'
                icon={Icons.SEND}
              />
            </ButtonStyled>
          </TextAreaWrapperStyled>
        </ChatWrapperStyled>
      </ChatStyled>
    </ChatMover>
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

const ChatHeadStyled = styled(Box)`
  cursor: move;
`;

const ChatListWrapperStyled = styled(Box)`
  height: 100%;
  overflow: auto;
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

const TextAreaWrapperStyled = styled(Box)`
  position: relative;
`;

const TextAreaStyled = styled.textarea`
  background: ${Colors.GREY_60};
  color: ${Colors.GREY_200};
  height: 6rem;
  padding: 1rem 6rem 1rem 1rem;
  box-sizing: border-box;
  resize: none;
  font-size: 1.2rem;
  width: 100%;
`;

const ButtonStyled = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${Colors.GREY_160};
  transition: color .2s ease;
  transform: translateY(-50%) scale(.8);
  :hover {
    color: ${Colors.WHITE};
  }
`;
