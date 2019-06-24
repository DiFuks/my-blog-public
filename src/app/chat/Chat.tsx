import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';

import { ChatMessageTypes, Colors, Icons } from '@app/common/constants';
import { Icon } from '@app/icon/Icon';

import { IMessage } from './duck/reducer';

export interface IProps {
  id: string;
  requestId: () => void;
  sendMessage: (id: string, name: string, text: string) => void;
  chatInit: (id: string) => void;
  messages: IMessage[];
}

export const Chat: React.FC<IProps> = ({id, requestId, sendMessage, chatInit, messages}) => {
  React.useEffect(() => {
    if (!id) {
      requestId();
    } else {
      chatInit(id);
    }
  }, []);

  const [message, setMessage] = React.useState('');

  return (
    <ChatStyled>
      <ChatTitleStyled>Чат</ChatTitleStyled>
      <ChatSubtitleStyled>сообщения приходят мне в telegram</ChatSubtitleStyled>
      <ChatWrapperStyled>
        <Box>
          {messages.map(item => (
            <Box mb='10px'>{item.type === ChatMessageTypes.USER ? 'Я: ' : 'Дима: '}{item.message}</Box>
          ))}
        </Box>
        <TextAreaWrapperStyled>
          <TextAreaStyled
            placeholder='Сообщение'
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          />
          <ButtonStyled onClick={() => {
            sendMessage(id, name, message);
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
  );
};

const ChatStyled = styled(Flex)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background: ${Colors.GREY_60};
  flex-direction: column;
`;

const ChatWrapperStyled = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
  font-size: 1.2rem;
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
  width: 20rem;
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
