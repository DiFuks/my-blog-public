import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import { Colors, StringBoolean } from '@app/common/constants';
import { getStringByBoolean } from '@app/common/helpers/getStringByBoolean';

export interface IPropsStyled {
  white: StringBoolean;
}

export interface IProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<IProps> = React.memo(({children, isActive = false, onClick = null}) => (
  <MenuItemStyled
    white={getStringByBoolean(isActive)}
    onClick={() => onClick && onClick()}
  >
    {children}
  </MenuItemStyled>
));

const MenuItemStyled = styled(Flex)<IPropsStyled>`
  padding: 1.2rem;
  height: 5rem;
  color: ${props => props.white === StringBoolean.TRUE ? Colors.WHITE : Colors.GREY_160};
  cursor: pointer;
  transition: color .2s ease;
  flex-direction: column;
  font-size: 1rem;
  &:hover {
    color: ${Colors.WHITE};
  }
`;
