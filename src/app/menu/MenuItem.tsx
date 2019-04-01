import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import { Colors } from '@app/common/constants';

// https://github.com/styled-components/styled-components/issues/1198
export interface IPropsStyled {
  white: number;
}

export interface IProps {
  children: React.ReactChild;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuItemStyled = styled(Flex)<IPropsStyled>`
  height: 5rem;
  padding: 1.2rem;
  color: ${props => props.white ? Colors.WHITE : Colors.GREY_160};
  cursor: pointer;
  transition: color .2s ease;
  &:hover {
    color: ${Colors.WHITE};
  }
`;

export const MenuItem: React.FunctionComponent<IProps> = ({children, isActive = false, onClick = null}) => (
  <MenuItemStyled
    white={isActive ? 1 : 0}
    onClick={() => onClick && onClick()}
  >
    {children}
  </MenuItemStyled>
);
