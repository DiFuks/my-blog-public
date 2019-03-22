import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import { Colors } from '@app/common/constants';

const HeaderStyled = styled(Flex)`
  width: 100%;
  height: 2.5rem;
  background: ${Colors.GREY_60};
  color: ${Colors.GREY_186};
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.03rem;
`;

export interface IProps {
  children: string;
}

export const Header: React.FunctionComponent<IProps> = ({children}) => (
  <HeaderStyled>
    {children}
  </HeaderStyled>
);
