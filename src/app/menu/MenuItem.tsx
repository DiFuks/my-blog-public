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

export const MenuItem: React.FunctionComponent<IProps> = ({children, isActive = false, onClick = null}) => (
  <MenuItemStyled
    white={isActive ? 1 : 0}
    onClick={() => onClick && onClick()}
  >
    {children}
  </MenuItemStyled>
);

const MenuItemStyled = styled(Flex)<IPropsStyled>`
  padding: 1.2rem;
  height: 5rem;
  color: ${props => props.white ? Colors.WHITE : Colors.GREY_160};
  cursor: pointer;
  transition: color .2s ease;
  flex-direction: column;
  font-size: 1rem;
  &:hover {
    color: ${Colors.WHITE};
  }
`;
