import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from 'grid-styled';

import { Colors } from '@app/common/constants';
import { SubmenuItemContainer as SubmenuItem } from './SubmenuItemContainer';
import { SubmenuStates } from '@app/submenu/duck/constants';
import { IMenuItem } from '@app/submenu/duck/reducer';

export interface IPropsStyled {
  show: SubmenuStates;
}

export interface IProps {
  isActive: SubmenuStates;
  items: IMenuItem[];
  init: () => void;
}

const animationIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 25rem;
  }
`;

const animationOut = keyframes`
  0% {
    width: 25rem;
  }
  100% {
    width: 0;
  }
`;

const SubmenuStyled = styled(Flex)<IPropsStyled>`
  background: ${Colors.GREY_37};
  width: ${props => props.show !== SubmenuStates.ACTIVE ? '0' : '25rem'};
  overflow: hidden;
  animation: ${props => props.show !== SubmenuStates.INIT
    ? (props.show === SubmenuStates.ACTIVE ? animationIn : animationOut)
    : 'none'} .3s ease;
  display: flex;
  flex-direction: column;
`;

export const Submenu: React.FunctionComponent<IProps> = ({isActive, init, items}) => {
  React.useEffect(() => {
    init();
  }, []);

  return (
    <SubmenuStyled show={isActive}>
      {items.map((item, index) => (
        <SubmenuItem
          key={item.url}
          id={index + 1}
          url={item.url}
        >
          {item.title}
        </SubmenuItem>
      ))}
    </SubmenuStyled>
  );
};
