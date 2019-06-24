import * as React from 'react';
import { Flex } from 'grid-styled';
import styled, { css } from 'styled-components';

import { Colors, ScreenWidthBreakpoints } from '@app/common/constants';
import { Header } from '@app/header/Header';
import { MenuContainer as Menu } from '@app/menu/MenuContainer';
import { SubmenuContainer as Submenu } from '@app/submenu/SubmenuContainer';
import { SubmenuStates } from '@app/submenu/duck/constants';
import { setTitle } from '@app/common/helpers/setTitle';
import { ChatContainer as Chat } from '@app/chat/ChatContainer';

export interface IProps {
  children?: React.ReactChild;
  title: string;
  menuIsOpen: SubmenuStates;
  submenuDisable: (menuIsOpen: SubmenuStates) => void;
}

export interface IPropsStyled {
  menu_is_open: SubmenuStates;
}

export const Layout: React.FC<IProps> = ({children, title, menuIsOpen, submenuDisable}) => {
  React.useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <LayoutStyled>
      <Header>
        {title}
      </Header>
      <ContentStyled>
        <Menu/>
        <Submenu/>
        <ContentWrapperStyled
          menu_is_open={menuIsOpen}
          onClick={() => submenuDisable(menuIsOpen)}
        >
          {children}
        </ContentWrapperStyled>
        <Chat/>
      </ContentStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Flex)`
  height: 100%;
  color: ${Colors.GREY_200};
  flex-direction: column;
  font-weight: 300;
`;

const ContentStyled = styled.main`
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
`;

const ContentWrapperStyled = styled(Flex)<IPropsStyled>`
  display: flex;
  padding: 3rem;
  height: 100%;
  overflow: hidden;
  transition: filter .2s linear, transform .2s linear;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    padding: 7.5rem 3rem;
  }
  ${props => props.menu_is_open === SubmenuStates.ACTIVE && css`
    overflow: hidden;
    filter: blur(3px);
    transform: scale(.98);
  `}
`;
