import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors, Icons, Routes } from '@app/common/constants';
import { MenuItem } from '@app/menu/MenuItem';
import { Icon } from '@app/icon';
import { MenuSocials } from '@app/menu/MenuSocials';
import { SubmenuStates } from '@app/submenu/duck/constants';

const MenuStyled = styled(Flex)`
  background: ${Colors.GREY_51};
  width: 5rem;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuWrapperStyled = styled(Flex)`
  flex-direction: column;
`;

export interface IProps {
  activePathName: string;
  submenuIsActive: SubmenuStates;
  changeSubmenuActive: (isActive: SubmenuStates) => void;
}

export const Menu: React.FunctionComponent<IProps> = ({activePathName, submenuIsActive, changeSubmenuActive}) => (
  <MenuStyled>
    <MenuWrapperStyled>
      <Link to={Routes.ROOT}>
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
      <MenuItem
        isActive={submenuIsActive === SubmenuStates.ACTIVE}
        onClick={() => changeSubmenuActive(submenuIsActive === SubmenuStates.ACTIVE
          ? SubmenuStates.DISABLE
          : SubmenuStates.ACTIVE,
        )}
      >
        <Icon icon={Icons.LIST}/>
      </MenuItem>
    </MenuWrapperStyled>
    <MenuWrapperStyled>
      <MenuSocials/>
    </MenuWrapperStyled>
  </MenuStyled>
);
