import * as React from 'react';
import { Icons } from '@app/common/constants';

export interface IProps {
  icon: Icons;
  viewBox?: string;
}

export const Icon: React.FunctionComponent<IProps> = ({icon, viewBox = '0 0 32 32'}) => (
  <svg
    viewBox={viewBox}
    width={30}
    height={30}
    fill='currentColor'
  >
    <path d={icon}/>
  </svg>
);
