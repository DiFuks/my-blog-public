import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import { Menu } from '@app/menu';
import { Header } from '@app/header';
import { Colors } from '@app/common/constants';
import { Submenu } from '@app/submenu';

const LayoutStyled = styled(Flex)`
  height: 100%;
  background: ${Colors.GREY_30};
  color: ${Colors.WHITE};
  flex-direction: column;
  font-weight: 300;
`;

const ContentStyled = styled(Flex)`
  flex-grow: 1;
`;

const ContentWrapperStyled = styled(Flex)`
  padding: 3rem;
`;

export interface IProps {
  children: React.ReactChild;
  title: string;
}

export const Layout: React.FunctionComponent<IProps> = ({children, title}) => (
  <LayoutStyled>
    <Header>
      {title}
    </Header>
    <ContentStyled>
      <Menu/>
      <Submenu/>
      <ContentWrapperStyled>
        {children}
      </ContentWrapperStyled>
    </ContentStyled>
  </LayoutStyled>
);
