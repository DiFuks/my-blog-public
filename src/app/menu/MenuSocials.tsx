import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '@app/icon/Icon';
import { Icons } from '@app/common/constants/icons';

import { MenuItem } from './MenuItem';

export const MenuSocials: React.FC = React.memo(() => (
  <>
    <LinkStyled
      href='https://stihi.ru/avtor/difuks'
      target='_blank'
      role='button'
    >
      stihi.ru
      <MenuItem>
        <Icon icon={Icons.QUILL}/>
      </MenuItem>
    </LinkStyled>
    <LinkStyled
      href='https://vk.com/difuks'
      target='_blank'
      role='button'
    >
      vk.com
      <MenuItem>
        <Icon icon={Icons.VK}/>
      </MenuItem>
    </LinkStyled>
    <LinkStyled
      href='https://t.me/difuks'
      target='_blank'
      role='button'
    >
      telegram
      <MenuItem>
        <Icon icon={Icons.TELEGRAM}/>
      </MenuItem>
    </LinkStyled>
    <LinkStyled
      href='https://github.com/DiFuks'
      target='_blank'
      role='button'
    >
      github
      <MenuItem>
        <Icon icon={Icons.GITHUB}/>
      </MenuItem>
    </LinkStyled>
    <LinkStyled
      role='button'
      href='https://www.instagram.com/di_fuks/'
      target='_blank'
    >
      instagram
      <MenuItem>
        <Icon icon={Icons.INSTAGRAM}/>
      </MenuItem>
    </LinkStyled>
  </>
));

const LinkStyled = styled.a`
  font-size: 0;
`;
