import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { Colors, ScreenWidthBreakpoints } from '@app/common/constants';
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
  activeUrl: string;
}

export const Submenu: React.FunctionComponent<IProps> = ({isActive, init, items, activeUrl}) => {
  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    if (isActive === SubmenuStates.ACTIVE) {
      document.body.style.overflow = 'hidden';
    }

    if (isActive !== SubmenuStates.ACTIVE) {
      document.body.style.overflow = 'auto';
    }
  }, [isActive]);

  return (
    <SubmenuStyled show={isActive}>
      {items.map((item, index) => (
        <SubmenuItem
          key={item.url}
          id={index + 1}
          url={item.url}
          isActive={item.url === activeUrl}
        >
          {item.title}
        </SubmenuItem>
      ))}
    </SubmenuStyled>
  );
};

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

const SubmenuStyled = styled.div<IPropsStyled>`
  display: flex;
  background: ${Colors.GREY_37};
  width: ${props => props.show !== SubmenuStates.ACTIVE ? '0' : '25rem'};
  overflow: hidden;
  animation: ${props => props.show !== SubmenuStates.INIT
    ? (props.show === SubmenuStates.ACTIVE
      ? animationIn
      : animationOut
    ) : 'none'} .3s ease;
  flex-direction: column;
  flex-shrink: 0;
  left: 5rem;
  bottom: 0;
  top: 2.5rem;
  position: absolute;
  z-index: 1;
  opacity: .9;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
     position: fixed;
     top: 7.5rem;
     bottom: 4.9rem;
     left: 0;
  }
`;
