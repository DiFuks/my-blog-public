import * as React from 'react';

import { Icon } from '@app/icon/Icon';
import { Icons } from '@app/common/constants/icons';

import { MenuItem } from './MenuItem';

export const MenuSocials: React.FC = React.memo(() => (
  <>
    <a
      title='stihi.ru'
      href='https://stihi.ru/avtor/difuks'
      target='_blank'
      role='button'
    >
      <MenuItem>
        <Icon icon={Icons.QUILL}/>
      </MenuItem>
    </a>
    <a
      title='vk.com'
      href='https://vk.com/difuks'
      target='_blank'
      role='button'
    >
      <MenuItem>
        <Icon icon={Icons.VK}/>
      </MenuItem>
    </a>
    <a
      title='telegram'
      href='https://t.me/ffuchs'
      target='_blank'
      role='button'
    >
      <MenuItem>
        <Icon icon={Icons.TELEGRAM}/>
      </MenuItem>
    </a>
    <a
      title='github'
      href='https://github.com/DiFuks'
      target='_blank'
      role='button'
    >
      <MenuItem>
        <Icon icon={Icons.GITHUB}/>
      </MenuItem>
    </a>
    <a
      title='instagram'
      role='button'
      href='https://www.instagram.com/di_fuks/'
      target='_blank'
    >
      <MenuItem>
        <Icon icon={Icons.INSTAGRAM}/>
      </MenuItem>
    </a>
  </>
));
