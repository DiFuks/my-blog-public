import * as React from 'react';
import { Flex } from 'grid-styled';
import styled, { css } from 'styled-components';

import { Colors, ScreenWidthBreakpoints } from '@app/common/constants';
import { Header } from '@app/header';
import { Menu } from '@app/menu';
import { Submenu } from '@app/submenu';
import { SubmenuStates } from '@app/submenu/duck/constants';

export interface IProps {
  children: React.ReactChild;
  title: string;
  menuIsOpen: SubmenuStates;
  submenuDisable: () => void;
}

export interface IPropsStyled {
  menu_is_open: SubmenuStates;
}

export const Layout: React.FunctionComponent<IProps> = ({children, title, menuIsOpen, submenuDisable}) => {
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
          onClick={() => submenuDisable()}
        >
          {children}
        </ContentWrapperStyled>
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

const ContentStyled = styled(Flex)`
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
    transform: scale(.95);
  `}
`;
