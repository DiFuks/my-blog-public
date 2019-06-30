import * as React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

import { Colors, Icons } from '@app/common/constants';
import { Icon } from '@app/icon/Icon';

export interface IProps {
  id: string;
  sendMessage: (id: string, text: string) => void;
}

export const ChatSender: React.FC<IProps> = ({id, sendMessage}) => {
  const [message, setMessage] = React.useState('');

  return (
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
  );
};

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
  border: 1px solid ${Colors.GREY_200};
  border-radius: 0;
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
