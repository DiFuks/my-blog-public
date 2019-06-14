import * as React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'grid-styled';

import { Colors, Routes } from '@app/common/constants';
import { Link } from 'react-router-dom';

export interface IProps {
  id: number;
  url: string;
  children: React.ReactChild;
  submenuDisable: () => void;
  isActive: boolean;
}

export interface IPropsStyled {
  active: 'false' | 'true';
}

export const SubmenuItem: React.FunctionComponent<IProps> = ({id, children, submenuDisable, url, isActive}) => (
  <SubmenuItemStyled
    to={Routes.POST.replace(':url', url)}
    onClick={() => submenuDisable()}
    active={isActive && 'true' || 'false'}
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
  ${props => props.active === 'true' && css`
    background-color: ${Colors.GREY_45};
  `}
  &:hover {
    background-color: ${Colors.GREY_45};
  }
`;
