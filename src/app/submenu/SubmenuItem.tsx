import * as React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import { Colors } from '@app/common/constants';
import { Link } from 'react-router-dom';

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

export const SubmenuItem: React.FunctionComponent<{}> = () => (
  <SubmenuItemStyled to={'/list/10'}>
      <Box
        px={'20px'}
      >
        1.
      </Box>
      Пункт меню
  </SubmenuItemStyled>
);
