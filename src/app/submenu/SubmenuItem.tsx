import * as React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import { Colors, Routes } from '@app/common/constants';
import { Link } from 'react-router-dom';

export interface IProps {
  id: number;
  children: React.ReactChild;
  submenuDisable: () => void;
}

const SubmenuItemStyled = styled(Link)`
  height: 5rem;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  width: 25rem;
  flex-shrink: 0;
  display: flex;
  color: ${Colors.WHITE};
  text-decoration: none;
  &:hover {
    background: ${Colors.GREY_45};
  }
`;

export const SubmenuItem: React.FunctionComponent<IProps> = ({id, children, submenuDisable}) => (
  <SubmenuItemStyled
    to={Routes.POST.replace(':id', id.toString())}
    onClick={() => submenuDisable()}
  >
      <Box
        px={'20px'}
      >
        {id}.
      </Box>
      {children}
  </SubmenuItemStyled>
);
