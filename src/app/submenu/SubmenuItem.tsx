import * as React from 'react';
import { Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Colors, Routes, StringBoolean } from '@app/common/constants';
import { getStringByBoolean } from '@app/common/helpers/getStringByBoolean';

export interface IProps {
  id: number;
  url: string;
  children: React.ReactChild;
  submenuDisable: () => void;
  isActive: boolean;
  isDisableTabindex: boolean;
}

export interface IPropsStyled {
  active?: StringBoolean;
}

export const SubmenuItem: React.FC<IProps> = ({id, children, submenuDisable, url, isActive, isDisableTabindex}) => (
  <SubmenuItemStyled
    to={Routes.POST.replace(':url', url)}
    onClick={() => submenuDisable()}
    active={getStringByBoolean(isActive)}
    tabIndex={isDisableTabindex ? -1 : 0}
  >
    <Box
      px={'2rem'}
    >
      {id}
    </Box>
    {children}
  </SubmenuItemStyled>
);

const SubmenuItemStyled = styled(Link)<IPropsStyled>`
  height: 5rem;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  width: 25rem;
  flex-shrink: 0;
  display: flex;
  color: ${Colors.GREY_200};
  border-bottom: 1px solid ${Colors.GREY_60};
  text-decoration: none;
  font-weight: 600;
  transition: background .2s linear;
  :last-child {
    border-bottom: none;
  }
  ${props => props.active === StringBoolean.TRUE && css`
    background-color: ${Colors.GREY_45};
  `}
  &:hover {
    background-color: ${Colors.GREY_45};
  }
`;
