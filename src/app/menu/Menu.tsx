import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors, Icons, Routes } from '@app/common/constants';
import { MenuItem } from '@app/menu/MenuItem';
import { Icon } from '@app/icon';

const MenuStyled = styled(Flex)`
  background: ${Colors.GREY_51};
  width: 5rem;
  flex-direction: column;
`;

const MenuBottomStyled = styled(Flex)`
  margin-top: 5rem;
  flex-direction: column;
`;

export interface IProps {
  activePathName: string;
}

export const Menu: React.FunctionComponent<IProps> = ({activePathName}) => (
  <MenuStyled>
    <Link to={Routes.ROOT}>
      <MenuItem
        isActive={Routes.ROOT === activePathName}
      >
        <Icon icon={Icons.HOME}/>
      </MenuItem>
    </Link>
    <Link to={Routes.LIST}>
      <MenuItem
        isActive={Routes.LIST === activePathName}
      >
        <Icon icon={Icons.LIST}/>
      </MenuItem>
    </Link>
    <MenuBottomStyled>
      <a
        href='https://vk.com/difuks'
        target='_blank'
      >
        <MenuItem>
          <Icon icon={Icons.VK}/>
        </MenuItem>
      </a>
      <a
        href='https://t.me/ffuchs'
        target='_blank'
      >
        <MenuItem>
          <Icon icon={Icons.TELEGRAM}/>
        </MenuItem>
      </a>
      <a
        href='https://github.com/DiFuks'
        target='_blank'
      >
        <MenuItem>
          <Icon icon={Icons.GITHUB}/>
        </MenuItem>
      </a>
      <a
        href='https://www.instagram.com/di_fuks/'
        target='_blank'
      >
        <MenuItem>
          <Icon icon={Icons.INSTAGRAM}/>
        </MenuItem>
      </a>
    </MenuBottomStyled>
  </MenuStyled>
);
