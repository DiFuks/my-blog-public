import * as React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import * as moment from 'moment';
import { injectIntl, InjectedIntl, FormattedMessage } from 'react-intl';

import { ChatMessageTypes, Colors } from '@app/common/constants';

import { IMessage } from './duck/reducer';

export interface IProps {
  messages: IMessage[];
  intl: InjectedIntl;
}

const ChatList: React.FC<IProps> = React.memo(({messages, intl}) => {
  const chatList = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    setTimeout(() => {
      chatList.current.scrollIntoView(false);
    }, 300);
  }, [messages]);

  return (
    <ChatListStyled>
      {messages.map((item, index) => {
        const currentDate = moment(item.date).locale(intl.locale).format('Do MMM');

        const prevDate = messages[index - 1] && moment(messages[index - 1].date).locale('ru').format('Do MMM');

        return (
          <ChatMessageStyled
            mb='10px'
            key={index}
          >
            {currentDate !== prevDate && (
              <ChatDateStyled>
                {currentDate}
              </ChatDateStyled>
            )}
            <ChatTextStyled>
              <ChatAuthorStyled>
                {item.type === ChatMessageTypes.USER ? (
                  <FormattedMessage id={'chat.me'}/>
                ) : (
                  <FormattedMessage id={'chat.dima'}/>
                )}
              </ChatAuthorStyled>
              {`:\u00A0${item.message}`}
            </ChatTextStyled>
            <ChatTimeStyled
              fontSize='1rem'
              pl='1rem'
            >
              {moment(item.date).format('HH:mm')}
            </ChatTimeStyled>
          </ChatMessageStyled>
        );
      })}
      <div ref={chatList}/>
    </ChatListStyled>
  );
});

const ChatListIntl = injectIntl(ChatList);

export { ChatListIntl as ChatList };

const ChatListStyled = styled(Box)`
  overflow: auto;
  line-height: 2rem;
`;

const ChatMessageStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ChatDateStyled = styled(Box)`
  text-align: center;
  color: ${Colors.GREY_100};
  margin: 1rem 0;
  width: 100%;
`;

const ChatTimeStyled = styled(Box)`
  width: 4rem;
  color: ${Colors.GREY_100};
`;

const ChatTextStyled = styled(Box)`
  width: calc(100% - 4rem);
`;

const ChatAuthorStyled = styled.span`
  color: ${Colors.GREY_100};
`;
