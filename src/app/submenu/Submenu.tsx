import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from 'grid-styled';

import { Colors } from '@app/common/constants';
import { SubmenuItem } from './SubmenuItem';

export interface IPropsStyled {
  show: number;
}

export interface IProps {
  isActive: boolean;
}

const animationIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 25rem;
}`;

const SubmenuStyled = styled(Flex)<IPropsStyled>`
  background: ${Colors.GREY_37};
  width: ${props => props.show ? '25rem' : '0'};
  overflow: hidden;
  animation: ${props => props.show && animationIn } .3s ease;
  display: flex;
  flex-direction: column;
`;

export const Submenu: React.FunctionComponent<IProps> = ({isActive}) => (
  <SubmenuStyled show={isActive ? 1 : 0}>
    <SubmenuItem id={1}/>
    <SubmenuItem id={2}/>
    <SubmenuItem id={3}/>
    <SubmenuItem id={4}/>
  </SubmenuStyled>
);
