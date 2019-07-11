import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from '@app/common/helpers/bodyScroll';

import { Colors, ScreenWidthBreakpoints, Locales } from '@app/common/constants';

import { SubmenuStates } from './duck/constants';
import { IMenuItem } from './duck/reducer';
import { SubmenuItemContainer as SubmenuItem } from './SubmenuItemContainer';
import { InjectedIntl, injectIntl } from 'react-intl';

export interface IPropsStyled {
  show: SubmenuStates;
}

export interface IProps {
  isActive: SubmenuStates;
  items: IMenuItem[];
  init: (locale: Locales) => void;
  activeUrl: string;
  submenuDisable: () => void;
  intl: InjectedIntl;
  submenuInit: () => void;
}

const Submenu: React.FC<IProps> = ({
  isActive,
  init,
  items,
  activeUrl,
  submenuDisable,
  intl,
  submenuInit,
}) => {
  React.useEffect(() => {
    init(intl.locale as Locales);

    submenuInit();
  }, []);

  React.useEffect(() => {
    const onEscDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        submenuDisable();
      }
    };

    document.addEventListener('keydown', onEscDown);

    return () => document.removeEventListener('keydown', onEscDown);
  }, []);

  React.useEffect(() => {
    if (isActive === SubmenuStates.ACTIVE) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [isActive]);

  return (
    <SubmenuStyled show={isActive}>
      {items.map(item => (
        <SubmenuItem
          key={item.url}
          url={item.url}
          isActive={item.url === activeUrl}
          isDisableTabindex={isActive !== SubmenuStates.ACTIVE}
        >
          {item.title}
        </SubmenuItem>
      ))}
    </SubmenuStyled>
  );
};

const SubmenuIntl = injectIntl(Submenu);

export { SubmenuIntl as Submenu };

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
  user-select: none;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
     position: fixed;
     top: 7.5rem;
     bottom: 4.9rem;
     left: 0;
  }
`;
