import * as React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

import { Colors, FetchingStatuses, Icons } from '@app/common/constants';
import { Icon } from '@app/icon/Icon';

export interface IProps {
  id: string;
  sendMessage: (id: string, text: string) => void;
  status: FetchingStatuses;
}

export const ChatSender: React.FC<IProps> = ({id, sendMessage, status}) => {
  const [message, setMessage] = React.useState('');

  const onMessageSend = () => {
    sendMessage(id, message);

    setMessage('');
  };

  const onEnterDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.which === 13) {
      event.preventDefault();

      onMessageSend();
    }
  };

  return (
    <TextAreaWrapperStyled>
      <TextAreaStyled
        placeholder={
          status === FetchingStatuses.IN_PROGRESS && 'Отправка...' ||
          status === FetchingStatuses.FAILED &&  'Ошибка отправки' ||
          'Сообщение'
        }
        disabled={status === FetchingStatuses.IN_PROGRESS}
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        onKeyDown={status !== FetchingStatuses.IN_PROGRESS && onEnterDown}
      />
      {status !== FetchingStatuses.IN_PROGRESS && (
        <ButtonStyled onClick={onMessageSend}>
          <Icon
            viewBox='0 0 334.5 334.5'
            icon={Icons.SEND}
          />
        </ButtonStyled>
      )}
    </TextAreaWrapperStyled>
  );
};

const TextAreaWrapperStyled = styled(Box)`
  position: relative;
`;

const TextAreaStyled = styled.textarea`
  background: ${Colors.GREY_51};
  color: ${Colors.GREY_200};
  height: 6rem;
  padding: 1rem 6rem 1rem 1rem;
  box-sizing: border-box;
  resize: none;
  font-size: 1.2rem;
  width: 100%;
  border: none;
  box-shadow: 0 0 1px 0 ${Colors.GREY_200};
  border-radius: 3px;
  :disabled {
    cursor: progress;
  }
`;

const ButtonStyled = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  width: 3.5rem;
  height: 3.5rem;
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
