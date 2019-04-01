import * as React from 'react';
import { MenuItem } from './MenuItem';
import { Icon } from '../icon';
import { Icons } from '../common/constants';

export const MenuSocials: React.FunctionComponent<{}> = () => (
  <React.Fragment>
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
  </React.Fragment>
);
