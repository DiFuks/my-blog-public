import * as React from 'react';
import { Flex } from 'grid-styled';
import styled, { css } from 'styled-components';
import { injectIntl, InjectedIntl } from 'react-intl';

import { Colors, ScreenWidthBreakpoints } from '@app/common/constants';
import { Header } from '@app/header/Header';
import { MenuContainer as Menu } from '@app/menu/MenuContainer';
import { SubmenuContainer as Submenu } from '@app/submenu/SubmenuContainer';
import { SubmenuStates } from '@app/submenu/duck/constants';
import { setTitle } from '@app/common/helpers/setTitle';

const Chat = React.lazy(() => import('@app/chat/ChatContainer'));

export interface IProps {
  children?: React.ReactChild;
  title: string;
  menuIsOpen: SubmenuStates;
  submenuDisable: (menuIsOpen: SubmenuStates) => void;
  intl: InjectedIntl;
}

export interface IPropsStyled {
  menu_is_open: SubmenuStates;
}

const Layout: React.FC<IProps> = ({children, title, menuIsOpen, submenuDisable, intl}) => {
  React.useEffect(() => {
    setTitle(title, intl.formatMessage({id: 'page.postfix'}));
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
        <React.Suspense fallback={<div/>}>
          <Chat/>
        </React.Suspense>
      </ContentStyled>
    </LayoutStyled>
  );
};

const LayoutIntl = injectIntl(Layout);

export { LayoutIntl as Layout };

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
  height: 100%;
`;

const ContentWrapperStyled = styled(Flex)<IPropsStyled>`
  padding: 3rem;
  overflow: auto;
  transition: transform .2s linear, opacity .2s ease;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    padding: 7.5rem 2rem;
  }
  @media (min-width: ${ScreenWidthBreakpoints.DESKTOP}px) {
    height: calc(100vh - 2.5rem);
  }
  ${props => props.menu_is_open === SubmenuStates.ACTIVE && css`
    overflow: hidden;
    opacity: .5;
    transform: scale(.98);
  `}
`;
