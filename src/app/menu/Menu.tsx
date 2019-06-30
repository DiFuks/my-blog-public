import * as React from 'react';
import { Flex } from 'grid-styled';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Colors, Icons, Routes, ScreenWidthBreakpoints, StringBoolean } from '@app/common/constants';
import { getStringByBoolean } from '@app/common/helpers/getStringByBoolean';
import { Icon } from '@app/icon/Icon';
import { SubmenuStates } from '@app/submenu/duck/constants';

import { MenuSocials } from './MenuSocials';
import { MenuItem } from './MenuItem';

export interface IProps {
  activePathName: string;
  submenuIsActive: SubmenuStates;
  changeSubmenuActive: (isActive: SubmenuStates) => void;
  menuNeedHide: boolean;
  changeMenuNeedHide: (changeActive: boolean) => void;
}

export interface IPropsStyled {
  position: 'top' | 'bottom';
  hide?: StringBoolean;
}

export const Menu: React.FC<IProps> = ({
  activePathName,
  submenuIsActive,
  changeSubmenuActive,
  menuNeedHide,
  changeMenuNeedHide,
}) => {
  const scrollPosition = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      changeMenuNeedHide(document.body.getBoundingClientRect().top < scrollPosition.current);

      scrollPosition.current = document.body.getBoundingClientRect().top;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MenuStyled>
      <MenuWrapperStyled
        position='top'
        hide={getStringByBoolean(menuNeedHide)}
      >
        <Link
          to={Routes.ROOT}
          tabIndex={0}
        >
          <MenuItem
            isActive={Routes.ROOT === activePathName}
            onClick={() => changeSubmenuActive(submenuIsActive === SubmenuStates.ACTIVE
              ? SubmenuStates.DISABLE
              : SubmenuStates.INIT,
            )}
          >
            <Icon icon={Icons.HOME}/>
          </MenuItem>
        </Link>
        <ButtonStyled
          onClick={() => changeSubmenuActive(submenuIsActive === SubmenuStates.ACTIVE
            ? SubmenuStates.DISABLE
            : SubmenuStates.ACTIVE,
          )}
          tabIndex={0}
        >
          <MenuItem
            isActive={submenuIsActive === SubmenuStates.ACTIVE}
          >
            <Icon icon={Icons.LIST}/>
          </MenuItem>
        </ButtonStyled>
      </MenuWrapperStyled>
      <MenuWrapperStyled
        position='bottom'
        hide={getStringByBoolean(menuNeedHide)}
      >
        <MenuSocials/>
      </MenuWrapperStyled>
    </MenuStyled>
  );
};

const MenuStyled = styled(Flex)`
  background: ${Colors.GREY_45};
  width: 5rem;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    width: 0;
    opacity: .9;
  }
`;

const MenuWrapperStyled = styled(Flex)<IPropsStyled>`
  flex-direction: column;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    background: ${Colors.GREY_51};
    position: fixed;
    transition: top .3s ease, bottom .3s ease;
    ${props => props.position === 'top' && css`
      top: 2.5rem;
    `};
    ${props => props.hide === StringBoolean.TRUE && props.position === 'top' && css`
      top: -5rem;
    `};
    ${props => props.position === 'bottom' && css`
      bottom: 0;
    `};
    ${props => props.hide === StringBoolean.TRUE && props.position === 'bottom' && css`
      bottom: -5rem;
    `};
  }
`;

const ButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 0;
`;
