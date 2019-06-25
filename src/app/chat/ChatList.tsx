import * as React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

import { ChatMessageTypes } from '@app/common/constants';

import { IMessage } from './duck/reducer';

export interface IProps {
  messages: IMessage[];
}

export const ChatList: React.FC<IProps> = ({messages}) => {
  React.useEffect(() => {
    chatList.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const chatList = React.useRef<HTMLDivElement>();

  return (
      <ChatListStyled>
        {messages.map((item, index) => (
          <Box
            mb='10px'
            key={index}
          >
            {item.type === ChatMessageTypes.USER ? 'Я:' : 'Дима:'}{'\u00A0' + item.message}
          </Box>
        ))}
        <div ref={chatList}/>
      </ChatListStyled>
  );
};

const ChatListStyled = styled(Box)`
  height: 100%;
  overflow: auto;
  line-height: 2rem;
`;
