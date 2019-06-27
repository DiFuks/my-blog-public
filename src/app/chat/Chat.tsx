import * as React from 'react';
import styled, { css } from 'styled-components';

import { Colors, Icons, LocalStorageKeys, ScreenWidthBreakpoints, StringBoolean } from '@app/common/constants';
import { Icon } from '@app/icon/Icon';
import { localStorageRemove, localStorageSet } from '@app/common/helpers/localStorageData';
import { getStringByBoolean } from '@app/common/helpers/getStringByBoolean';

import { ChatWindowContainer as ChatWindow } from './ChatWindowContainer';
import { ChatMover } from './ChatMover';

export interface IProps {
  isOpen: boolean;
  toggleIsOpen: (isOpen: boolean) => void;
  menuNeedHide: boolean;
}

export interface IPropsStyled {
  isHide: StringBoolean;
}

export const Chat: React.FC<IProps> = ({isOpen, toggleIsOpen, menuNeedHide}) => {
  const onChatHidden = () => {
    toggleIsOpen(false);
    localStorageRemove(LocalStorageKeys.CHAT_IS_OPEN);
  };

  return (
    <>
      {!isOpen && (
        <ChatButtonStyled
          isHide={getStringByBoolean(menuNeedHide)}
          onClick={() => {
            toggleIsOpen(true);
            localStorageSet(LocalStorageKeys.CHAT_IS_OPEN, '1');
          }}
        >
          <Icon
            icon={Icons.CHAT}
          />
        </ChatButtonStyled>
      )}
      {isOpen && (
        <>
          <DesktopWindowStyled>
            <ChatMover>
              <ChatWindow
                onHiddenClick={onChatHidden}
              />
            </ChatMover>
          </DesktopWindowStyled>
          <MobileWindowStyled>
            <ChatWindow
              onHiddenClick={onChatHidden}
            />
          </MobileWindowStyled>
        </>
      )}
    </>
  );
};

const ChatButtonStyled = styled.button<IPropsStyled>`
  position: fixed;
  padding: 1rem 2rem 1rem 1rem;
  background: ${Colors.GREY_60};
  right: -1rem;
  bottom: 8rem;
  transition: color .2s ease, right .2s ease, box-shadow .2s ease;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 8px 0 ${Colors.GREY_80};
  color: ${Colors.GREY_200};
  border-radius: 10px 0 0 10px;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    opacity: .9;
  }
  ${props => props.isHide === StringBoolean.TRUE && css`
    right: -8rem;
  `}
  &:hover {
    color: ${Colors.WHITE};
    right: -.1rem;
    box-shadow: 0 0 5px 0 ${Colors.GREY_160};
  }
`;

const MobileWindowStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  @media (min-width: ${ScreenWidthBreakpoints.DESKTOP}px) {
    display: none;
  }
`;

const DesktopWindowStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${ScreenWidthBreakpoints.DESKTOP}px) {
    display: none;
  }
`;